from flask import Flask, jsonify, request
from flask_cors import CORS
from pathlib import Path
import pandas as pd
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

diseases = pd.read_csv('./data/diseases.csv').set_index('Disease')
modelfp = Path('models') / 'LogisticRegressionModel.pkl'

def get_disease(prediction, probability):
    disease = diseases.loc[prediction].to_dict()
    disease['name'] = prediction
    disease['probability'] = float(probability)
    
    disease['precautions'] = [value for key, value in disease.items() if 'Precaution' in key]
    disease = {key: value for key, value in disease.items() if 'Precaution' not in key}
    
    disease['treatments'] = [value for key, value in disease.items() if 'Treatment' in key]
    disease = {key: value for key, value in disease.items() if 'Treatment' not in key}
    
    return disease

@app.route('/api/predict/disease', methods=['POST'])
def predict_disease():
    data = request.get_json()
    model = joblib.load(open(modelfp, 'rb'))
    
    if not hasattr(model, 'predict'): return jsonify({'error': 'Not a valid model'}), 400
    
    X = np.array(data).reshape(1, -1)
    Y_probs = model.predict_proba(X)
    
    labels = model.classes_
    top_preds = np.argsort(Y_probs, axis=1)[:, -3:][:, ::-1]

    predictions = [{'prediction': labels[top_preds[0, j]], "probability": Y_probs[0, top_preds[0, j]]} for j in range(3)]
    diseases = [get_disease(**prediction) for prediction in predictions]
    
    return jsonify(diseases), 200

if __name__ == '__main__':
    app.run(debug=True)
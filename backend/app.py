from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

diseases = pd.read_csv('./data/diseases.csv').set_index('Disease')

@app.route('/api/predict/disease', methods=['POST'])
def predict_disease():
    data = request.get_json()
    model = joblib.load(open('./models/DecisionTreeModel.pkl', 'rb'))\
    
    if not hasattr(model, 'predict'):
        return jsonify({'error': 'Loaded object is not a valid model'}), 400
    
    prediction = model.predict(np.array(data).reshape(1, -1))
    prediction = str(prediction[0])
    
    disease = diseases.loc[prediction].to_dict()
    disease['name'] = prediction
    disease['description'] = disease.pop('Description')
    disease['precautions'] = [value for key, value in disease.items() if 'Precaution' in key]
    disease = {key: value for key, value in disease.items() if 'Precaution' not in key}
    
    return jsonify([disease]), 200

if __name__ == '__main__':
    app.run(debug=True)
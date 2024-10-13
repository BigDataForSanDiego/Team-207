from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

@app.route('/api/predict/disease', methods=['POST'])
def predict_disease():
    data = request.get_json()
    model = joblib.load(open('./models/DecisionTreeModel.pkl', 'rb'))\
    
    if hasattr(model, 'predict'):
        prediction = model.predict(np.array(data).reshape(1, -1))
        return jsonify({'prediction': str(prediction[0])}), 200
    else:
        return jsonify({'error': 'Loaded object is not a valid model'}), 400

if __name__ == '__main__':
    app.run(debug=True)
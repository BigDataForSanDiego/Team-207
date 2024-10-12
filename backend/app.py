from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

@app.route('/api/predict/disease', methods=['POST'])
def predict_disease():
    data = request.get_json()
    return jsonify({'prediction': str(data)})
    model = joblib.load(open('../models/model.pkl', 'rb'))
    
    if hasattr(model, 'predict'):
        prediction = model.predict(data)
        return jsonify({'prediction': str(prediction[0])}), 200
    else:
        return jsonify({'error': 'Loaded object is not a valid model'}), 400

if __name__ == '__main__':
    app.run(debug=True)
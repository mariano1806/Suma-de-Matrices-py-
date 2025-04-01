from flask import Flask, request, render_template, jsonify
import numpy as np

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sumar_matrices', methods=['POST'])
def sumar_matrices():
    data = request.json
    matrix1 = np.array(data['matrix1'])
    matrix2 = np.array(data['matrix2'])
    
    if matrix1.shape != matrix2.shape:
        return jsonify({'error': 'Las matrices deben tener las mismas dimensiones'}), 400
    
    result = matrix1 + matrix2
    return jsonify({'result': result.tolist()})

if __name__ == '__main__':
    app.run(debug=True)

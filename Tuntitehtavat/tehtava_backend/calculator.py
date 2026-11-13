import json
from flask import Flask, Response, request

app = Flask(__name__)

@app.route('/plus')
def calculate_sum():
    try:
        args = request.args
        number1 = request.form.get("num1")
        number2 = request.form.get("num2")
        sum = number1 + number2
        
        return sum
    
    except ValueError:
        response = {
            "message": "Invalid number as addend",
            "status": 400
        }
        json_response = json.dumps(response)
        http_response = Response(response=json_response, status=400, mimetype="application/json")
        return http_response
    


if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=5000)
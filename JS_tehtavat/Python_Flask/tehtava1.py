import json
from flask import Flask, Response

app = Flask(__name__)
@app.route('/prime_number/<int:number>')
def alkuLuku (number):
    isPrime = number >= 2
    
    for i in range (2, number):
        if number % i == 0:
            isPrime = False
            break
        
    response = {
        "number": number,
        "isPrime": isPrime
    }    
    return response

@app.errorhandler(404)
def page_not_found(error_code):
    response = {
        "message": "Invalid endpoint",
        "status": 404
    }
    json_response = json.dumps(response)
    http_response = Response(response = json_response, status = 404, mimetype = "application/json")
    return http_response
        
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)



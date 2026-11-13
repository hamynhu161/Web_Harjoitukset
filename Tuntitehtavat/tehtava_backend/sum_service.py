import json

from flask import Flask, Response, send_from_directory

app = Flask(__name__)
@app.route('/sum/<number1>/<number2>')
def calculate_sum(number1, number2):
    try:
        number1 = float(number1)
        number2 = float(number2)
        total_sum = number1+number2
        response = {
            "number1" : number1,
            "number2" : number2,
            "total_sum" : total_sum,
            "status" : 200
        }
        return response

    except ValueError:
        response = {
            "message": "Invalid number as addend",
            "status": 400
        }
        json_response = json.dumps(response)
        http_response = Response(response=json_response, status=400, mimetype="application/json")
        return http_response

@app.errorhandler(404)
def page_not_found(error_code):
    response = {
        "message": "Invalid endpoint",
        "status": 404
    }
    json_response = json.dumps(response)
    http_response = Response(response=json_response, status=404, mimetype="application/json")
    return http_response

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)
    
    
# from flask import Flask, Response
# import json
# helloworldapp = Flask(__name__)

# @helloworldapp.route('/helloworld/<kerrat>')
# def helloworld(kerrat):
#     try:
#         kerrat = int(kerrat)
#         viesti = "Hello World! " * kerrat
#         tilakoodi = 200
#         vastaus = {
#             "status": tilakoodi,
#             "viesti": viesti
#         }
#     except ValueError:
#         tilakoodi = 400
#         vastaus = {
#             "status": tilakoodi,
#             "teksti": "Virheellinen syöte, anna kokonaisluku"
#         }

#     jsonvast = json.dumps(vastaus)
#     return Response(response=jsonvast, status=tilakoodi, mimetype="application/json")

# @helloworldapp.errorhandler(404)
# def page_not_found(virhekoodi):
#     vastaus = {
#         "status" : "404",
#         "teksti" : "Virheellinen päätepiste, sivua ei löydy"
#     }
#     jsonvast = json.dumps(vastaus)
#     return Response(response=jsonvast, status=404, mimetype="application/json")

# if __name__ == '__main__':
#     helloworldapp.run(use_reloader=True, host='127.0.0.1', port=3000)

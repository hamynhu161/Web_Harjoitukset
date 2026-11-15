import json
from flask import Flask, Response

app = Flask(__name__)
app.json.ensure_ascii = False       #to output Finnish character

@app.route('/translate/<text>')
def translation (text):
    with open("dictionary.json", "r", encoding="utf-8") as file:
        data = json.load(file)

    word = text.lower()
    
    if word in data:      
        response = {
            "English": text,
            "Finnish": data[word]
        }
        return response
    else:
        response = {
            "error": "Word not found"
        }
        return response

@app.route("/words")  
def translationAll():
    with open("dictionary.json", "r", encoding="utf-8") as file:
        data = json.load(file)
    
    return data
    
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
    app.run(host ='127.0.0.1', port= 5000, use_reloader=True)
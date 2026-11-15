import json
from flask import Flask, request, Response

app = Flask(__name__)
app.json.ensure_ascii = False

@app.route("/add")
def addWord():
    args = request.args
    englishWord = args.get("en")
    finnishWord = args.get("fi")
    
    with open("dictionary.json", "r", encoding="utf-8") as file:
        data = json.load(file)
    
    data[englishWord.lower()] = finnishWord
    
    with open("dictionary.json", "w", encoding="utf-8") as file:
        json.dump(data, file, indent = 4)
    
    response = {
        "English": englishWord,
        "Finnish": finnishWord
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
    app.run(host="127.0.0.1", port= 7000, use_reloader=True)
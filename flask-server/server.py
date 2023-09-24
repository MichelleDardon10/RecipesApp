from flask import Flask

app = Flask(__name__)

#Prueba Memver API route
@app.route("/recipes")
def members():
    return {"recipes": ["Recipe1","Recipe2","Recipe3"]}


if __name__ == "__main__":
    app.run(debug=True)
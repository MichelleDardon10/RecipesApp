from flask import Flask

app = Flask(__name__)

#RECIPES API route
@app.route("/recipes")
def recipes():
    return {"recipes": ["Recipe1", "Recipe2", "Recipe3"]}

if __name__ == "main":
    app.run(debug=True)

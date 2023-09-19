from flask import Flask, render_template, request, jsonify
import json
from API.routes import api_bp, recipes

app = Flask(__name__)
app.register_blueprint(api_bp, url_prefix='/api')  # Registra el Blueprint del API

@app.route('/', methods=['GET'])
def show_feed():
    return render_template('feed.html', recipes=recipes)

@app.route('/buscar', methods=['GET'])
def search_recipe():
    query = request.args.get('query', '')  # Consulta del formulario de búsqueda
    results = []
    for recipe in recipes:
        if query.lower() in recipe['name'].lower() or \
           query.lower() in recipe['creator'].lower() or \
           any(query.lower() in ingredient.lower() for ingredient in recipe['ingredients']):
            results.append(recipe)

    return render_template('results.html', results=results, query=query)

@app.route('/results', methods=['GET'])
def show_results():
    search_query = request.args.get('query', '').lower()
    matching_recipes = [recipe for recipe in recipes if
                        search_query in recipe['name'].lower() or
                        search_query in recipe['creator'].lower() or
                        any(search_query in ingredient.lower() for ingredient in recipe['ingredients'])]
    
    return render_template('results.html', query=search_query, resultados=matching_recipes)


if __name__ == '__main__':
    app.run()
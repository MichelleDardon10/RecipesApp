from flask import Blueprint, jsonify, request

api_bp = Blueprint('api', __name__)

recipes = [
    {
        'id': 1,
        'name': 'Ensalada Caprese',
        'steps': ['Corta los tomates y la mozzarella en rodajas',
                  'Alterna las rodajas de tomate y mozzarella en un plato',
                  'Coloca hojas de albahaca fresca entre las capas',
                  'Riega con aceite de oliva y vinagre balsámico',
                  'Sazona con sal y pimienta al gusto'],
        'rating': 4.5,
        'difficulty': 'Fácil',
        'comments': ['Deliciosa!', 'Fácil de hacer'],
        'ingredients': ['Tomates maduros', 'mozzarella fresca', 'hojas de albahaca', 'aceite de oliva', 'vinagre balsámico', 'sal', 'pimienta'],
        'image_path': '/static/images/ensalada_caprese.jpg',
        'creator': 'Nosotros'
    },
    {
        'id': 2,
        'name': 'Tostadas con Aguacate',
        'steps': ['Tuesta el pan integral hasta que esté dorado',
                  'Mientras tanto, aplasta el aguacate en un tazón y sazona con sal y pimienta',
                  'Extiende la mezcla de aguacate sobre las tostadas',
                  'Opcionalmente, añade chiles rojos secos triturados para un toque picante'],
        'rating': 4.0,
        'difficulty': 'Fácil',
        'comments': ['Muy buena'],
        'ingredients': ['Pan integral', 'sal', 'aguacate maduro', 'pimienta', 'chiles rojos secos (opcional)'],
        'image_path': '/static/images/tostadas_con_aguacate.jpg',
        'creator': 'Nosotros'
    },
]

@api_bp.route('/recipes', methods=['GET'])
def get_recipes():
    return jsonify(recipes)

@api_bp.route('/recipes', methods=['POST'])
def add_recipe():
    data = request.json  # Obtener datos del cuerpo de la solicitud JSON
    new_recipe = {
        'id': len(recipes) + 1,
        'name': data.get('name', 'Nueva Receta'),
        'steps': data.get('steps', []),
        'rating': float(data.get('rating', 0.0)),
        'difficulty': data.get('difficulty', 'Desconocida'),
        'comments': [],
        'ingredients': data.get('ingredients', []),
        'creator':data.get('name', 'Username'),
    }
    recipes.append(new_recipe)
    return jsonify({'message': 'Receta agregada exitosamente'})

@api_bp.route('/recipes/search', methods=['GET'])
def search_recipes():
    search_query = request.args.get('query', '').lower()
    
    # Filtra las recetas que coinciden con la consulta
    matching_recipes = [recipe for recipe in recipes if
                        search_query in recipe['name'].lower() or
                        search_query in recipe['creator'].lower() or
                        any(search_query in ingredient.lower() for ingredient in recipe['ingredients'])]
    
    return jsonify(matching_recipes)


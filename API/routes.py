from flask import Blueprint, jsonify, request

api_bp = Blueprint('api', __name__)

# Ejemplo de una lista de recetas (puede reemplazarse con una base de datos real)
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
        'image_path': '/static/images/ensalada_caprese.jpg'
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
        'ingredients': ['Pan integral', 'aguacate maduro', 'sal', 'pimienta', 'chiles rojos secos (opcional)'],
        'image_path': '/static/images/tostadas_con_aguacate.jpg'
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
    }
    recipes.append(new_recipe)
    return jsonify({'message': 'Receta agregada exitosamente'})

from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import db, Recipe, RecipeIngredient, RecipeComment, RecipeStep

app = Flask(__name__)

# Configura la URL de la base de datos que se utilizará en SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:recipesapp@localhost/backend'

# Deshabilita el seguimiento de modificaciones de SQLAlchemy
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializa la extensión SQLAlchemy con tu aplicación Flask
db.init_app(app)

# Cambia la creación de tablas para que use las clases de modelos definidas
with app.app_context():
    db.create_all()

# RECIPES API route
@app.route("/recipes", methods=['GET'])
def get_recipes():
    recipes = Recipe.query.all()
    recipe_data = []

    for recipe in recipes:
        recipe_dict = {
            'id': recipe.id,
            'name': recipe.name,
            'post_by': recipe.post_by,
            'valoration': recipe.valoration,
            'image': recipe.image,
            'ingredients': [ingredient.ingredient_name for ingredient in recipe.ingredients],
            'comments': [comment.comment_text for comment in recipe.comments],
            'steps': [step.step_text for step in recipe.steps]
        }
        recipe_data.append(recipe_dict)

    return jsonify({'recipes': recipe_data})

if __name__ == "__main__":
    app.run(debug=True)
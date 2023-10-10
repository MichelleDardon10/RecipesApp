from flask import Flask, jsonify
from models import db, Recipe, RecipeIngredient, RecipeComment, RecipeStep
import json

app = Flask(__name__)


# Configura la URL de la base de datos que se utilizará en SQLAlchemy
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "mysql+pymysql://root:recipesapp@localhost/backend"

# Deshabilita el seguimiento de modificaciones de SQLAlchemy
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Inicializa la extensión SQLAlchemy con tu aplicación Flask
db.init_app(app)

with app.app_context():
    # Crea las tablas solo si no existen
    db.create_all()

    # Cargar datos desde Data.json si la tabla está vacía
    if not Recipe.query.first():
        with open("../my-app/src/Data.json", "r") as json_file:
            data = json.load(json_file)
            for item in data:
                recipe = Recipe(
                    id=item["id"],
                    name=item["name"],
                    post_by=item["post_by"],
                    valoration=item["valoration"],
                    image=item["image"],
                )

                # Agregar ingredientes
                for ingredient_name in item["ingredients"]:
                    ingredient = RecipeIngredient(
                        ingredient_name=ingredient_name, recipe_id=item["id"]
                    )
                    recipe.ingredients.append(ingredient)

                # Agregar comentarios
                for comment_data in item["comments"]:
                    comment = RecipeComment(
                        comment_text=comment_data["comment_text"],
                        posted_by=comment_data["posted_by"],
                        recipe_id=item["id"],
                    )
                    recipe.comments.append(comment)

                # Agregar pasos
                for step_text in item["steps"]:
                    step = RecipeStep(step_text=step_text, recipe_id=item["id"])
                    recipe.steps.append(step)

                db.session.add(recipe)

            db.session.commit()


# Ruta API para obtener todas las recetas
@app.route("/recipes", methods=["GET"])
def get_recipes():
    recipes = Recipe.query.all()
    recipe_data = []

    for recipe in recipes:
        # Crea un diccionario para almacenar la información de la receta
        recipe_dict = {
            "id": recipe.id,
            "name": recipe.name,
            "post_by": recipe.post_by,
            "valoration": recipe.valoration,
            "image": recipe.image,
            "ingredients": [],
            "comments": [],
            "steps": [],
        }

        # Recorre y agrega los ingredientes a la lista de ingredientes
        for ingredient in recipe.ingredients:
            ingredient_dict = {"ingredient_name": ingredient.ingredient_name}
            recipe_dict["ingredients"].append(ingredient_dict)

        # Recorre y agrega los comentarios a la lista de comentarios
        for comment in recipe.comments:
            comment_dict = {
                "comment_text": comment.comment_text,
                "posted_by": comment.posted_by,
            }
            recipe_dict["comments"].append(comment_dict)

        # Recorre y agrega los pasos a la lista de pasos
        for step in recipe.steps:
            step_dict = {"step_text": step.step_text}
            recipe_dict["steps"].append(step_dict)

        recipe_data.append(recipe_dict)

    return jsonify({"recipes": recipe_data})


if __name__ == "__main__":
    print("Starting the application...")
    app.run(debug=True)

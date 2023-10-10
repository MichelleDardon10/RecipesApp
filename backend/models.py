from flask_sqlalchemy import SQLAlchemy

#sqlalchelmy es utilizado para manejar bases de datos en flask
db = SQLAlchemy()

class RecipeIngredient(db.Model):
    __tablename__ = 'tblrecipeingredients'
    id = db.Column(db.Integer, primary_key=True)
    ingredient_name = db.Column(db.String(255), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('tblrecipes.id'), nullable=False)

class RecipeComment(db.Model):
    __tablename__ = 'tblrecipecomments'
    id = db.Column(db.Integer, primary_key=True)
    comment_text = db.Column(db.String(300), nullable=False)
    posted_by = db.Column(db.String(150), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('tblrecipes.id'), nullable=False)

class RecipeStep(db.Model):
    __tablename__ = 'tblrecipesteps'
    id = db.Column(db.Integer, primary_key=True)
    step_text = db.Column(db.String(255), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey('tblrecipes.id'), nullable=False)

class Recipe(db.Model):
    __tablename__ = 'tblrecipes'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), index=True, unique=False, nullable=False)
    post_by = db.Column(db.String(150), index=True, unique=False)
    valoration = db.Column(db.Float)
    image = db.Column(db.String(255))  # Guardar la URL de la imagen o nombre del archivo

    # Establecer relaciones con otras tablas
    ingredients = db.relationship('RecipeIngredient', backref='recipe', lazy=True)
    comments = db.relationship('RecipeComment', backref='recipe', lazy=True)
    steps = db.relationship('RecipeStep', backref='recipe', lazy=True)

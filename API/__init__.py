from flask import Blueprint

api_bp = Blueprint('api', __name__)

# Importar las rutas del API
from . import routes

# RecipesApp

App used for posting, reading, sharing and planning recipes

1. DATABASE -> MySQL (XAMPP/MySQLConfigurator)
2. BACKEND -> MODELS.PY: SQLAlchemy es una libreria de flask para manejo de bases de datos cuando se usa python
3. MODELS.PY -> establece las tablas que se utilizan (se puede ver en PHPMYADMIN o WORKBENCH)
4. APP.PY llama a la base de datos
5. APP.PY llama ruta API "/recipes" para obtener las recetas almacenadas en formato JSON

En my-app (FRONTEND)

1. Data.json contiene las recetas
2. index.js maneja los links

from flask import Flask, render_template
from API.routes import api_bp, recipes # Asegúrate de importar el Blueprint del API

app = Flask(__name__)
app.register_blueprint(api_bp, url_prefix='/api')  # Registra el Blueprint del API


@app.route('/', methods=['GET'])
def show_feed():
    # Aquí obtén la lista de recetas de tu base de datos o de donde la tengas
    # Por ahora, supondré que tienes una variable 'recipes' con las recetas
    return render_template('feed.html', recipes=recipes)


if __name__ == '__main__':
    app.run()

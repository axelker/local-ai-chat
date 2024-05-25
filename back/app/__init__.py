from flask import Flask
from config.config import Config
from app.main.routes import bp as main_bp
from app.main.llm.routes import bp as llm_bp
from flask_cors import CORS

def create_app(config_class=Config):
    app = Flask(__name__)
    CORS(app) # WAR REDIFINE FOR PROD : Active CORS pour toutes les routes de l'application
    app.config.from_object(config_class)
    app.register_blueprint(main_bp)    
    app.register_blueprint(llm_bp)

    return app

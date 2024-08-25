from flask import Flask
from config.config import Config
from app.main.routes import bp as main_bp
from app.main.llm.routes import bp as llm_bp
from flask_cors import CORS

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    CORS(app, resources={r"/*": {"origins": app.config['ALLOWED_ORIGINS']}})
    app.register_blueprint(main_bp)    
    app.register_blueprint(llm_bp)

    return app

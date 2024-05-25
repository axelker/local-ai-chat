from flask import Blueprint
from flask import request,jsonify
from .services.ollama_service import chat,describe_img
import base64

bp = Blueprint('llm', __name__)

@bp.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    if 'inp' in data:
        inp = data['inp']
        res = chat(inp)
        return jsonify({'message': res.message}),200
    return jsonify({'error': 'Entrée manquante'}), 400

@bp.route('/chat/img', methods=['POST'])
def chat_img():
    if 'img' in request.files:
        img = request.files['img']
        # Lire le contenu du fichier et le convertir en bytes
        img_bytes = img.read()
        # Convertir les bytes en base64
        img_base64 = base64.b64encode(img_bytes).decode('utf-8')
        res = describe_img(img_base64)
        return jsonify({'message': res.message}), 200
    return jsonify({'error': 'Aucune image trouvée'}), 400
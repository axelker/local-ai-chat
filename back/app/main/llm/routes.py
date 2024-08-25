from flask import Blueprint
from flask import request,jsonify
from .services.ollama_service import chat as chat_ollama,describe_img as describe_img_ollama
import base64

bp = Blueprint('llm', __name__)

@bp.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    if 'inp' in data:
        inp = data['inp']
        res = chat_ollama(inp)
        return jsonify({'message': res.message}),200
    return jsonify({'error': 'Inp in not provided in the request body.'}), 400

@bp.route('/chat/img', methods=['POST'])
def chat_img():
    if 'img' in request.files:
        img = request.files['img']
        # Convert img to bytes
        img_bytes = img.read()
        # Convert to base64
        img_base64 = base64.b64encode(img_bytes).decode('utf-8')
        res = describe_img_ollama(img_base64)
        return jsonify({'message': res.message}), 200
    return jsonify({'error': 'Img in not provided in the request body.'}), 400
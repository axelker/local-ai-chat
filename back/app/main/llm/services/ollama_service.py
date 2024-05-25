import ollama
from ..models.chat_response import ChatResponse

def chat(inp):
    res = ollama.chat(model='llama3', messages=[{
        'role': 'user',
        'content': inp,
    }])
    return ChatResponse(res['message']['content'])

def describe_img(img):
    res = ollama.chat(
	model="llava",
	messages=[
		{
			'role': 'user',
			'content': 'Describe this image:',
			'images': [img]
		}
	])
    return ChatResponse(res['message']['content'])

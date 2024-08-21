
# Local AI Chat
Local AI chat using Angular 16 - Flask 2.1 - Ollama  - Llama3 - LLava - LangChain

## Ollama
- Download ollama.
(You can move ollama models on an external disk and update the path of env var `OLLAMA_MODELS`)
## Start for the back
- Open terminal : `ollama start` && `ollama run modelName` (ex : llama3)
- Create local env : python -m venv `envname`
- Activate env : source envname/Scripts/activate
- pip install -r requirements.txt

(Deactivate env : deactivate)


## Run Back
- Define env var :  export FLASK_APP=app
- DEV env : export FLASK_ENV=development
- flask run

## Start for the front
- npm install

## Run Front
- npm start

## Sample rag
This repo is an exemple to make a rag with json and pdf data.
(Use wsl terminal for install requirement.txt)

from bs4 import BeautifulSoup
import requests
from langchain_community.embeddings import GPT4AllEmbeddings
from langchain_community.llms import Ollama
from langchain.chains import RetrievalQA
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
import time as timer

# Function to extract text of web page
def extract_text_from_web(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    web_text = soup.get_text(separator=' ')  # Séparateur pour éviter que tout le texte soit collé
    return web_text

# URL web page
url = "https://fr.wikipedia.org/wiki/Bible"
web_text = extract_text_from_web(url)

# Class with content and metada
class SimpleDocument:
    def __init__(self, text, metadata=None):
        self.page_content = text
        self.metadata = metadata if metadata is not None else {}

# Load text into a document
data = [SimpleDocument(web_text, metadata={"source": url})]

# Init Ollama
llm = Ollama(
    base_url='http://localhost:11434',  # Base URL de Ollama
    model='llama3',
    callback_manager=CallbackManager([StreamingStdOutCallbackHandler()])
)

# Split in small chunck
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
all_splits = text_splitter.split_documents(data)

# Db vector
embedding = GPT4AllEmbeddings(model_name="nomic-embed-text-v1.5.f16.gguf")
vectorstore = Chroma.from_documents(documents=all_splits, embedding=embedding)

# QA
chain = RetrievalQA.from_chain_type(
    llm, 
    retriever=vectorstore.as_retriever(),
    verbose=True
)

# Request
query = "What is this page about?"  # Replace with your request

print(f"Query: {query}")

# Execute the QA
start_t = timer.time()
response = chain.invoke({"query": query})
elapsed_t = timer.time() - start_t  # Calculer le temps écoulé
print(f"\n\nElapsed time: {elapsed_t}")
print(response['result'])

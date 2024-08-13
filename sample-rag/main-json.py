from langchain_community.embeddings import GPT4AllEmbeddings
from langchain_community.llms import Ollama
from langchain.chains import RetrievalQA
from langchain_community.document_loaders import JSONLoader
from langchain_community.vectorstores import Chroma
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

import time as timer
#JSON
loader_json = JSONLoader(file_path="./countries.json", jq_schema=".countries[]", text_content=False)
documents = loader_json.load()

llm = Ollama(
    base_url='http://localhost:11434', #Base url who ollama is run
    model='llama3',
    callback_manager=CallbackManager([StreamingStdOutCallbackHandler()])
)


embedding = GPT4AllEmbeddings(model_name="nomic-embed-text-v1.5.f16.gguf")
db = Chroma.from_documents(documents, embedding)
retriever = db.as_retriever()

# Define RetrievalQA chain
chain = RetrievalQA.from_chain_type(
    llm, 
    retriever=retriever,
    verbose=True
)

# Define prompt
query = "Which country has the most inhabitants ?"

print(f"Query: {query}")

# Run the chain
start_t = timer.time()
response = chain.invoke({"query": query})
elapsed_t = timer.time() - start_t # Calculate time
print(f"\n\nElapsed time: {elapsed_t}")
print(response['result'])

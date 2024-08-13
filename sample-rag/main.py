from langchain_community.embeddings import GPT4AllEmbeddings
from langchain_community.llms import Ollama
from langchain.chains import RetrievalQA
from langchain_community.document_loaders import PyMuPDFLoader
from langchain_community.document_loaders import JSONLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

import time as timer

#Pdf
pdf_path = "rust_book-types.pdf"
loader = PyMuPDFLoader(pdf_path)
data = loader.load()


llm = Ollama(
    base_url='http://localhost:11434', #Base url who ollama is run
    model='llama3',
    callback_manager=CallbackManager([StreamingStdOutCallbackHandler()])
)

# Split the text into smaller chunks
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
all_splits = text_splitter.split_documents(data)

embedding = GPT4AllEmbeddings(model_name="nomic-embed-text-v1.5.f16.gguf")
vectorstore = Chroma.from_documents(documents=all_splits, embedding=embedding)

# Define RetrievalQA chain
chain = RetrievalQA.from_chain_type(
    llm, 
    retriever=vectorstore.as_retriever(),
    verbose=True
)

# Define prompt
query = "Explain me what is the u64 type in rust"

print(f"Query: {query}")

# Run the chain
start_t = timer.time()
response = chain.invoke({"query": query})
elapsed_t = timer.time() - start_t # Calculate time
print(f"\n\nElapsed time: {elapsed_t}")
print(response['result'])

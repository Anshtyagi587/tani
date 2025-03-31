from transformers import pipeline
import gradio as gr

# Load your fine-tuned model
model = pipeline("text-generation", model="gpt2")  # Replace 'gpt2' with your valid model path

# Function for chatbot response
def chatbot_response(prompt):
    response = model(prompt, max_length=100, do_sample=True)
    return response[0]['generated_text']

# Gradio UI for Testing
iface = gr.Interface(fn=chatbot_response, inputs="text", outputs="text")
iface.launch()

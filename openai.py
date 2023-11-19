import openai
import gradio

openai.api_key = "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"

messages = [{"role": "system", "content": user_input}]

def CustomChatGpt(user_input):
    messages.append({"role": "user", "content": user_input})
    response = open.ai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = messages
    )
    ChatGPT_reply = response["choices"][0]["messages"]["content"]
    messages.append({"role": "assistant", "content": ChatGPT_reply})
    return ChatGPT_reply

demo = gradio.Interface(fn=CustomChatGpt, input = "text", outputs = "text", title = "Your Title")

demo.launch()

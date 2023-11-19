import openai

openai.api_key = "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"

completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": "Write an essay about dogs"}])
print(completion.choices[0].message.content)
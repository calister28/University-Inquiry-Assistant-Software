function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    // Example: Replace this URL with the actual API endpoint
    const apiUrl = 'https://api.example.com/answer?q=' + encodeURIComponent(userInput);

    // Make an asynchronous request to the API
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extract the answer from the API response
            const answer = data.answer || "I'm sorry, I couldn't find an answer.";
            return answer;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return "I'm sorry, an error occurred while fetching data.";
        });
}

function handleUserInput() {
    const userInput = document.getElementById('user-input').value;
    const chatContainer = document.getElementById('chat-container');

    // User's message
    chatContainer.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Bot's response
    getBotResponse(userInput)
        .then(botResponse => {
            chatContainer.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
            // Scroll to the bottom of the chat container
            chatContainer.scrollTop = chatContainer.scrollHeight;
        })
        .catch(error => {
            console.error('Error generating bot response:', error);
        });

    // Clear the user input
    document.getElementById('user-input').value = '';
}

document.getElementById('send-button').addEventListener('click', handleUserInput);

// Toggle Chat Visibility
function toggleChat() {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.style.display = chatContainer.style.display === "block" ? "none" : "block";
}

// Send Message Function
function sendMessage(option) {
    const chatMessages = document.getElementById("chatMessages");

    // Define Bot Responses
    const responses = {
        services: "We offer IT consulting, web development, and cloud solutions.",
        pricing: "Our pricing plans depend on your requirements. Contact us for details.",
        contact: "You can reach us at contact@itconsulting.com or call +1234567890.",
        career: "We are hiring! Send your resume to hr@itconsulting.com.",
        exit: "Thank you for chatting with us! Have a great day! 😊"
    };

    // Append User Message
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerText = `You: ${option.charAt(0).toUpperCase() + option.slice(1)}`;
    chatMessages.appendChild(userMessage);

    // **Force Scroll Immediately After Adding Message**
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Append Bot Response with a Delay
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.innerText = responses[option] || "I'm sorry, I didn't understand that.";
        chatMessages.appendChild(botMessage);

        // **Ensure Scroll Moves to Latest Message**
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

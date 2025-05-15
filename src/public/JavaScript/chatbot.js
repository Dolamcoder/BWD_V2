document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".chat-footer input");
    const sendBtn = document.querySelector(".chat-footer .btn");
    const chatBody = document.querySelector(".chat-body");

    function appendMessage(message, sender) {
        const messageEl = document.createElement("div");
        messageEl.classList.add("message", `${sender}-message`);
        const avatar = document.createElement("div");
        avatar.classList.add("avatar");
        avatar.innerHTML = sender === "bot" ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';

        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = message;

        if (sender === "bot") {
            messageEl.appendChild(avatar);
            messageEl.appendChild(content);
        } else {
            messageEl.appendChild(content);
        }

        chatBody.appendChild(messageEl);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function sendMessage() {
        const message = input.value.trim();
        if (message !== "") {
            appendMessage(message, "user");
            input.value = "";

            // Bot response giả lập
            setTimeout(() => {
                const botReply = "Bạn vừa nói: " + message;
                appendMessage(botReply, "bot");
            }, 500);
        }
    }
    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Modo Dark";
    darkModeButton.classList.add("dark-mode-btn");
    darkModeButton.style.position = "fixed";
    darkModeButton.style.bottom = "10px";
    darkModeButton.style.left = "10px";
    document.body.appendChild(darkModeButton);

    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
    const form = document.getElementById("registration-form"); // Formulário
    const opiniaoField = document.getElementById("message"); // Campo de opinião
    document.querySelector('.form-container').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        event.target.reset();
    });

    // Criação do contador de caracteres
    const charCounter = document.createElement("small");
    charCounter.id = "char-counter";
    charCounter.textContent = "Caracteres: 0/200";
    opiniaoField.insertAdjacentElement("afterend", charCounter);

    // Atualização do contador durante a digitação
    opiniaoField.addEventListener("input", () => {
        const length = opiniaoField.value.length;
        charCounter.textContent = `Caracteres: ${length}/200`;

        if (length > 200) {
            charCounter.style.color = "red";
        } else {
            charCounter.style.color = "green";
        }
    });

    // Reseta a contagem após o envio do formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o envio real do formulário (opcional, caso seja só visual)
        alert("Cadastro enviado com sucesso!");

        // Limpa o campo de texto e reseta o contador
        opiniaoField.value = ""; // Limpa o campo de texto
        charCounter.textContent = "Caracteres: 0/200"; // Reseta o texto do contador
        charCounter.style.color = "green"; // Reseta a cor para o estado inicial
    });
});




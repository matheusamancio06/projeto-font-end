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
    const form = document.getElementById("registration-form");
    const opiniaoField = document.getElementById("message");
    document.querySelector('.form-container').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        event.target.reset();
    });
    
    const charCounter = document.createElement("small");
    charCounter.id = "char-counter";
    charCounter.textContent = "Caracteres: 0/200";
    opiniaoField.insertAdjacentElement("afterend", charCounter);

    opiniaoField.addEventListener("input", () => {
        const length = opiniaoField.value.length;
        charCounter.textContent = `Caracteres: ${length}/200`;

        if (length > 200) {
            charCounter.style.color = "red";
        } else {
            charCounter.style.color = "green";
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        alert("Cadastro enviado com sucesso!");

        opiniaoField.value = ""; 
        charCounter.textContent = "Caracteres: 0/200"; 
        charCounter.style.color = "green"; 
    });
});




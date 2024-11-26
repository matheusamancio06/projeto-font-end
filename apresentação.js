document.addEventListener("DOMContentLoaded", () => {
    // Modo Dark Mode
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
});
const mainTitle = document.querySelector("h1");

mainTitle.addEventListener("mouseover", () => {
    mainTitle.style.color = "#000"; // Cor ao passar o mouse
});

mainTitle.addEventListener("mouseout", () => {
    mainTitle.style.color = "#0077b6"; // Cor original
});

// Seleciona todas as imagens dos membros
const memberImages = document.querySelectorAll('.member img');

// Adiciona o efeito ao passar o mouse sobre as imagens
memberImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)'; // Aumenta a imagem
        image.style.transition = 'transform 0.3s ease'; // Adiciona suavidade à animação
    });

    // Ao retirar o mouse
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; // Retorna a imagem ao tamanho original
    });
});


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

    // Fade-in ao carregar as imagens
    const images = document.querySelectorAll(".card img");
    images.forEach((img) => {
        img.style.opacity = "0";
        img.style.transition = "opacity 1.7s ease";
        img.addEventListener("load", () => {
            img.style.opacity = "1";
        });
    });
    
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        // Ao passar o mouse (hover)
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1)";
            card.style.transition = "transform 0.3s ease"; // Adiciona suavidade
        });

        // Ao retirar o mouse
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});


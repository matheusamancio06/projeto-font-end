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
});
const mainTitle = document.querySelector("h1");

mainTitle.addEventListener("mouseover", () => {
    mainTitle.style.color = "#000";
});

mainTitle.addEventListener("mouseout", () => {
    mainTitle.style.color = "#0077b6";
});

const memberImages = document.querySelectorAll('.member img');

memberImages.forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)'; 
        image.style.transition = 'transform 0.3s ease';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});


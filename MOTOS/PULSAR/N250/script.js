
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".color-button");
    const images = document.querySelectorAll(".motorcycle-image");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const color = this.getAttribute("data-color");
            images.forEach(img => img.style.display = "none"); // Oculta todas las imágenes
            switch(color) {
                default:
                    document.getElementById("default-image").style.display = "block";
            }
        });
    });
});

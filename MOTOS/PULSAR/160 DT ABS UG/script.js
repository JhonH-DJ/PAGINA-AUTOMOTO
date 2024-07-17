document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".color-button");
    const images = document.querySelectorAll(".motorcycle-image");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const color = this.getAttribute("data-color").toLowerCase(); // Convertir a minúsculas
            images.forEach(img => img.style.display = "none"); // Ocultar todas las imágenes

            switch(color) {
                case "red":
                    document.getElementById("Red-image").style.display = "block";
                    break;
                case "blue":
                    document.getElementById("Blue-image").style.display = "block";
                    break;
                case "white":
                    document.getElementById("white-image").style.display = "block";
                    break;
                case "black":
                    document.getElementById("black-image").style.display = "block";
                    break;
                default:
                    document.getElementById("default-image").style.display = "block";
            }
        });
    });
});
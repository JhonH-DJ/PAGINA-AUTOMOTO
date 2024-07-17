document.addEventListener("DOMContentLoaded", function() {
    const points = document.querySelectorAll(".point");
    const heroImage = document.getElementById("heroImage");
    let currentIndex = 0;

    function changeImage(index) {
        // Remove the active class from all points
        points.forEach(p => p.classList.remove("active"));
        // Add the active class to the clicked point
        points[index].classList.add("active");
        // Change the hero image source
        const newImage = points[index].getAttribute("data-image");
        heroImage.setAttribute("src", newImage);
    }

    points.forEach((point, index) => {
        point.addEventListener("click", function() {
            currentIndex = index;
            changeImage(index);
        });
    });

    // Change image every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % points.length;
        changeImage(currentIndex);
    }, 3000);
});


        document.addEventListener("DOMContentLoaded", function() {
    const priceRange = document.getElementById("price");
    const priceOutput = document.querySelector(".price-range");

    priceRange.addEventListener("input", function() {
        priceOutput.innerHTML = `S/.${priceRange.value}`;
    });
});
document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        document.querySelectorAll('.motorcycle-image').forEach(image => {
            if (image.id === color) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    });
});

// Display the default image initially
document.querySelectorAll('.motorcycle-image').forEach(image => {
    if (image.id !== 'default-image') {
        image.style.display = 'none';
    }
}); 
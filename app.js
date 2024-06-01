document.addEventListener('DOMContentLoaded', function() {
    const textItems = document.querySelectorAll('.text-item');
    const mainImage = document.getElementById('main-image');

    textItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all text items
            textItems.forEach(el => el.classList.remove('active'));

            // Add active class to the clicked item
            item.classList.add('active');

            // Change the image
            const newImage = item.getAttribute('data-image');
            mainImage.src = newImage;
        });
    });
});

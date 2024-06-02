let slideIndex = 0;
showSlides();

function currentSlide(n) {
    slideIndex = n - 1; // Adjust slideIndex to be zero-based
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("card");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}





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

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function showSlide(n) {
    if (n < 0) {
        currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slides[currentSlide].style.display = "block";
}

showSlide(currentSlide);

prevButton.addEventListener("click", (event) => {
    event.preventDefault();
    currentSlide--;
    showSlide(currentSlide);
});

nextButton.addEventListener("click", (event) => {
    event.preventDefault();
    currentSlide++;
    showSlide(currentSlide);
}); 

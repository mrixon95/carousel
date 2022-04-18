/*
    Task: Capture the user's search query
    1. Add an event listener for 'keyup'
    2. Capture the event in a 'let' called 'searchQuery' - storing the value
    3. Make sure the captured value is lowercase
    4. Log to the console to demonstrate it works
*/

const slides = document.getElementsByClassName('carousel-item');
index = 0;


const left_button = document.getElementById("left_button");
left_button.addEventListener('click', function() {
    slides[index].classList.add("carousel-item-hidden");
    index -= 1;
    if (index < 0) {
        index += slides.length;
    }
    index %= slides.length;

    slides[index].classList.remove("carousel-item-hidden");
    slides[index].classList.add("carousel-item-visible");
    console.log("left");
});

const right_button = document.getElementById("right_button");
right_button.addEventListener('click', function() {
    slides[index].classList.add("carousel-item-hidden");
    index += 1;
    index %= slides.length;

    slides[index].classList.remove("carousel-item-hidden");
    slides[index].classList.add("carousel-item-visible");
    console.log("right");
});




// This variable holds the current rating.
let rating = 1;

const container = document.getElementById('container');

// Create 5 span elements and add them to the starsDiv. Add the rated class to the first star.
let star1 = document.createElement('span');
star1.className = 'star';
star1.classList.add('rated');
star1.innerHTML = '&#9733';
container.appendChild(star1);

let star2 = document.createElement('span');
star2.className = 'star';
star2.innerHTML = '&#9733';
container.appendChild(star2);

let star3 = document.createElement('span');
star3.className = 'star';
star3.innerHTML = '&#9733';
container.appendChild(star3);

let star4 = document.createElement('span');
star4.className = 'star';
star4.innerHTML = '&#9733';
container.appendChild(star4);

let star5 = document.createElement('span');
star5.className = 'star';
star5.innerHTML = '&#9733';
container.appendChild(star5);

// Create the h2 element that displays the current rating.
let h2 = document.createElement('h2');
h2.id = 'ratingText';
let text = document.createTextNode(`Current rating: ${rating}`);
h2.appendChild(text);
container.appendChild(h2);

// Put the star span elements in an array so you can loop trough it.
const starsNodeList = document.querySelectorAll('.star');
const stars = Array.prototype.slice.call(starsNodeList);

// The click on a star event function.
const clickedStar = (e) =>{
    // Put the span clicked in a variable.
    const clickedStar = e.currentTarget;
    // Put the index  of the clicked star in a variable.
    const index = stars.findIndex(star => star === clickedStar);
    // Update the rating variable.
    rating = index+1;
    // Update the h2 elemnent.
    h2.innerText = `Current rating ${rating}`;
    // Loop trough the stars array and add the rated css class to the stars up to and including the index.
    // Remove the rated css class from the stars after the index.
    stars.forEach((star, i) => i <= index ? star.classList.add('rated'):star.classList.remove('rated')); 
}
// Add a click event listener to each star element.
stars.forEach((star) => star.addEventListener('click', clickedStar));

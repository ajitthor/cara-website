const bar = document.getElementById('bar'); // Mobile menu button (hamburger icon)
const nav = document.getElementById('navbar'); // Navbar

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggles the 'active' class on click
    });
}

document.addEventListener('click', (event) => {
    const isClickInside = nav.contains(event.target) || bar.contains(event.target);

    if (!isClickInside) {
        nav.classList.remove('active'); // Closes the navbar if clicked outside
    }
});
// sinle product 
var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName('small-img');

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        MainImg.src = smallImg[i].src;  // Change the main image to the clicked thumbnail's source
    }
}

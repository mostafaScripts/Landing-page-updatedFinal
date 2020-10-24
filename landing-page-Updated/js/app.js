/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navigationItems = document.querySelector('#navbar__list');
const sectionsElem = document.querySelectorAll('section')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function getScreenSizes (x) {
// returns the size of an element and its position relative to the viewport.
boundRes = x.getBoundingClientRect();
//client height: Get the height and width.
    return (
        boundRes.top >= 0 && boundRes.left >= 0 & boundRes.bottom <= (window.innerHeight || document.documentElement.clientHeight) && boundRes.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// Build menu 
function navBuilder() {
    for (let item of sectionsElem) {
        // creating list element
        let sectionItem = document.createElement('li');
        // adding class to the section 
        sectionItem.className = 'nav__link';
        sectionItem.dataset.nav = item.id;
        sectionItem.innerText = item.dataset.nav;
        //appending section to the nav items
        navigationItems.appendChild(sectionItem);
    };
};
navBuilder();

// Add class 'active' to section when near top of viewport
function appendActiveClass() {
    let index = sectionsElem.length;
    while(--index && window.scrollY + 50 < sectionsElem[index].offsetTop) {}
    sectionsElem.forEach((link) => link.classList.remove('your-active-class'));
    sectionsElem[index].classList.add('your-active-class');
}

// Scroll to anchor ID using scrollTO event
function goToSection() {
    navigationItems.addEventListener('click', function (event) {
        const clickEvent = document.querySelector('#'+event.target.dataset.nav);
        clickEvent.scrollIntoView();
    });
};
goToSection();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to section on link click
// Set sections as active
appendActiveClass();
window.addEventListener('scroll', appendActiveClass);


//Creating top button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
}
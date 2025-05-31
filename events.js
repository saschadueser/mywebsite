// Simple animation for the header navigation

// Navigation elements
const navTrigger = document.querySelector("header .fa");
const navigation = document.querySelector("header nav");
const navigationItems = document.querySelectorAll("header nav a");

// navigation EventHandler
navTrigger.addEventListener("click", function(e) {
    navigation.classList.toggle("active");
    e.target.classList.toggle("fa-xmark");
});


// Setting Tabindexes

// Which elements should get tabIndexes
const tabIndexElements = [navTrigger, navigationItems];

// Set the tabindex
let currentTabIndex = 0;
tabIndexElements.forEach( el => {
    if( el.length > 1) {
        el.forEach(li => {
            li.setAttribute("tabindex", ++currentTabIndex)
        });
    } else {
        el.setAttribute("tabindex", ++currentTabIndex);
    }
})

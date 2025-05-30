// Simple animation for the header navigation

// Navigation elements
const navTrigger = document.querySelector("header .fa");
const navigation = document.querySelector("header nav");

// navigation EventHandler
navTrigger.addEventListener("click", function(e) {
    navigation.classList.toggle("active");
    e.target.classList.toggle("fa-xmark");
});
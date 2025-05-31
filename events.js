// Simple animation for the header navigation

// collection of elements
const navTrigger = document.querySelector("header .fa");
const navigation = document.querySelector("header nav");
const navigationItems = document.querySelectorAll("header nav a");
const navigationItemsTabIndexes = [];
const teaserButton = document.querySelector("#teaser .button");

const navigationEventsToActivate = ["click", "keydown"];

// navigation EventHandler
navigationEventsToActivate.forEach( kindOfEvent => {
    navTrigger.addEventListener(`${kindOfEvent}`, (e) => {
        // EventHandler for open oder close navigation
        if(kindOfEvent === "click" || e.key == "Enter") {
            navigation.classList.toggle("active");
            e.target.classList.toggle("fa-xmark");
        }
        // Handling the tabindex depending if nav is visible or not
        if(navigation.classList.contains("active")) {
            let i = 0;
            navigationItems.forEach( el => {
                el.setAttribute("tabindex", navigationItemsTabIndexes[i++])
            })
        } else {
            navTabIndexReset();
        }
    })
})

// Setting Tabindexes

// Which elements should get tabIndexes
const tabIndexElements = [navTrigger, navigationItems, teaserButton];

// Set the tabindex, anker points for using Tab Key
let currentTabIndex = 0;
tabIndexElements.forEach( el => {
    if( el.length > 1) {
        el.forEach(li => {
            li.setAttribute("tabindex", ++currentTabIndex);
        });
    } else {
        el.setAttribute("tabindex", ++currentTabIndex);
    }
})

// function to reset the tabindex of navigation items
function navTabIndexReset() {
    navigationItems.forEach( el => {
        navigationItemsTabIndexes.push(el.getAttribute("tabindex"));
        el.setAttribute("tabindex", -1)
    })
};

// auto load to reset tabindex in nav-items - invisible at beginning
window.addEventListener("load", navTabIndexReset);




// animation for nav-items at unfocus items
navItemEvents = ["mouseout", "focusout"];

navItemEvents.forEach( eventTrigger => {
    navigationItems.forEach( el => {
        el.addEventListener(`${eventTrigger}`, (e) => {
            e.target.classList.toggle("movingOut");
        })
    })
})  
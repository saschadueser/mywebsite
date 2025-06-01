// Simple animation for the header navigation

// collection of elements
const navTrigger = document.querySelector("header .fa");
const navigation = document.querySelector("header nav");
const navigationItems = document.querySelectorAll("header nav a");
const navigationItemsTabIndexes = [];
const teaserButton = document.querySelector("#teaser .button");

const navigationEventsToActivate = ["click", "keydown"];

// animation for service section
// Slide effect for the text-content
const serviceKacheln = document.querySelectorAll(".service-boxes > div");
const serviceContent = document.querySelector(".service-content-track");
const serviceContentItems = document.querySelectorAll(".service-content-track > div");

// Callback for Event Handler for navigation
function navToggle(e) {
// EventHandler for open oder close navigation
        if(e.type === "click" || (e.type === "keydown" && e.key == "Enter")) {
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
}

// Callback for Event Handler for the Service Boxes
function serviceBoxesClickable(e) {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
        serviceContentItems.forEach( textEl => {
            textEl.style.opacity = "0"
        })

        switch(e.currentTarget.classList.value) {
            case "service-websites":
                serviceContent.style.transform = "translate(-100%)";
                serviceContentItems[1].style.opacity = "1";
                break;
            case "service-seo":
                serviceContent.style.transform = "translate(-200%)";
                serviceContentItems[2].style.opacity = "1";
                break;
            case "service-wartung":
                serviceContent.style.transform = "translate(-300%)";
                serviceContentItems[3].style.opacity = "1";
                break;
            case "service-text":
                serviceContent.style.transform = "translate(-400%)";
                serviceContentItems[4].style.opacity = "1";
                break;
        }

    }

}

// navigation EventHandler
navigationEventsToActivate.forEach( eventTrigger => {
    // Eventhandler for navigation
    navTrigger.addEventListener(`${eventTrigger}`, navToggle);
    // Eventhandler for service Boxes
    serviceKacheln.forEach( el => {
        el.addEventListener(`${eventTrigger}`, serviceBoxesClickable)
    })
})








// animation for nav-items at unfocus items
navItemEvents = ["mouseout", "focusout"];

navItemEvents.forEach( eventTrigger => {
    navigationItems.forEach( el => {
        el.addEventListener(`${eventTrigger}`, (e) => {
            e.target.classList.toggle("movingOut");
        })
    })
})  






// Setting Tabindexes

// Which elements should get tabIndexes
const tabIndexElements = [navTrigger, navigationItems, teaserButton, serviceKacheln];

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
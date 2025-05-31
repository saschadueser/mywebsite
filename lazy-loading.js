/*  
    ***
    Observer for lazy loading all sections of the page
    ***
*/

// Elements to observe
const sections = document.querySelectorAll("section .content");

// Setting the hidden class for all elements at first
sections.forEach( el => {
    el.classList.add("allHidden");
})

// Options set
const options = {
    threshold: 0.5,
    rootMargin: "100px"
}

// Observer function
let observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("allHidden");
            entry.target.classList.add("visible")
            observer.unobserve(entry.target);
        }
    })
}, options);

// Setting observer to all section elements
sections.forEach( el => {
    observer.observe(el);
});

// JavaScript to handle adding and removing the 'active' class for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    // Function to highlight the active link
    function highlightNavLink() {
        const scrollY = window.scrollY;
        navLinks.forEach((link) => {
            const sectionId = link.getAttribute("href").substring(1); // Remove the '#' character
            const section = document.getElementById(sectionId);
            
            if (section.offsetTop <= scrollY+55 && section.offsetTop + section.offsetHeight > scrollY+55) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", highlightNavLink);

    // Initial call to highlightNavLink to set the initial state
    highlightNavLink();

    // Smooth scrolling when a navigation link is clicked
    navLinks.forEach((link) => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const sectionId = link.getAttribute("data-section-id");
            const section = document.getElementById(sectionId);
            window.scrollTo({
                top: section.offsetTop - 54, // Adjust for the fixed navbar height
                behavior: "smooth",
            });
        });
    });

});


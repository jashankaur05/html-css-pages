document.addEventListener("DOMContentLoaded", function() {
    function toggleMenu() {
        const menu = document.getElementById("navbarLinks");
        if (menu) {
            menu.classList.toggle("open");
        } else {
            console.error("Menu not found in the DOM.");
        }
    }

    // Add event listener to the menu toggle button
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    } else {
        console.error("Menu toggle button not found in the DOM.");
    }
});

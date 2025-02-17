document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const navbarLinks = document.querySelector(".navbar-links");

    toggleButton.addEventListener("click", (event) => {
        event.preventDefault(); 
        console.log("Hamburger clicked!");  
        navbarLinks.classList.toggle("active");
        console.log("Active class added:", navbarLinks.classList.contains("active")); 
    });

  
    document.addEventListener("click", (event) => {
        if (!toggleButton.contains(event.target) && !navbarLinks.contains(event.target)) {
            navbarLinks.classList.remove("active");
            console.log("Navbar closed");
        }
    });
});

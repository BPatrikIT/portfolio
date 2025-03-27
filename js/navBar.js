// Opens and closes the responsive menu when clicking the hamburger icon (adds and removes the respNavOpen class)

function respMenuOpen(){
    let respNav = document.querySelector('.respNav');
    respNav.classList.toggle("respNavOpen");
    console.log("Responsive menu opened");
};

// Closes the responsive menu
function closeRespMenu(){
    let respNav = document.querySelector('.respNav');
    respNav.classList.remove("respNavOpen");
    document.querySelector('nav input[type="checkbox"]').checked = false;
};

// Closes the responsive menu when the window is resized over the responsive menu breakpoint
// This is necessary because the responsive menu will remain open if the window is resized while it is open
window.addEventListener('resize', function(){
    if(window.innerWidth > 991.5){
        closeRespMenu();
    }
});


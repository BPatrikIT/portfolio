function loadNavBar() {
    fetch('navBar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navBar-container').innerHTML = data;
            highlightActivePage(); // Call this function after loading the navbar
        })
        .catch(error => console.error('Error loading navBar.html:', error));
}

function highlightActivePage() {
    const links = document.querySelectorAll('.navLinks a'); 
    const currentPage = window.location.pathname.split("/").pop(); // Get current filename

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

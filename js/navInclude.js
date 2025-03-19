function loadNavBar() {
    fetch('navBar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navBar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navBar.html:', error));
}
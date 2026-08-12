// loadPublications.js

window.addEventListener('load', function() {
    fetch('html/publications.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('publicationsContainer').innerHTML = data;
        });
});

// loadAbout.js

window.addEventListener('load', function() {
    fetch('about.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('aboutContainer').innerHTML = data;
        });
});
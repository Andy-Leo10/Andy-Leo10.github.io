// loadProfile.js

window.addEventListener('load', function() {
    fetch('profile.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('profileContainer').innerHTML = data;
        });
});
let aboutUs = document.getElementsByClassName('aboutUs-container');
let contactInfo = document.getElementsByClassName('inputField');
let map = document.getElementById('mapId');

for (let i = 0; i < aboutUs.length; i++) {
    aboutUs[i].addEventListener('mouseover', function() {
        aboutUs[i].style.background = 'yellow';
    });

    aboutUs[i].addEventListener('mouseout', function() {
        aboutUs[i].style.background = 'white';
    });
}

for (let i = 0; i < contactInfo.length; i++) {
    contactInfo[i].addEventListener('mouseover', function() {
        contactInfo[i].style.background = 'yellow';
    });

    contactInfo[i].addEventListener('mouseout', function() {
        contactInfo[i].style.background = 'white';
    });
}

map.addEventListener('mouseover', function() {
    map.style.background = 'yellow';
});

map.addEventListener('mouseout', function() {
    map.style.background = 'white';
});

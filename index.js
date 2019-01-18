let aboutUs = document.getElementsByClassName('aboutUs-container');
let contactInfo = document.getElementsByClassName('inputField');
let map = document.getElementById('mapId');

for (let i = 0; i < aboutUs.length; i++) {
    aboutUs[i].addEventListener('mouseover', function() {
        highlightItem(aboutUs[i])
    });

    aboutUs[i].addEventListener('mouseout', function() {
        unHighlightItem(aboutUs[i])
    });
}

for (let i = 0; i < contactInfo.length; i++) {
    contactInfo[i].addEventListener('mouseover', function() {
        highlightItem(contactInfo[i]);
    });

    contactInfo[i].addEventListener('mouseout', function() {
        unHighlightItem(contactInfo[i]);
    });
}

map.addEventListener('mouseover', function() {
    highlightItem(map);
});

map.addEventListener('mouseout', function() {
    unHighlightItem(map);
});

function highlightItem(item) {
    item.style.background = 'yellow';
}

function unHighlightItem(item) {
    item.style.background = 'white';
}
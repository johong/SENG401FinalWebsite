let aboutUs = document.getElementsByClassName('aboutUs-container');
let contactInfo = document.getElementsByClassName('inputField');
let map = document.getElementById('mapId');
let area = document.getElementById('area');
let mapInfo = document.getElementById('map-info')

for (let i = 0; i < aboutUs.length; i++) {
    aboutUs[i].addEventListener('mouseover', function() {
        highlightItem(aboutUs[i])
    });

    aboutUs[i].addEventListener('mouseout', function() {
        unHighlightAboutUs(aboutUs[i])
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

area.addEventListener('mouseover', function() {
    showMapInfo();
});

area.addEventListener('mouseout', function(){
    unShowMapInfo();
});

function showMapInfo(){
    mapInfo.style.display = 'block';
}

function unShowMapInfo(){
    mapInfo.style.display = 'none';
}

function highlightItem(item) {
    item.style.background = '#e1e1e1';
}

function unHighlightAboutUs(item){
    item.style.background = 'white'
}

function unHighlightItem(item) {
    item.style.background = '#F0F0F0';
}

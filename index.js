let aboutUs = document.getElementsByClassName('aboutUs-container');
let contactInfo = document.getElementsByClassName('inputField');
let map = document.getElementById('mapId');
let area = document.getElementById('area');
// let mapInfo = document.getElementById('map-info')

let mapName = document.getElementById('map-name');
let mapLat = document.getElementById('map-lat');
let mapLong = document.getElementById('map-long');
let mapPop = document.getElementById('map-pop');
let mapArea = document.getElementById('map-area')

const header = document.getElementsByClassName('top');
      aboutUs = document.getElementsByClassName('aboutUs-container'),
      contactInfo = document.getElementsByClassName('inputField'),
      map = document.getElementById('mapId'),
      area = document.getElementById('area'),
      mapInfo = document.getElementById('map-info');

let edmontonInfo = {
    Name: 'Edmonton',
    Latitude: 53.5444,
    Longitude: -113.4909,
    Population: 960015,
    Area: '684.37 SqKM'
};

edmontonInfo['Density'] = (edmontonInfo['Population']/684.37).toString() + ' SqKM';


header[0].addEventListener('mouseover', function() {
    document.getElementById('currentSectionName').innerHTML = 'Top';
    highlightItem(header[0]);
});

header[0].addEventListener('mouseout', function() {
    document.getElementById('currentSectionName').innerHTML = '';
    unHighlightAboutUs(header[0]);
});

for (let i = 0; i < aboutUs.length; i++) {
    aboutUs[i].addEventListener('mouseover', function() {
        document.getElementById('currentSectionName').innerHTML = 'About Us';
        highlightItem(aboutUs[i])
    });

    aboutUs[i].addEventListener('mouseout', function() {
        document.getElementById('currentSectionName').innerHTML = '';
        unHighlightAboutUs(aboutUs[i])
    });
}

for (let i = 0; i < contactInfo.length; i++) {
    contactInfo[i].addEventListener('mouseover', function() {
        document.getElementById('currentSectionName').innerHTML = 'Contact Us';
        highlightItem(contactInfo[i]);
    });

    contactInfo[i].addEventListener('mouseout', function() {
        document.getElementById('currentSectionName').innerHTML = '';
        unHighlightItem(contactInfo[i]);
    });
}

map.addEventListener('mouseover', function() {
    document.getElementById('currentSectionName').innerHTML = 'Map';
    highlightItem(map);
});

map.addEventListener('mouseout', function() {
    document.getElementById('currentSectionName').innerHTML = '';
    unHighlightItem(map);
});

area.addEventListener('mouseover', function() {
    showMapInfo();
});

area.addEventListener('mouseout', function(){
    unShowMapInfo();
});

function showMapInfo(){
    mapName.innerHTML = "Name: "+edmontonInfo.Name;
    mapLat.innerHTML = "Latitude: "+edmontonInfo.Latitude;
    mapLong.innerHTML = "Longitude: "+edmontonInfo.Longitude;
    mapPop.innerHTML = "Population: "+edmontonInfo.Population;
    mapArea.innerHTML = "Area: "+edmontonInfo.Area;

}

function unShowMapInfo(){
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

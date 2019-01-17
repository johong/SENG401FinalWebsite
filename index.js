let name = document.getElementsByClassName("aboutUs-container");

for (let i = 0; i < name.length; i++) {
    name[i].addEventListener('mouseover', function() {
        name[i].style.background = "yellow";
    });

    name[i].addEventListener('mouseout', function() {
        name[i].style.background = "white";
    });
}
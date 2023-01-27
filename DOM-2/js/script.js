

let links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', aWasClicked);
}


function aWasClicked(event) {
    event.preventDefault();
    console.log('a clicked', event);
    //confirm("Vouliez-vous vraiment clicker ?");
    event.target.style.color = "#AEB0AA";
    event.target.parentElement.style.color = "#33FF33";
}



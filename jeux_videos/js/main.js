fetch("http://localhost:8000/api.php")
.then((response) => {
    return response.json();
})
.then((jeux) => {
    let ul = document.createElement('ul');
    for(let game of jeux) {
        let li = document.createElement('li');
        li.textContent = game.name;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
});

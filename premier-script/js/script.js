let name = 'Jonathan';
let lastName = name === 'Jonathan' ? 'Cambier' : 'dgbdfgdfg';

alert('hello ' + lastName);


showMessage('Prof', 'Bienvenue au cours de JS');
showMessage('Eleve 1', 'Merci j\'attendais ça avec impatience');

function showMessage(from, message) {
    alert(from + ': ' + message);
}

if (isEven(5)){
    alert("5 est pair");
} else {
    alert("5 est impair");
}



function isEven(numberToTest) {
    let even = numberToTest % 2 === 0;
    return even;
    // return numberToTest % 2 === 0;

}

let age = askUserAge(); // age prend la valeur retournée par la function

if (isAge(age)) { // Ce que retourne la function isAge est testé dans le if
    let ageStatus = getAgeStatus(age);
    displayMessage(ageStatus);
} else {
    displayError();
}


function askUserAge() { // La fonction doit retourner la valeur entrée dans le prompt.
    return prompt("Quel est voter âge ?");
}
function isAge(ageToTest) { // isAge retourne un boolean
    return ageToTest > 0 && ageToTest < 130;
}
function getAgeStatus(ageToTest) {
    console.log(ageToTest);
    let status = 'enfant';

    if (ageToTest > 12 && ageToTest < 18) {
        status = 'ado';
    } else if ( ageToTest > 18) {
        status = 'adulte';
    }
    return status;
}

function displayMessage(ageStatus) {
    alert('Vous êtes un(e) ' + ageStatus);
}
function displayError() {
    alert('Mauvais valeur entrée');
}

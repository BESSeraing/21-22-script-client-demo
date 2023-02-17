document.getElementById('myForm')
    .addEventListener('submit', onFormSubmitted);


function onFormSubmitted(event) {

    let form = event.target;
    let emailInputs = form.querySelectorAll('input[type=email]');

    for(let i = 0; i<emailInputs.length; i++) {
        console.log(emailInputs[i].value);
        if (!emailInputs[i].value.includes('.')) {
            console.log('email invalide');
            event.preventDefault();
            emailInputs[i].style.border = '1px solid red';
        }
    }

}


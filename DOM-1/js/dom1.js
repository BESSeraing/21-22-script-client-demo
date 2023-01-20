let aElement = document.createElement('a');
aElement.href = 'https://fnac.com';
aElement.textContent = 'bien à la fnac';

let parent = document.querySelector('p');
parent.appendChild(aElement);

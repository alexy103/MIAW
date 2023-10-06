/* eslint-disable no-console */
console.log(document.querySelector('h1'));
console.log(document.querySelectorAll('.pcard').length);

document.getElementsByClassName('pcard__nom')[0].innerHTML = 'Nouveau Nom';

document.querySelector('.set-of-pcard').appendChild(document.querySelector('.pcard'));

const cards = document.querySelectorAll('.pcard');

cards[1].classList.add('cacher');

function checkDeuxiemeCard() {
  if (!cards[1].classList.contains('cacher')) {
    document.querySelector('.regenerer').innerHTML = 'Cacher la deuxième card';
  } else {
    document.querySelector('.regenerer').innerHTML = 'Faire réapparaître la deuxième card';
  }
}

document.querySelector('.regenerer').addEventListener('click', () => {
  cards[1].classList.toggle('cacher');
  checkDeuxiemeCard();
});

document.querySelectorAll('.pcard__suppression').forEach((e) => {
  e.addEventListener('click', () => {
    e.parentElement.classList.toggle('cacher');
    checkDeuxiemeCard();
  });
});

document.querySelector('.regenerer2').addEventListener('click', () => {
  cards.forEach((e) => {
    e.classList.remove('cacher');
    document.querySelector('.regenerer').innerHTML = 'Cacher la deuxième card';
  });
});

cards.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.toggle('pcard--reduit');
  });
});

function addCard() {
  const newCard = cards[0].cloneNode(true);
  document.querySelector('.set-of-pcard').appendChild(newCard);
}

document.querySelector('.addCard').addEventListener('click', () => {
  addCard();
});

let timerId;

document.querySelector('.addTimer').addEventListener('click', () => {
  timerId = setInterval(() => {
    addCard();
  }, 1000);
});

document.querySelector('.stopTimer').addEventListener('click', () => {
  clearInterval(timerId);
});

const h2 = document.querySelectorAll('h2');

h2.forEach((e) => {
  if (e.innerHTML === 'formulaire') {
    e.insertAdjacentHTML('afterend', 'Remplissez les champs pour créer une nouvelle carte');
  }
});

const form = document.querySelector('form');
let newCardNom;
let newCardFonction;
let newCardPhoto;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  newCardNom = document.querySelector('#nom').value;
  newCardFonction = document.querySelector('#fonction').value;
  newCardPhoto = document.querySelector('#photo').value;

  addCard();
  const nom = document.querySelectorAll('.pcard__nom');
  nom[nom.length - 1].innerHTML = newCardNom;

  const fonction = document.querySelectorAll('.pcard__fonction');
  fonction[fonction.length - 1].innerHTML = newCardFonction;

  const nouvellePhoto = `<img alt="Avatar de ${newCardNom}" class="pcard__portrait" src="assets/img/${newCardPhoto}" >`;

  const image = document.querySelectorAll('.pcard__cadre-portrait');
  image[image.length - 1].innerHTML = nouvellePhoto;
});

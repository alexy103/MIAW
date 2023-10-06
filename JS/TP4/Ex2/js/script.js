/* eslint-disable no-console */

const voyages = document.querySelectorAll('.voyage');
const etoiles = document.querySelectorAll('.voyage__etoile');
let favoris = document.querySelectorAll('.voyage--favori');

function refreshFavoris() {
  document.querySelector('.phrase-nb-favoris').innerHTML = favoris.length;
}

refreshFavoris();

etoiles.forEach((etoile) => {
  etoile.addEventListener('click', () => {
    etoile.parentElement.classList.toggle('voyage--favori');
    favoris = document.querySelectorAll('.voyage--favori');
    refreshFavoris();
  });
});

document.querySelector('.vider').addEventListener('click', () => {
  voyages.forEach((voyage) => {
    voyage.classList.remove('voyage--favori');
    favoris = document.querySelectorAll('.voyage--favori');
    refreshFavoris();
  });
});

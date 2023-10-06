/* eslint-disable no-undef */
/* eslint-disable no-console */

// const data1 = {
//   window: { title: 'Sample Widget', width: 500, height: 500 },
//   image: { src: 'images/logo.png', coords: [250, 150, 350, 400] },
//   messages: [
//     { text: 'Save', offset: [10, 30] },
//     { text: 'Quit', offset: [30, 10] }],
// };

// console.log(data1.window.title);
// console.log(data1.image.coords[2]);
// console.log(data1.messages.length);
// console.log(data1.messages[data1.messages.length - 1].offset[1]);

// const menu = {
//   elements: [
//     { titre: 'Titre1', lien: 'lien' },
//     { titre: 'Titre2', sousMenu: 'sous-menu' },
//   ],
// };

// console.log(menu);

// fetch('http://localhost:3000/exemple')
//   .then((response) => response.json())
//   .then((data) => {
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     const ul = document.createElement('ul');

//     h2.innerText = `${data[0].nom}`;
//     p.innerText = `${data[0].adresse.cp} ${data[0].adresse.ville}`;

//     data[0].notes.forEach((note) => {
//       const li = document.createElement('li');
//       li.innerText = note;
//       ul.appendChild(li);
//     });

//     document.querySelector('section').appendChild(h2);
//     document.querySelector('section').appendChild(p);
//     document.querySelector('section').appendChild(ul);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json())
//   .then((data) => {
//     document.querySelector('section').innerHTML += '<ul>';
//     data.forEach((e) => {
//       if (e.completed) {
//         document.querySelector('section').innerHTML += `<li>${e.id}</li>`;
//       }
//     });
//     document.querySelector('section').innerHTML += '</ul><ul>';

//     data.forEach((e) => {
//       if (!e.completed) {
//         document.querySelector('section').innerHTML += `<li>${e.id}</li>`;
//       }
//     });
//     document.querySelector('section').innerHTML += '</ul>';
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

const h2 = document.createElement('h2');
const p = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const error = document.createElement('p');
error.innerText = 'Veuillez entrer une ville valide';
let isError = false;

let lat = 43.6043;
let lon = 1.4437;
const map = L.map('map').setView([lat, lon], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

document.querySelector('#recherche').addEventListener('submit', (event) => {
  event.preventDefault();
  const ville = document.querySelector('#saisieVille').value;

  map.setView([lat, lon]);

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=ca8816823d3b5e844c666813baf9d333&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      if (isError) {
        document.querySelector('#recherche').removeChild(error);
        isError = false;
      }
      h2.innerText = `Température à ${data.name} : ${data.main.temp} °C`;
      p.innerText = `${data.weather[0].description}`;
      p2.innerText = `Humidité : ${data.main.humidity} %`;
      p3.innerText = `[${data.coord.lat}, ${data.coord.lon}]`;
      lat = data.coord.lat;
      lon = data.coord.lon;

      document.querySelector('section').appendChild(h2);
      document.querySelector('section').appendChild(p3);
      document.querySelector('section').appendChild(p);
      document.querySelector('section').appendChild(p2);
    })
    .catch(() => {
      document.querySelector('#recherche').appendChild(error);
      isError = true;
    });
});

fetch('https://data.toulouse-metropole.fr/api/explore/v2.1/catalog/datasets/defibrillateurs/records?limit=100')
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((e) => {
      L.marker([e.geo_point_2d.lat, e.geo_point_2d.lon]).addTo(map);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const ul = document.createElement('ul');
document.querySelector('section').appendChild(ul);

document.querySelector('#wiki').addEventListener('submit', (event) => {
  event.preventDefault();
  const wiki = document.querySelector('#saisieWiki').value;

  fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&formatversion=2&srsearch=${wiki}`)
    .then((response) => response.json())
    .then((data) => {
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
      data.query.search.forEach((e) => {
        const li = document.createElement('li');
        li.innerText = e.title;
        ul.appendChild(li);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

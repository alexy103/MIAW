/* eslint-disable no-console */

fetch('https://api.nasa.gov/planetary/apod?api_key=dROHdZDYWzGgwEYLpaZhNbCJ3kwsL9acfhWjK482')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.innerText = data.title;
    p.innerText = data.explanation;
    document.querySelector('header').appendChild(h1);
    document.querySelector('main').appendChild(p);
    document.querySelector('header').style.backgroundImage = `url(${data.hdurl})`;
  })
  .catch((err) => {
    console.log(err);
  });

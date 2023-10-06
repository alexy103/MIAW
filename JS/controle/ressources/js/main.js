document.querySelector('.videos').classList.add('cacher');

document.querySelector('#videos').addEventListener('click', () => {
  document.querySelector('.images').classList.add('cacher');
  document.querySelector('.images').classList.remove('afficher');

  document.querySelector('.videos').classList.add('afficher');
  document.querySelector('.videos').classList.remove('cacher');
});

document.querySelector('#images').addEventListener('click', () => {
  document.querySelector('.videos').classList.add('cacher');
  document.querySelector('.videos').classList.remove('afficher');

  document.querySelector('.images').classList.add('afficher');
  document.querySelector('.images').classList.remove('cacher');
});

function esImage(i) {
  return i.endsWith('.jpg');
}

fetch('https://abourmau.lpmiaw.univ-lr.fr/2023/miaw/man-js/')
  .then((response) => response.json())
  .then((data) => {
    data.images.forEach((e) => {
      if (!esImage(e.large_url)) {
        const video = document.createElement('video');
        video.src = e.large_url;
        video.controls = 'enabled';
        document.querySelector('aside').appendChild(video);
      }
    });

    // On crée une image et l'ajoute au HTML
    const img1 = document.createElement('img');
    img1.src = data.images[0].large_url;
    img1.id = 'img1';
    document.querySelector('figure').appendChild(img1);
    
    const figcaption1 = document.createElement('figcaption');
    figcaption1.innerText = img1.src.slice(56, -4).replaceAll('_', ' ');
    document.querySelector('figure').appendChild(figcaption1);

    // On crée une description et l'ajoute au HTML
    data.images.slice(1, data.images.length - 1).forEach((e) => {
      if (esImage(e.large_url)) {
        const img = document.createElement('img');
        img.src = data.images[0].large_url;
        img.classList.add('cacher');
        
        const figcaption = document.createElement('figcaption');
        figcaption.innerText = e.large_url.slice(56, -4).replaceAll('_', ' ');
        figcaption.style.display = 'none';

        document.querySelector('figure').appendChild(img);
        document.querySelector('figure').appendChild(figcaption);
      }
    });

    data.images.forEach(e => {
      if (esImage(e.large_url)) {
        const li = document.createElement('li');
        li.innerHTML = '<i class="fa fa-circle"></i>';
        document.querySelector('.menuImages ul').appendChild(li);
      }
    });

document.querySelectorAll('.menuImages li').forEach((li, index) => {
  li.addEventListener('click', () => {
    document.querySelectorAll('figure img').forEach(img => {
      img.classList.add('cacher');
    });

    document.querySelector(`figure img:nth-child(${index + 1})`).classList.remove('cacher');

    // Réinitialisez tous les légendes à la classe cacher
    document.querySelectorAll('figure figcaption').forEach(figcaption => {
      figcaption.style.display = 'none';
    });

    // Affichez la légende correspondante en modifiant la propriété display
    document.querySelector(`figure figcaption:nth-child(${index + 1})`).style.display = 'block';
  });
});



  })
  .catch((err) => {
    console.log(err);
  });

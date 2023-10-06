/*
Ecrire une fonction unique(tab) qui retourne un tableau de tous les
éléments qui n'apparaissent qu'une fois dans le tableau tab dans l'ordre
original des éléments du tableau. Si aucun élément n’apparaît qu'une fois
la fonction doit retourner un tableau vide.

Ex : unique([1, 2, 3, 4, 1, 4]) -> [2, 3]
*/

function unique(tab) {
  const res = [];
  tab.forEach((e) => {
    tab.shift();
    if (tab.includes(e)) {
      res.push(e);
    }
  });
  return res;
}

console.log(unique([1, 2, 3, 4, 1, 4]));

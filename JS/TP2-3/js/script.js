/* eslint-disable no-console */
const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

function vowel(mot) {
  let cpt = 0;
  for (let i = 0; i < mot.length; i += 1) {
    if (voyelles.includes(mot[i])) {
      cpt += 1;
    }
  }
  return cpt;
}

console.log(vowel('Je suis en cours'));

function palindrome(mot) {
  const split = mot.split('').reverse();
  for (let i = 0; i < mot.length; i += 1) {
    if (mot[i] !== split[i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome('kayak'));
console.log(palindrome('test'));

function uppercase(mot) {
  const firstLetter = mot[0];
  const reste = mot.substr(1, mot.length);

  return firstLetter.toUpperCase() + reste.toLowerCase();
}

console.log(uppercase('il fait BEAU'));
console.log(uppercase('Il FAIT BEAu'));

function lastButOne(tab) {
  if (tab.length < 2) {
    return false;
  }
  return tab[tab.length - 2];
}

console.log(lastButOne(['Banane', 'Orange', 'Pomme', 'Mangue']));
console.log(lastButOne(['Un']));

function square(tab) {
  const newTab = [];
  tab.forEach((e) => {
    newTab.push(e * e);
  });
  return newTab;
}

console.log(square([1, 2, 3, 4]));

function gt10(tab) {
  const newTab = [];
  tab.forEach((e) => {
    if (e > 10) {
      newTab.push(e);
    }
  });
  return newTab;
}

console.log(gt10([1, 27, 3, 42, 2]));

function sum(tab) {
  let res = 0;
  tab.forEach((e) => {
    res += e;
  });
  return res;
}

console.log(sum([1, 2, 3]));

function squareMap(tab) {
  return tab.map((x) => x * x);
}

console.log(squareMap([1, 2, 3, 4]));

function gt10filter(tab) {
  return tab.filter((mot) => mot > 10);
}

console.log(gt10filter([1, 27, 3, 42, 2]));

function sumReduce(tab) {
  return tab.reduce((augment, valeur) => augment + valeur, 0);
}

console.log(sumReduce([1, 2, 3]));

const data1 = [
  { name: 'bob', isTeacher: false },
  { name: 'nico', isTeacher: true },
  { name: 'pedro', isTeacher: true },
];

function isTeacherInData(data) {
  return (data.filter((person) => person.isTeacher)).length !== 0;
}

console.log(isTeacherInData(data1));

const data2 = [13, 22, 31, 11, 37];

function isSup10(data) {
  return (data.filter((n) => n > 10)).length === data.length;
}

console.log(isSup10(data2));

function findNumberSup30(data) {
  return (data.find((n) => n > 30));
}

console.log(findNumberSup30(data2));

const pdg1 = [
  { name: 'Mark' },
  { name: 'Bernard' },
  { name: 'Indra' },
];

const salaire1 = [544000, 341000, 377000];

function together(pdg, salaire) {
  const result = pdg.map((pdgObj, index) => ({
    ...pdgObj,
    salaire: salaire[index],
  }));

  return result;
}

console.log(together(pdg1, salaire1));

const listeInviteConf1 = ['anthony', 'pedro'];
const listeInviteConf2 = ['pedro', 'nico', 'vincent'];

function listeDesInvitesUniquementAUneConf(tab1, tab2) {
  const filter1 = tab1.filter((invite) => !tab2.includes(invite));
  const filter2 = tab2.filter((invite) => !tab1.includes(invite));
  return filter1.concat(filter2);
}

console.log(listeDesInvitesUniquementAUneConf(listeInviteConf1, listeInviteConf2));

function listeDeTousLesInvites(tab1, tab2) {
  const res = tab1.filter((invite) => !tab2.includes(invite));
  return res.concat(tab2);
}

console.log(listeDeTousLesInvites(listeInviteConf1, listeInviteConf2));

function listeDesInvitesParticpantAux2Conf(tab1, tab2) {
  return tab1.filter((invite) => tab2.includes(invite));
}

console.log(listeDesInvitesParticpantAux2Conf(listeInviteConf1, listeInviteConf2));

// utilisation d’expression régulière (objet RegExp)
const codePostal = /^\d{5}$/;

console.log(codePostal.test('438274')); // -> false

const codePostal2 = /^(0[1-9]|[1-8][0-9]|9[0-5])\d{3}$/;

console.log(codePostal2.test('438274')); // -> false
console.log(codePostal2.test('89340')); // -> true
console.log(codePostal2.test('00020')); // -> true
console.log(codePostal2.test('89a40')); // -> false
console.log(codePostal2.test('96324')); // -> false

const numTel = /^0[1-7]([\s.-]?\d{2}){4}$/;

console.log(numTel.test('0642354784'));
console.log(numTel.test('0642-35.47 84'));
console.log(numTel.test('0642-354784'));
console.log(numTel.test('064 2354784'));

function miroir(tab) {
  const inverse = tab.slice().reverse();
  return JSON.stringify(tab) === JSON.stringify(inverse);
}

console.log('\nFonctions :');
console.log(miroir([1, 2, 1, 3])); // false
console.log(miroir([1, 2, 1])); // true
console.log(miroir([1, 2, 2, 1])); // true

function afficheRec(tab) {
  return [...tab.flat(Infinity)].join(' ');
}

console.log(afficheRec([1, 2, [3, 4, [5, 6, 7], 8], 9]));

function majuscules(str) {
  const split = str.split(' ');
  const res = split.map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1));
  return res.join(' ');
}

console.log(majuscules('oui je suis'));

function alpha(str) {
  return str.split('').sort().join('');
}

console.log(alpha('ahdqdfssodifj'));

function anagramme(str1, str2) {
  return alpha(str1) === alpha(str2);
}

console.log(anagramme('chien', 'niche')); // true
console.log(anagramme('chien', 'maison')); // false

function isEmail(email) {
  const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/;
  return pattern.test(email);
}

console.log(isEmail('adelap01@univ-lr.fr'));

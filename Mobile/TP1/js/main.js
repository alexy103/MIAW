// Récupérer les éléments du formulaire
var formulaire = document.getElementById('saisie');
var dateDebutInput = document.getElementById('sdate');
var dateCibleInput = document.getElementById('edate');
var boutonCalcul = document.getElementById('b_calcul');
var resultat = document.getElementById('result-value');

// Ajouter un écouteur d'événements sur le bouton de calcul
boutonCalcul.addEventListener('click', function () {
    // Récupérer les valeurs des champs de date
    var dateDebut = new Date(dateDebutInput.value);
    var dateCible = new Date(dateCibleInput.value);

    // Calculer la différence en millisecondes
    var differenceEnMillisecondes = dateCible - dateDebut;

    // Convertir la différence en jours
    var differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);

    // Afficher le résultat
    resultat.textContent = differenceEnJours.toFixed(0) + ' jours';
});

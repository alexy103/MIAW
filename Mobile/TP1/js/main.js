// Récupérer les éléments du formulaire
var formulaire = document.getElementById("saisie");
var dateDebutInput = document.getElementById("sdate");
var dateCibleInput = document.getElementById("edate");
var boutonCalcul = document.getElementById("b_calcul");
var resultat = document.getElementById("result-value");

// Ajouter un écouteur d'événements sur le bouton de calcul
boutonCalcul.addEventListener("click", function () {
  // Récupérer les valeurs des champs de date
  var dateDebut = new Date(dateDebutInput.value);
  var dateCible = new Date(dateCibleInput.value);

  // Calculer la différence en millisecondes
  var differenceEnMillisecondes = dateCible - dateDebut;

  // Convertir la différence en jours
  var differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);

  // Afficher le résultat
  resultat.textContent = differenceEnJours.toFixed(0) + " jours";
});

const dbName = "myDB";
const dbVersion = 1;
const dbPromise = indexedDB.open(dbName, dbVersion);
dbPromise.onupgradeneeded = function (event) {
  var db = event.target.result;
  var store = db.createObjectStore("events", { keyPath: "id" });
  store.createIndex("senderName", "senderName", { unique: false });
  store.createIndex("eventDate", "eventDate", { unique: false });
};
function addRecordToDB() {
  var date = new Date();
  var transaction = dbPromise.result.transaction("events", "readwrite");
  var store = transaction.objectStore("events");
  // Creation d’un enregistrement
  var record = {
    id: date.toISOString(), // ID unique (chaine de caractère) représentant date
    senderName: "DELAPORTE", // A remplacer par votre nom
    eventDate: document.getElementById("edate").value, // XXXX étant l’id du deuxieme selecteur de date
  };
  var request = store.add(record); // Ajout de l’enregistrement
  request.onsuccess = function () {
    getRecordFromDB(record);
    console.log("Record added to IndexedDB");
  };
  request.onerror = function () {
    console.error("Error adding record to IndexedDB:", error);
  };
}

function getRecordFromDB(record) {
  var transaction = dbPromise.result.transaction("events", "readwrite");
  var store = transaction.objectStore("events");
  var readRequest = store.get(record.id); // lecture de l’enregistrement, en fournissant l’id
  readRequest.onsuccess = function () {
    var readRecord = readRequest.result;
    fetch("https://bbessere.lpmiaw.univ-lr.fr/TPBase/getdata.php", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(record),
    })
      .then(function (res) {
        console.log("OK sending data", res);
      })
      .catch(function (err) {
        console.log("Error while sending data", err);
      });
  };
}

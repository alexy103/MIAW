import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Modal, Button } from "@mui/material"; // si vous souhaitez utiliser ces composants
import SwipeableViews from "react-swipeable-views";

import Page1 from "./page1";
import Page2 from "./page2";

const App = () => {
  // state indiquant que la modale doit être affichée
  // il faudra mette true en condition initiale quand le code pour la modale aura été ajouté
  const [modale, setModale] = useState(true);

  // gestion des swipeable views, idem Travaux Pratiques
  const [index, setIndex] = useState(0);

  const [prefixes6, setPrefixes6] = useState([]);
  const [prefixes7, setPrefixes7] = useState([]);
  const [prefixesX, setPrefixesX] = useState([]);

  const handleChange = (event, value) => {
    setIndex(value);
    console.log("Click Tab to page : " + value);
  };

  const handleChangeIndex = (index) => {
    setIndex(index);
    console.log("Swipe to page: " + index);
  };

  const handleClose = (value) => {
    setModale(false);
    getContacts();
  };

  function getPrefixes(liste) {
    liste.forEach((numero) => {
      let prefixe = numero.slice(-10, -8);
      if (prefixe.includes("6")) {
        prefixes6.push(prefixe);
      } else if (prefixe.includes("7")) {
        prefixes7.push(prefixe);
      } else {
        prefixesX.push(prefixe);
      }
    });
    console.log("Prefixes 6 : " + prefixes6);
    console.log("Prefixes 7 : " + prefixes7);
    console.log("Autres Prefixes : " + prefixesX);
  }

  // fonction a appeler losqu'on ferme la boite modale (clic sur le bouton)
  const getContacts = async () => {
    const supported = "contacts" in navigator; // on verifie si le contact picker est dispo dans le navigateur
    if (supported === false) {
      // la liste des numéro de telephone est simulé
      console.log("mode simulé");
      // alert("simulation de la selection des contacts");
      let liste = new Array(
        "0648992305",
        "0798653202",
        "0789562566",
        "+33 689785210",
        "0033 712452535",
        "0485963269"
      );

      // ajouter eventuellement ici votre fonction ou votre code pour determiner et compter les prefixes
      getPrefixes(liste);

      // ajouter le code pour fermeture de la boite modale
    } else {
      // ce code sera invoquée sur le smartphone, accés reel au contact picker (edge, chrome et safari)
      try {
        // affiche le contact picker, ne recupère que les num. de tel. Selection multiple
        const contacts = await navigator.contacts.select(["tel"], {
          multiple: true,
        });
        // de la liste des contacts, on extrait les numéros de téléphone
        let liste = new Array();
        contacts.forEach((contact) => {
          liste.push(String(contact.tel));
        });
        // on est ici dans le même cas que pour la simulation (numéros dans l'objet liste, de type Array)
        // ajouter (eventuellement ici) votre fonction ou votre code pour determiner et compter les prefixes
        getPrefixes(liste);

        // ajouter le code pour femeture de la boite modale
      } catch (ex) {
        // Gestion eventuelle des erreurs
      }
    }
  };

  // partie affichage du composant
  return (
    <div>
      {/* ajouter ici la boite modale */}
      <Modal open={modale}>
        <button onClick={() => handleClose()}>Fermer</button>
      </Modal>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        className="App"
      >
        <Tabs
          value={index}
          fullWidth
          centered
          onChange={handleChange}
          style={styles.tabs}
        >
          <Tab label="Bar Chart Display" style={styles.tab} />
          <Tab label="Pie Chart Display" style={styles.tab} />
        </Tabs>
        <SwipeableViews
          index={index}
          onChangeIndex={handleChangeIndex}
          enableMouseEvents
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <Page1
              prefixes6={prefixes6}
              prefixes7={prefixes7}
              prefixesX={prefixesX}
            />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <Page2 />
          </div>
        </SwipeableViews>
      </div>
    </div>
  );
};

const styles = {
  tabs: {
    background: "#fff",
  },
  tab: {
    fontSize: "30px",
  },
  slide: {
    padding: 15,
    minHeight: 50,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#555555",
  },
  slide2: {
    backgroundColor: "#A5A5A5",
  },
};

export default App;

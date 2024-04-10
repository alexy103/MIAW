import React, { useState, useRef, useEffect }  from "react";
import { Box } from "@mui/system";

// ceci sera la page avec un affichage de type "camenbert"

const Page2 = (props) => {

  console.log("Chargement du la page 2 (affichage Pie Chart)");	  

  let content;

  // modifier le test qui indique que des données valides sont reçues
  if (false) {
    content = <p>Mettre ici votre tracé graphique (camenbert)</p>;
  }
  else {
    content = <p>Pas de données,donc pas d'affichage</p>;
  }

  return  <div>
      <h1>Affichage sous forme de camembert</h1>
      {content}
    </div>
}

export default Page2;
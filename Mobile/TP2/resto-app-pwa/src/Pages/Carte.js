import React, { useEffect, useState } from "react";
import styles from "./styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Carte = function Carte(props) {

  const [plat, setPlat] = useState('');

  useEffect(() => {
    console.log('ok')
    fetch("https://bbessere.lpmiaw.univ-lr.fr/resto.php?getsuggestion=true")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setPlat(data);
      })
      .catch((error) => console.error("Erreur lors de la requête :", error));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>La Carte</h1>
      <p>
        Avec des éléments de type "Accordéon (Material UI)". A améliorer (style)
      </p>
      <p>ou des éléments de type "react-collapsible"</p>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h2>Pizza</h2>
        </AccordionSummary>
        <AccordionDetails>
          <table
            data-role="table"
            id="antinea-table-pizza"
            data-mode="reflow"
            className="ui-responsive"
          >
            <thead>
              <tr>
                <th data-priority="1">Nom</th>
                <th data-priority="2"></th>
                <th data-priority="3">Recette</th>
                <th data-priority="4">Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Marina</th>
                <td>
                  <img alt="Marina" src="./images/pizza1.jpg" width="100" />
                </td>
                <td>tomate, ail, origan, huile d'olive</td>
                <td>9&nbsp;&euro;</td>
              </tr>
              <tr>
                <th>Reine</th>
                <td>
                  <img alt="Reine" src="./images/reine.jpg" width="100" />
                </td>
                <td>tomate, mozzarella, jambon, champignon</td>
                <td>10&nbsp;&euro;</td>
              </tr>
              <tr>
                <th>Végétarienne</th>
                <td>
                  <img alt="Veget" src="./images/veget.jpg" width="100" />
                </td>
                <td>tomate, artichauts, brocolis</td>
                <td>10&nbsp;&euro;</td>
              </tr>
            </tbody>
          </table>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h2>Pâtes</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Vous pouvez inventer du contenu pour mettre ici, mais ce n'est pas
            nécessaire
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h2>Desserts</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Vous pouvez inventer du contenu pour mettre ici, mais ce n'est pas
            nécessaire
          </p>
        </AccordionDetails>
      </Accordion>

      <br />
      <br />

      <Accordion>
        <AccordionDetails>
          <p>Suggestion du chef : {plat}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Carte;

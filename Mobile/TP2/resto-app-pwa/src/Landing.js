import React from "react";
import AntineaPages from "./App";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAntineaPages: false,
      showRepublicPages: false,
      showVespucciPages: false,
      antineaRating: null,
    };
  }

  componentDidMount() {
    // Effectuer la requête au chargement de la page
    fetch("https://bbessere.lpmiaw.univ-lr.fr/resto.php?getrating=true")
      .then((response) => response.json())
      .then((data) => {
        // Mettre à jour l'état avec le rating de Antinea
        console.log(data);
        this.setState({ antineaRating: data.rating });
      })
      .catch((error) => console.error("Erreur lors de la requête :", error));
  }

  handleButtonClick = () => {
    this.setState({ showAntineaPages: true });
  };

  render() {
    const {
      showAntineaPages,
      showRepublicPages,
      showVespucciPages,
      antineaRating,
    } = this.state;

    if (showAntineaPages) {
      // Si showAntineaPages est vrai, affiche seulement AntineaPages
      return <AntineaPages />;
    }

    return (
      <div>
        <h1>Liste des restaurants de La Rochelle</h1>
        <p>Sélectionner un restaurant dans la liste :</p>
        <div
          style={{
            display: "flex",
            width: "100vw",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img src="./images/antinea/img1.jpg" alt="" width="200" />
          <h2>Antinéa</h2>
          {/* Afficher le nombre d'étoiles pour Antinea */}
          {antineaRating !== null && (
            <div>
              {Array.from({ length: antineaRating * 2 }, (_, index) => (
                <span key={index}>&#9733;</span> // Utilise le caractère d'étoile
              ))}
            </div>
          )}
          {!showAntineaPages ? (
            <button onClick={this.handleButtonClick}>&gt;</button>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            width: "100vw",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img src="./images/republique1.jpg" alt="" width="200" />
          <h2>République</h2>
          {!showRepublicPages ? <button>&gt;</button> : ""}
        </div>

        <div
          style={{
            display: "flex",
            width: "100vw",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img src="./images/vespucci.jpg" alt="" width="200" />
          <h2>Vespucci</h2>
          {!showVespucciPages ? <button>&gt;</button> : ""}
        </div>
      </div>
    );
  }
}

export default Landing;

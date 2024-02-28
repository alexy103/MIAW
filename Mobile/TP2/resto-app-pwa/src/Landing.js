import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
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
        this.setState({ antineaRating: data });
      })
      .catch((error) => console.error("Erreur lors de la requête :", error));
  }

  handleButtonClick = () => {
    this.setState({ showAntineaPages: true });
  };

  renderStarIcon = (index, antineaRating) => {
    const isHalfStar = index + 0.5 === antineaRating;
    const isFullStar = index + 1 <= antineaRating;

    if (isFullStar) {
      return (
        <StarIcon
          key={index}
          size={24}
          style={{ color: "gold", cursor: "pointer" }}
        />
      );
    } else if (isHalfStar) {
      return (
        <StarHalfIcon
          key={index}
          size={24}
          style={{ color: "gold", cursor: "pointer" }}
        />
      );
    } else {
      return (
        <StarIcon key={index} size={24} style={{ color: "transparent" }} />
      );
    }
  };  

  render() {
    const {
      showAntineaPages,
      showRepublicPages,
      showVespucciPages,
      antineaRating,
    } = this.state;

    if (showAntineaPages) {
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
          {/* Afficher le nombre d'étoiles pour Antinea avec StarIcon */}
          {antineaRating !== null && (
            <div>
              {[...Array(5)].map((_, index) =>
                this.renderStarIcon(index, antineaRating)
              )}
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
          <div>
            {[...Array(5)].map((_, index) => this.renderStarIcon(index, 2.5))}
          </div>
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
          <div>
            {[...Array(5)].map((_, index) => this.renderStarIcon(index, 5))}
          </div>
          {!showVespucciPages ? <button>&gt;</button> : ""}
        </div>
      </div>
    );
  }
}

export default Landing;

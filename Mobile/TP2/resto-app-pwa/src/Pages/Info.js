import React, { useState } from "react";
import styles from "./styles";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Button from "@mui/material/Button";

const Contact = function Contact(props) {
  console.log("Chargement du composant Contact");

  // État pour stocker la note
  const [rating, setRating] = useState(0);

  // Fonction pour gérer le clic sur une étoile
  const handleStarClick = (selectedRating) => {
    // Si la même étoile est cliquée deux fois, ajuste la note à demi
    const newRating = selectedRating === rating ? rating - 0.5 : selectedRating;

    setRating(newRating);
  };

  // Fonction pour afficher une étoile complète, demi-étoile ou étoile vide
  const renderStar = (star) => {
    if (star <= rating) {
      return (
        <StarIcon
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ color: "gold", cursor: "pointer", fontSize: "50px" }}
        />
      );
    } else if (star - 0.5 === rating) {
      return (
        <StarHalfIcon
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ color: "gold", cursor: "pointer", fontSize: "50px" }}
        />
      );
    } else {
      return (
        <StarIcon
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ color: "gray", cursor: "pointer", fontSize: "50px" }}
        />
      );
    }
  };

  // Fonction pour gérer la soumission de la note
  const handleSubmit = () => {
    // Afficher une alerte de confirmation avant d'envoyer la note
    const confirmation = window.confirm(
      `Voulez-vous envoyer la note de ${rating.toFixed(1)} étoiles ?`
    );

    if (confirmation) {
      // Envoyer la note (vous pouvez ajouter votre logique d'envoi ici)
      alert(`Note de ${rating.toFixed(1)} étoiles envoyée avec succès !`);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Le restaurant Antinea</h1>
      <p>Ici info de contact et Geolocalisation + saisie de l'avis</p>
      <p>
        Type de restauration : Brasserie, pizzeria
        <br />
        Accessible aux personnes à mobilité réduite
        <br />
        WIFI disponible
        <br />
        Modes de payement : CB, Izly
      </p>
      <h2>Horaires</h2>
      <p>11h30-13h45</p>
      <h2>Acces</h2>
      <p>
        15 rue Vaux de Foletier 17000 LA ROCHELLE
        <br />
        Téléphone : 05.46.44.18.57
      </p>

      {/* Affichage des étoiles en fonction de la valeur du curseur */}
      <div>{[1, 2, 3, 4, 5].map((star) => renderStar(star))}</div>

      {/* Bouton de soumission avec gestion de la confirmation */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>

      <p>Note : {rating.toFixed(1)} / 5</p>
    </div>
  );
};

export default Contact;

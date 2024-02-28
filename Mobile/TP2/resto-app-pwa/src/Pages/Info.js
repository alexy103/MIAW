import React, { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Button from "@mui/material/Button";

const Contact = function Contact(props) {
  console.log("Chargement du composant Contact");

  // État pour stocker la note
  const [rating, setRating] = useState(0);

  // États pour stocker la latitude et la longitude
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [dist, setDist] = useState(null);

  // Fonction pour gérer le clic sur une étoile
  const handleStarClick = (selectedRating) => {
    // Si la même étoile est cliquée deux fois, ajuste la note à demi
    const newRating = selectedRating === rating ? rating - 0.5 : selectedRating;
    setRating(newRating);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    setLat(crd.latitude);
    setLon(crd.longitude);
    setDist(getDistanceFromLatLonInKm(lat, lon, 46.1418341, -1.1518132));

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  // Fonction pour obtenir la géolocalisation
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  // Utilisation de useEffect pour obtenir la géolocalisation une seule fois après le rendu initial
  useEffect(() => {
    getLocation();
    console.log(lat, lon);
  }, [lat, lon]); // Le tableau vide [] signifie que cette effect ne dépend d'aucune dépendance et sera exécutée une seule fois après le montage du composant

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Rayon du globe terrestre en  km
    var dLat = deg2rad(lat2 - lat1); // deg2rad ci-dessous
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance en km
    return d;
  }

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
    <div>
      <h1>Le restaurant Antinea</h1>
      <p>Latitude : {lat}</p>
      <p>Longitude : {lon}</p>
      <p>Distance : {dist}km</p>

      <p>
        Type de restauration : Brasserie, pizzeria
        <br />
        Accessible aux personnes à mobilité réduite
        <br />
        WIFI disponible
        <br />
        Modes de paiement : CB, Izly
      </p>
      <h2>Horaires</h2>
      <p>11h30-13h45</p>
      <h2>Accès</h2>
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

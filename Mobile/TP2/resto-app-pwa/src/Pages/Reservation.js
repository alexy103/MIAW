import React, { useState } from "react";
import styles from "./styles";

const Reservation = function Reservation(props) {
  console.log("Chargement du composant Reservation");

  // États pour stocker les valeurs des champs
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [nombrePersonnes, setNombrePersonnes] = useState(2);

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmation = window.confirm(
      `Voulez-vous réserver pour ${nombrePersonnes} personnes ?`
    );

    if (confirmation) {
      // Envoyer la réservation (vous pouvez ajouter votre logique d'envoi ici)
      alert(`Réservation pour ${nombrePersonnes} personnes confirmée !`);
    }
  };

  // Fonction pour mettre à jour le nombre de personnes
  const handleNombrePersonnesChange = (newNombrePersonnes) => {
    setNombrePersonnes(newNombrePersonnes);
  };

  return (
    <div style={{ ...styles.container, textAlign: "center" }}>
      <h1 style={styles.title}>Reservation</h1>
      <form onSubmit={handleSubmit} style={{ width: "80%", margin: "auto" }}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Heure:
          <input
            type="time"
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Nombre de personnes:
          <div>
            {["1 / 2", "2 / 3", "4 / 5", "6 / 7", "7 / 8"].map((number) => (
              <button
                key={number}
                type="button"
                onClick={() => handleNombrePersonnesChange(number)}
                style={{
                  margin: "5px",
                  padding: "8px",
                  background: number === nombrePersonnes ? "#007bff" : "#ccc",
                  color: "#fff",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                {number}
              </button>
            ))}
          </div>
        </label>
        <p>
          Pour réserver une plus grande table, veuillez nous contacter par
          téléphone.
        </p>
        <br />
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default Reservation;

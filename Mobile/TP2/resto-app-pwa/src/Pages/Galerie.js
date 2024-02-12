import React, { useState } from "react";
import styles from "./styles";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Galerie = function Galerie(props) {
  console.log("Chargement du composant Galerie");

  const images = [
    "images/antinea/img1.jpg",
    "images/antinea/img2.jpg",
    "images/antinea/img3.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Galerie</h1>
      <div style={styles.carouselContainer}>
        <button onClick={handlePrev} style={styles.carouselButton}>
          <ArrowLeftIcon />
        </button>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={styles.carouselImage}
        />
        <button onClick={handleNext} style={styles.carouselButton}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Galerie;

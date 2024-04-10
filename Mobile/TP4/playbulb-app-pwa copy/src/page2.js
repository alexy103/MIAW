/* global LinearAccelerationSensor */

import React, { useState, useEffect } from "react";

const Page2 = ({ device, index }) => {
  const [sensorActive, setSensorActive] = useState(false);
  const [detectedColor, setDetectedColor] = useState(null);

  // valeur aléatoire entière comprise entre 0 et max (exclu)
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  // Generate and return a random highly saturated color in HTML format
  const getRandomSaturatedColorRGB = () => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    };

    let r = getRandomInt(256);
    let g = getRandomInt(256);
    let b = getRandomInt(256);

    // Assurez-vous que l'une des valeurs est à 255 et une autre à 0 pour la saturation
    const maxIndex = [r, g, b].indexOf(Math.max(r, g, b));
    const minIndex = [r, g, b].indexOf(Math.min(r, g, b));

    [r, g, b] = [r, g, b].map((value, index) =>
      index === maxIndex ? 255 : index === minIndex ? 0 : value
    );

    return { r, g, b };
  };

  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  function hexToRgb(hex) {
    var r = 0,
      g = 0,
      b = 0;
    // enlever le # au début si présent
    if (hex.charAt(0) == "#") {
      hex = hex.substr(1);
    }
    // convertir le hex en RGB
    if (hex.length == 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length == 6) {
      r = parseInt(hex.substr(0, 2), 16);
      g = parseInt(hex.substr(2, 2), 16);
      b = parseInt(hex.substr(4, 2), 16);
    }
    return { r, g, b };
  }

  // Envoie la couleur à l'ampoule
  const sendData = ({ r, g, b }) => {
    console.log("Envoi de la couleur RGB :", r, g, b);

    let colorData = new Uint8Array([0, r, g, b]);
    if (device && device.gatt.connected) {
      device.gatt
        .getPrimaryService(0xff02) // Remplacez par l'UUID de votre service
        .then((service) => service.getCharacteristic(0xfffc)) // Remplacez par l'UUID de votre caractéristique
        .then((characteristic) => characteristic.writeValue(colorData))
        .catch((err) => console.error("Erreur d'envoi de couleur:", err));
    } else {
      console.error("Device not connected or undefined");
    }
  };

  // Gère la détection de mouvement
  const handleMotion = (x, y, z) => {
    const shakeThreshold = 25; // Ajustez cette valeur selon les besoins
    const acceleration = Math.sqrt(x * x + y * y + z * z);
    if (acceleration > shakeThreshold) {
      console.log("Shake detected");
      navigator.vibrate(200); // Feedback haptique

      // Génère une couleur aléatoire saturée en RGB
      const { r, g, b } = getRandomSaturatedColorRGB();
      // Met à jour l'état de la couleur détectée pour le feedback visuel
      setDetectedColor(rgbToHex(r, g, b));
      // Envoie la couleur générée à l'ampoule
      sendData({ r, g, b }, device);
    }
  };

  // Configure l'écouteur de mouvements
  useEffect(() => {
    let sensor;
    console.log("Sensor index:", index);
    if ("LinearAccelerationSensor" in window) {
      try {
        sensor = new LinearAccelerationSensor({ frequency: 60 });
        sensor.addEventListener("reading", () =>
          handleMotion(sensor.x, sensor.y, sensor.z)
        );
        sensor.start();
        setSensorActive(true);
        console.log("Sensor started");
      } catch (error) {
        console.error("Sensor not supported", error);
      }
    }

    return () => {
      if (sensor) sensor.stop();
      setSensorActive(false);
      console.log("Sensor stopped");
    };
  }, [index]);

  console.log(index);

  return (
    <div style={{ backgroundColor: detectedColor, ...styles.page }}>
      <p>{sensorActive ? "Secouer" : "Cela ne marche pas sur ton téléphone"}</p>
    </div>
  );
};

const styles = {
  page: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
};

export default Page2;

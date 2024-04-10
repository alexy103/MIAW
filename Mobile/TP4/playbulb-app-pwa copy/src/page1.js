import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import styles from "./styles";

const Page1 = ({ device, onSelect }) => {
  console.log("Chargement du la page 1");

  const [bleAvailable, setBleAvailable] = useState(false);

  const [selectedColor, setSelectedColor] = useState("#ff0000"); // Couleur par défaut (rouge)

  const handleColorChange = (color) => {
    console.log(color.hex);
    setSelectedColor(color.hex);
  };

  useEffect(() => {
    navigator.bluetooth
      ?.getAvailability()
      .then((isAvailable) => setBleAvailable(isAvailable));
  }, []);

  const requestDevice = () => {
    navigator.bluetooth
      .requestDevice({
        filters: [{ name: "PLAYBULB CANDLE" }, { services: [0xff02] }],
      })
      .then(onSelect)
      .catch((err) => console.error(err));
  };

  const getService = () => {
    device.gatt.connect();
  };

  const sendData = (color) => {
    device.gatt
      .getPrimaryService(0xff02)
      .then((service) => service.getCharacteristic(0xfffc))
      .then((characteristic) => characteristic.writeValue(color));
  };

  const handleColorButtonClick = () => {
    let colorData = new Uint8Array(4);
    colorData[0] = 0; // always 0
    colorData[1] = parseInt(selectedColor.slice(1, 3), 16); // red
    colorData[2] = parseInt(selectedColor.slice(3, 5), 16); // green
    colorData[3] = parseInt(selectedColor.slice(5, 7), 16); // blue
    sendData(colorData);
  };

  const sendRed = () => {
    let colorData = new Uint8Array(4);
    colorData[0] = 0; // always 0
    colorData[1] = 255; // red
    colorData[2] = 0; // green
    colorData[3] = 0; // blue
    sendData(colorData);
  };

  const sendBlue = () => {
    let colorData = new Uint8Array([0x00, 0x00, 0x00, 0xff]);
    sendData(colorData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Test envoi commande couleur</h1>
      <div>
        Connexion (pas de test si le service est supporté) :
        <button onClick={getService}>Connexion</button>
      </div>      
      <div>
        Si connecté envoi de la couleur ROUGE :
        <button id="red" onClick={sendRed}>
          Red
        </button>
      </div>
      <div>
        Si connecté envoi de la couleur BLEU :
        <button id="blue" onClick={sendBlue}>
          Blue
        </button>
      </div>
      <h1 style={styles.title}>Sélection de couleur</h1>
      <div>
        Choisissez une couleur :
        <SketchPicker color={selectedColor} onChange={handleColorChange} />
      </div>
      <div>
        <button onClick={handleColorButtonClick}>Changer la couleur</button>
      </div>
    </div>
  );
};

export default Page1;

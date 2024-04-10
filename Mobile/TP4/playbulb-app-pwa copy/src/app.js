import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";

import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";

const PlaybulbDecouverte = () => {
  const [NotConnected, setNotConnected] = useState(true);

  // un moyen pour mémoriser le device choisi et le propager sur plusieurs pages (par les props)
  const [BTdevice, setBTDevice] = useState(null);

  // Fonction d'action qui sera appelée par un enfant
  const selectDevice = (device) => {
    console.log("connected to :");
    console.log(device);
    setBTDevice(device); // memorisation de l'équipement BT selectionné qui sera passé via les props aux pages
    console.log(device);
    device.gatt.connect();
  };

  // gestion des swipeable views
  const [index, setIndex] = useState(0);

  const handleChange = (event, value) => {
    setIndex(value);
    console.log("Click Tab to page : " + value);
  };

  const handleChangeIndex = (index) => {
    setIndex(index);
    console.log("Swipe to page: " + index);
  };

  const handleSelect = () => {
    // pour l'instant, sert uniquement à faire disparaire la fenetre popup
    navigator.bluetooth
      .requestDevice({
        filters: [{ name: "PLAYBULB CANDLE" }, { services: [0xff02] }],
      })
      .then(selectDevice)
      .catch((err) => console.error(err));
    setNotConnected(!NotConnected);
  };

  const disconnect = () => {
    BTdevice.gatt.disconnect();
    setNotConnected(!NotConnected);
  };

  return (
    <div>
      <Tabs
        value={index}
        fullWidth
        centered
        onChange={handleChange}
        style={styles.tabs}
      >
        <Tab label="Sélection" />
        <Tab label="Aléatoire" />
        <Tab label="Photo" />
        <Tab label="Utilisateur" />
        <div style={styles.alexy}>Alexy DELAPORTE</div>
        <button onClick={disconnect}>Déconnexion</button>
      </Tabs>
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <Page1
            // Passage de l'état de la connexion bluetooth par les props
            device={BTdevice}
            onSelect={selectDevice}
          />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          <Page2 device={BTdevice} index={index} />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          <Page3 device={BTdevice} />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide4)}>
          <Page4 device={BTdevice} />
        </div>
      </SwipeableViews>

      {NotConnected && (
        <div style={styles.popupoverlay}>
          <div style={styles.popup}>
            <h2>No device selected....</h2>
            <button onClick={handleSelect}>Select</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  popupoverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)" /* Semi-transparent background */,
    align: "center",
  },

  popup: {
    background: "#fff",
    padding: 20,
    position: "relative",
    width: "100vw",
  },
  tabs: {
    background: "#fff",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#4c4580",
  },
  slide2: {
    backgroundColor: "#806945",
  },
  slide3: {
    backgroundColor: "#5c8045",
  },
  slide4: {
    backgroundColor: "rgb(92 125 139)",
  },
  alexy: {
    position: "absolute",
    right: "0",
  },
};
export default PlaybulbDecouverte;

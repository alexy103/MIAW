import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


import Info from "./Pages/Info";
import Carte from "./Pages/Carte";
import Galerie from "./Pages/Galerie";
import Reservation from "./Pages/Reservation";

import React from "react";
import SwipeableViews from "react-swipeable-views";
import InfoIcon from "@mui/icons-material/Info";
import Landing from "./Landing";

const styles = {
  tabs: {
    background: "#fff",
    minHeight: '10vh',
  },
  home: {
    position: 'absolute',
    top: '0',
    left: "2vw",
    zIndex: '3',
  },
  slide: {
    minHeight: '90vh',
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#9A1B22",
  },
  slide2: {
    backgroundColor: "#9A1B22",
  },
  slide3: {
    backgroundColor: "#9A1B22",
  },
  slide4: {
    backgroundColor: "#9A1B22",
  },
};

class AntineaPages extends React.Component {
  state = {
    index: 0,
    showHome: false, // Ajoutez un état pour indiquer si la page d'accueil doit être affichée
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
      showHome: false, // Réinitialiser l'état pour ne pas afficher la page d'accueil
    });
    console.log("Clic Tab to page : " + value);
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
      showHome: false, // Réinitialiser l'état pour ne pas afficher la page d'accueil
    });
    console.log("Swipe to page: " + index);
  };

  handleHome = () => {
    console.log('home');
    this.setState({
      showHome: true, // Mettez à jour l'état pour indiquer que la page d'accueil doit être affichée
    });
  };

  render() {
    const { index, showHome } = this.state;

    if (showHome) {
      return <Landing />;
    }

    return (
      <div>
        <p onClick={this.handleHome} style={styles.home}>🏠︎</p>
        <Tabs
          value={index}
          fullWidth
          centered
          onChange={this.handleChange}
          style={styles.tabs}
        >
          <Tab icon={<InfoIcon />} iconPosition="start" label="Info" />
          <Tab label="Carte" />
          <Tab label="Galerie" />
          <Tab label="Reservation" />
        </Tabs>
        <SwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
          enableMouseEvents
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <Info />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <Carte />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <Galerie />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide4)}>
            <Reservation />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default AntineaPages;

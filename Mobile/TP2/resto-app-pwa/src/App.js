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

const styles = {
  tabs: {
    background: "#fff",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
  slide4: {
    backgroundColor: "#101010",
  },
};

class AntineaPages extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
    console.log("Clic Tab to page : " + value);
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
    console.log("Swipe to page: " + index);
  };

  render() {
    const { index } = this.state;

    return (
      <div>
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

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';

const demoFancyMapStyles = require('./style.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchWithTimeOut();

    const myLatLng = { lat: 52.379189, lng: 4.898455 };
    const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    const icons = {
      weed: {
        icon: `${iconBase}parking_lot_maps.png`,
      },
      eat: {
        icon: `${iconBase}library_maps.png`,
      },
      culture: {
        icon: `${iconBase}info-i_maps.png`,
      },
    };
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 52.379189, lng: 4.898455 },
      zoom: 13,
      styles: demoFancyMapStyles,
      options: {
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        rotateControl: false,
        fullscreenControl: false,
      },
    });
    this.state.data.map((activites) => {
      const marker = new window.google.maps.Marker({
        lat: activites.LAT,
        lng: activites.LNG,
        map,
      });
    });
    const marker = new window.google.maps.Marker({
      position: myLatLng,
      map,
      title: 'Hello World!',
    });
  }

  render() {
    return (
      <div>
        <div id="map" style={{ height: '90vh', width: '100vw' }} />
        <BottomNavigation />
      </div>
    );
  }
}

export default App;

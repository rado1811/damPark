import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';

const demoFancyMapStyles = require('./style.json');

class App extends Component {
<<<<<<< Updated upstream
  // state = { 
  //   childActivites: []
  // };
=======
  constructor(props) {
    super(props);
    this.state = {
      activites: [],
      value: 'recents',
      load: false,
    }   
  };

  send=(activites)=> {
    this.setState({
      activites:activites
    })
  }
>>>>>>> Stashed changes


  componentDidMount() {
    fetch('/api/theme')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  componentDidUpdate() {
    const icons = {
      love: {
        icon: './images/smokegreen.svg',
      },
      eat: {
        icon: '',
      },
      culture: {
        icon: '',
      },
    };
    const map = new window.google.maps.Map(document.getElementById('map'), {

      center: { lat: 52.37186039999999, lng: 4.895860999999968 },
      zoom: 14,
      styles: demoFancyMapStyles,
      options: {
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        rotateControl: false,
        fullscreenControl: false,
        minZoom: 11,
        maxZoom: 18 ,
      },
    });
    this.state.data.forEach((activites) => {
      const markers = activites;

      const marker = new window.google.maps.Marker({
        position: { lat: activites.LAT, lng: activites.LNG },
        icon: {
          url: './images/smokebullle.png',
          // This marker is 20 pixels wide by 32 pixels high.
          scaledSize: new window.google.maps.Size(80, 80),
          
        },
        map,
      });
    });
    // const marker = new window.google.maps.Marker({
    //   position: this.state.myLatLng,
    //   map,
    //   title: 'Hello World!',
    // });
  }

  render() {
    return (
      <div>
        <marker />
>
        <div id="map" style={{ height: '90vh', width: '100vw' }} />
        <BottomNavigation />
      </div>
    );
  }
}

export default App;
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';



import '../../index.css';
class StyledMap extends Component {
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap',
    });
  }

  render() {
    return (
      <div id='app'>
        <div id='map' style={{ height: "80vh", width: '100vw' }} />
      </div>
    ); 
  } 
};

export default StyledMap;
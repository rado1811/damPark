import React from 'react';
import AttractionCard from '../AttractionCard';

import { compose, withProps, withStateHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import BottomNavigation from '../BottomNavigation';

const demoFancyMapStyles = require('./style.json');

const StyledMap = compose(

  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDxvyxdfpn92FdMg8gAYSUBCW0--1zHdWo&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '90vh' }} />,
    containerElement: <div style={{ height: '90vh' }} />,
    mapElement: <div style={{ height: '90vh' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <div>
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 52.379189, lng: 4.898455 }}
      defaultOptions={{
        styles: demoFancyMapStyles,
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={{ lat: 52.372, lng: 4.891 }} />
      <Marker position={{ lat: 52.372, lng: 4.891 }} options={{ icon: '../images/smokebullle.png' }} onClick={props.onToggleOpen}
>
{props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}><p><AttractionCard /></p>
      </InfoWindow>}
     </Marker>
      <Marker position={{ lat: 52.3739315, lng: 4.880875899999978 }} options={{ icon: '../images/smokebullle.png' }} />
      <Marker position={{ lat: 52.35024434191204, lng: 4.88150973951781 }} options={{ icon: '../images/smokebullle.png' }} />
    </GoogleMap>
    <BottomNavigation />
  </div>
));

export default StyledMap;

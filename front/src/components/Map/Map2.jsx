import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import BottomNavigation from '../BottomNavigation';
/*global google*/

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
  withStateHandlers(() => ({
    iconUrl: '../images/smokegreen.svg',
    icon2Url: '../images/eat.svg',
    iconSize: new google.maps.Size(80, 80)
}), {
        onMarkerClick: () => () => ({
            iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue.png",
            iconSize: new google.maps.Size(10, 10)
        })
    })
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
      <Marker position={{ lat: 52.379189, lng: 4.898455 }} icon={{ url: props.icon2Url, scaledSize: props.iconSize }} onClick={props.onToggleOpen} >
        {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}><p>Yo</p>
      </InfoWindow>}
     </Marker>
      <Marker position={{ lat: 52.35024434191204, lng: 4.88150973951781 }} icon={{ url: props.iconUrl, scaledSize: props.iconSize }} />
    </GoogleMap>
    <BottomNavigation />
  </div>
));

export default StyledMap;

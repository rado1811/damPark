import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import BottomNavigation from '../BottomNavigation';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;


 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.379189,
      lng: 4.898455
    },
    zoom: 13,
  };
  state= {
    childActivites: []

  }

  send=(activites)=> {
    this.setState({
      childActivites:activites
    })
  }


 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDxvyxdfpn92FdMg8gAYSUBCW0--1zHdWo'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={52.365854}
            lng={4.895340}
            text={'Amsterdam'}
          />
        </GoogleMapReact>
        <div className="towns">
            <p>{
              this.state.childActivites.map(activite => (
                <div key={activite.id} className="town">
                  <span>{activite.id}</span>
                </div>
              ))
            }
            </p>
          </div>
        <BottomNavigation send={this.send}/>

      </div>
    );
  }
}
 
export default SimpleMap;
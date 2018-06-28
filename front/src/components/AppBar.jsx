import React, { Component } from 'react';
import './AppBar.css'
import DamParklogo from '../images/DamParklogo.svg';

class AppBar extends Component {
  render() { 
    return ( 
      <img src={DamParklogo} alt="LogoDamPark" style={{marginTop:-20}}/>
     )
  }
}
 
export default AppBar;
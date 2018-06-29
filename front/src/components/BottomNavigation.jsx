import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Smoke from '../images/smoke.svg';
import Art from '../images/art.svg';
import Love from '../images/love.svg';
import Eat from '../images/eat.svg';
import entrance from '../images/buttoniconecity.svg';
import './modalGuide.css';

class LabelBottomNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activites: [],
      centerButton: entrance,
      value: 'recents',
      open: false,
      paroles: '',
    };
  }

  filterBy(opt = "") {
    fetch(`/api/theme/${opt}`)
      .then(res => res.json())
      .then(activites => this.setState({ paroles: activites[0].paroles_guide, activites : activites, centerButton: require("../images/"+ activites[0].image_guide+".svg")}));
  }
    
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { value } = this.state;
    return (
    <div>
    <Grid container>
      <BottomNavigation value={value} onChange={this.handleChange} width="100%">
        <BottomNavigationAction value="smoke" 
                                style={{padding: '1px'}} 
                                onClick={() => this.filterBy("coffee")} 
                                icon={<img src={Smoke} alt="logo_cannabis" width="60px" height="auto"/>} />
        <BottomNavigationAction value="art" 
                                style={{padding: '1px'}} 
                                onClick={() => this.filterBy("art")} 
                                icon={<img src={Art} alt="logo_art" width="50px" height="auto"/>} />
        <BottomNavigationAction value="guide" 
                                style={{marginTop:'-10%', paddingRight: '1px', paddingLeft: '1px'}}
                                onClick={this.handleOpen} 
                                icon={<img src={this.state.centerButton} alt="logo_guide" width="100px" height="auto"/>} />
        <BottomNavigationAction value="love" 
                                style={{padding: '1px'}} 
                                onClick={() => this.filterBy("love")} 
                                icon={<img src={Love} alt="logo_love"  width="60px" height="auto"/>} />
        <BottomNavigationAction value="eat" 
                                style={{padding: '1px'}} 
                                onClick={() => this.filterBy("eat")}icon={<img src={Eat} alt="logo_eat" width="60px" height="auto"/>} />
      </BottomNavigation>
    </Grid>
    <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className='ModalGuide'>
          <img src={this.state.centerButton} alt="logo_guide" width="100px" height="auto"/>
            <Typography variant="title" id="modal-title">
              Welkom!
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              {this.state.paroles}
            </Typography>
          </div>
        </Modal>
    </div>
    );
  }
}

export default LabelBottomNavigation

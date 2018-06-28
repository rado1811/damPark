import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import Smoke from '../images/smoke.svg';
import Art from '../images/art.svg';
import Love from '../images/love.svg';
import Eat from '../images/eat.svg';
import mataG from '../images/mataG.svg';
import vanGB from '../images/vanGB.svg';



const styles = {
  root: {
    width: 500,
  },
};

class LabelBottomNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activites: [],
      value: 'recents'
    };
  }

  componentDidMount() {
    this.filterBy();
  }

  filterBy(opt = "") {
    fetch(`/api/theme/${opt}`)
      .then(res => res.json())
      .then(activites => this.setState({ activites }));
  }
    
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
    <div>
    <Grid container>
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction value="smoke" 
                                style={{padding: '1px'}} 
                                onClick={() => this.filterBy("coffee")} 
                                icon={<img src={Smoke} alt="logo_cannabis" width="60px" height="auto"/>} />
        <BottomNavigationAction value="art" 
                                style={{padding: '1px'}} 
                                onClick={() => this.filterBy("art")} 
                                icon={<img src={Art} alt="logo_art" width="50px" height="auto"/>} />
        <BottomNavigationAction value="hero" 
                                style={{marginTop:'-10%', paddingRight: '1px', paddingLeft: '1px'}} 
                                onClick={this.handleOpen}
                                icon={<img src={vanGB} alt="logo_guide" width="100px" height="auto"/>} />
        <BottomNavigationAction value="love" 
                                style={{padding: '1px'}} 
                                onClick={() => this.filterBy("love")} 
                                icon={<img src={Love} alt="logo_love"  width="60px" height="auto"/>} />
        <BottomNavigationAction value="eat" 
                                style={{padding: '1px'}} 
                                onClick={() => this.filterBy("eat")}icon={<img src={Eat} alt="logo_eat" width="60px" height="auto"/>} />
      </BottomNavigation>
    </Grid>
    </div>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);
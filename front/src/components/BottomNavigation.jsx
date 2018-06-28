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

const styles = {
  root: {
    width: 500,
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
    <div>
    <Grid container xs={12}md={12}>
      <BottomNavigation style={{marginTop:'1%'}} value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction value="smoke" icon={<img src={Smoke} alt="logo_cannabis" width="50px" height="auto"/>} />
        <BottomNavigationAction value="art" icon={<img src={Art} alt="logo_art" width="50px" height="auto"/>} />
        <BottomNavigationAction value="hero" icon={<img src={mataG} alt="logo_mata" width="80px" height="auto" marginBottom="10px"/>} />
        <BottomNavigationAction value="love" icon={<img src={Love} alt="logo_love"  width="50px" height="auto"/>} />
        <BottomNavigationAction value="eat" icon={<img src={Eat} alt="logo_eat" width="50px" height="auto"/>} />
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
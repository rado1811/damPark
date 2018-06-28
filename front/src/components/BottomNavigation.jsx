import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Smoke from '../images/smoke.svg';
import Art from '../images/art.svg';
import Love from '../images/love.svg';
import Eat from '../images/eat.svg';



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
    <Grid container xs={12} s={12}>
      <BottomNavigation style={{marginTop:'1%'}} value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction value="smoke" icon={<Icon><img src={Smoke} alt="logo_canabis"/></Icon>} />
        <BottomNavigationAction value="art" icon={<Icon><img src={Art} alt="logo_art"/></Icon>} />
        <Button style={{height:100}} variant="fab" color="inherit" aria-label="add" className={classes.button}>
          <Icon><img src="https://image.flaticon.com/icons/svg/188/188987.svg" alt="AddIcon"/></Icon>
        </Button>
        <BottomNavigationAction value="love" icon={<Icon><img src={Love} alt="logo_love"/></Icon>} />
        <BottomNavigationAction value="eat" icon={<Icon><img src={Eat} alt="logo_eat"/></Icon>} />
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
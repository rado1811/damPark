import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import VanG from '../../public/images/vanG';


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
      <BottomNavigation style={{marginTop:'100%'}} value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction value="love" icon={<Icon><img src="https://image.flaticon.com/icons/svg/109/109577.svg" alt="logo_canabis"/></Icon>} />
        <BottomNavigationAction value="eat" icon={<Icon><img src="https://image.flaticon.com/icons/svg/934/934334.svg" alt="logo_canabis"/></Icon>} />
        <Button style={{height:100}} variant="fab" color="inherit" aria-label="add" className={classes.button}>
          <Icon><img src="https://image.flaticon.com/icons/svg/188/188987.svg" alt="AddIcon"/></Icon>
        </Button>
        <BottomNavigationAction value="smoke" icon={<Icon><img src="https://image.flaticon.com/icons/svg/771/771002.svg" alt="logo_canabis"/></Icon>} />
        <BottomNavigationAction value="art" icon={<Icon><img src="https://image.flaticon.com/icons/svg/15/15654.svg" alt="logo_canabis"/></Icon>} />
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
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccessOk from '../images/accessibilitTrue.png';
import AccessNotOk from '../images/accessibiliteFalse.png';

const styles = {
  root: {
    width: '250px',
    padding: 0,
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
  maxTitleCard: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    boxShadow: 'none',
    padding: 5,
  },
  titleCard: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    boxShadow: 'none',
    padding: 8,
  },
  textCard: {
    color: '#004974',
    fontSize: 15,
    fontWeight: 'bold',
    boxShadow: 'none',
    marginRight: '20',
  },
  heading: {
    border: 'solid 2px red',
  },
  firstpanel: {
    boxShadow: 'none',
  },
};

const AttractionCard = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
          <Avatar
            alt="ImageCard"
            src={props.image}
            className={classes.bigAvatar}
            label="HELLO"
          />
            <h1>{props.nom}</h1>
            <br />
            {props.descriptif}
            <br />
                Ouverture :
            {props.ouverture}
            <br />
                Fermeture :
            {props.fermeture}
            <br />
                Age minimum:
            {props.age} ans
            <br />
    </div>
  );
};

export default withStyles(styles)(AttractionCard);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import thesexpeepshow from '../images/thesexpeepshow.jpg';

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

class AttractionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ExpansionPanel className={classes.firstpanel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Avatar
              alt="ImageCard"
              src={thesexpeepshow}
              className={classes.bigAvatar}
              label="HELLO"
            />
            <Typography className={classes.titleCard}>
            Le bol de soupe géant
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.heading}>
            <Typography className={classes.textCard}>
            Piscine en forme de bol à déjeuner géant dans laquelle petits et grands peuvent se prélasser. En fonction des saisons, la piscine change de couleur : verte-salade l’été et rouge-tomate l’hiver. En plus de la couleur, cette piscine dégage un léger parfum de vacances. Maillot de bain obligatoire. <br/> <br/> 
                  Ouverture :
              <br />
                  Fermeture :
              <br />
                  Profil :
              <br />
                  Age :
              <br />
                  Accessibilité :
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(AttractionCard);

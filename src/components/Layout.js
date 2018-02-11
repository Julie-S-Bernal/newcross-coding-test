import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Dropdown from './Dropdown.js';
import Textfield from './Textfield.js';
import Picker from './Picker.js';
import Preference from './Preference.js'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          Top
        </Grid>
        <Grid item xs={6}>
        <h1>Client Summary </h1>
         <Textfield/>
        </Grid>
        <Grid item xs={6}>
        <h1>Duration of Package </h1>
          <Picker />
        </Grid>
        <Grid item xs={6}>
        <h1>Skills and Competencies Required </h1>
          <Dropdown/>
        </Grid>
        <Grid item xs={6}>
        <h1>Staff Gender Preferences </h1>
         <Preference />
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
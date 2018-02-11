import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function DatePickers(props) {
  const { classes } = props;

  return (
      <Paper>
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label=""
        type="date"
        // I need to code a reverse here because the default date will be the oppositve
        // of what I want
        defaultValue="dd-mm-yyyy"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
</Paper>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
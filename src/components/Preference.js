import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
        <Paper>
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="None" control={<Radio />} label="None" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          
          </RadioGroup>
        </FormControl>    
        
      </div>
    </Paper>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
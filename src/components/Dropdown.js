import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Paper from 'material-ui/Paper';
import data from '../skills.json';
console.log(data);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


class SimpleSelect extends React.Component {
  state = {
    skill: ''
  };

  handleChange = event => {
    console.log(event);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
    <Paper>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="simple">Select Skill and Competency</InputLabel>
          <Select
            value={this.state.skill}
            onChange={this.handleChange}
          >
            {data.skills.map( val => (<MenuItem value={val}>{val}</MenuItem>))}
          </Select>
        </FormControl>
      </form>
    </Paper>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
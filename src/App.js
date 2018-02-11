import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './style/index.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// have a look at colors that I need here
import { blue, grey, red } from 'material-ui/colors';
import './App.css';
import Layout from './components/Layout.js';

const accent = blue['500'];
const second = grey['100'];

const theme = createMuiTheme({
  palette: {
    primary: {
      ...blue,
      500: accent
    },
    secondary: {
      ...grey,
      100: second
    },
    error: red
  }
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
      <p>I work </p>
      <Layout />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;




import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UploadPage, FeatureSelectionPage, ResultsPage } from './pages';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

/**
 * This defines the style for the whole application.
 */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #23225A;
    font-family: Josefin Sans, sans-serif;
    color: white;
    

    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

/**
 * Theme the site is on, currently only supports dark mode.
 */
const theme = {
  main: "dark"
};

/**
 * Main root of application where page switching occurs.
 */
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <React.Fragment>
            <GlobalStyle />
            <Switch>
              { /** Pages that the user goes through during analysis */ }
              <Route path="/featureSelection" component={FeatureSelectionPage} />
              <Route path="/results" component={ResultsPage} />

              { /** Landing Page */}
              <Route path="/" component={UploadPage} />
            </Switch>
          </React.Fragment>          
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UploadPage, FeatureSelectionPage, ResultsPage } from './pages';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/featureSelection" component={FeatureSelectionPage} />
          <Route path="/results" component={ResultsPage} />

          { /** Landing Page */}
          <Route path="/" component={UploadPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;

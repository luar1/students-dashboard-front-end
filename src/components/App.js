import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import Dummy from './landingPage/Dummy';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Dummy />
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>
    </div>
  )
};

export default App;
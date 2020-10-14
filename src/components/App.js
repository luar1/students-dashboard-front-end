import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import LandingPage from './landingpage/LandingPage';
import Sidebar from './homePage/Sidebar';

const App = () => {
  return (
    <div>
      <Router>
        <LandingPage />
        {/* <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} /> */}
      </Router>
    </div>
  )
};

export default App;
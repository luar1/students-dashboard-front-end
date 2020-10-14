import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

import Dummy from './landingPage/Dummy';
import Sidebar from './homePage/Sidebar';

const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        {/* <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} /> */}
      </Router>
    </div>
  )
};

export default App;
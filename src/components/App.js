import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { AuthStore } from './contexts/AuthContext';
import 'antd/dist/antd.css';

import LandingPage from './landingpage/LandingPage';
import Sidebar from './homePage/Sidebar';

const App = () => {
  return (
    <Router>
      <CookiesProvider>
        <AuthStore>
          <Sidebar />
        </AuthStore>
      </CookiesProvider>
    </Router>
  )
};

export default App;
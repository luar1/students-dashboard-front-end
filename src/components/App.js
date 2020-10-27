import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { AuthStore } from './contexts/AuthContext';

import * as ROUTES from '../constants/routes';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import LandingPage from './landingPage/LandingPage';
import HomePage from './homePage/HomePage';
import GlobalStyles from '../styles/Global';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <AuthStore>
          <GlobalStyles />
          <Switch>
            <Route path={ROUTES.HOME} exact render={() => <Redirect to={`${ROUTES.HOME}${ROUTES.DASHBOARD}`} />} />
            <PrivateRoute path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.LANDING} exact component={LandingPage} />
          </Switch>
        </AuthStore>
      </CookiesProvider>
    </BrowserRouter>
  )
};

export default App;
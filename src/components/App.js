import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { AuthStore } from './contexts/AuthContext';
import { UserStore } from './contexts/UserContext';
import { CalendarStore } from "./contexts/CalendarContext";


import * as ROUTES from '../constants/routes';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import LandingPage from './landingPage_copy/LandingPage';
import HomePage from './homePage_copy/HomePage';
import GlobalStyles from '../styles/Global';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        {/* <AuthStore> */}
        <UserStore>
          <CalendarStore>
            <GlobalStyles />
            <Switch>
              <Route path={ROUTES.HOME} exact render={() => <Redirect to={`${ROUTES.HOME}${ROUTES.DASHBOARD}`} />} />
              <PrivateRoute path={ROUTES.HOME} component={HomePage} />
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
            </Switch>
          </CalendarStore>
        </UserStore>
        {/* </AuthStore> */}
      </CookiesProvider>
    </BrowserRouter>
  )
};

export default App;

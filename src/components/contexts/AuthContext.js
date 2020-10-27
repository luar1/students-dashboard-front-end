import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import _ from 'lodash';

const Context = React.createContext();

export const AuthStore = ({ children }) => {
  const [cookies, setCookie] = useCookies(['auth_token']);
  const [authUser, setAuthUser] = useState(cookies['auth_token']);
  let token = null;

  if (authUser && _.isEmpty(cookies)) {
    setCookie('auth_token', authUser)
  }

  // if (!_.isEmpty(cookies)) {
  //   token = cookies['auth_token'];
  // }

  return (
    <Context.Provider
      value={[authUser, setAuthUser]}
    >
      {children}
    </Context.Provider>
  )
}

export default Context;
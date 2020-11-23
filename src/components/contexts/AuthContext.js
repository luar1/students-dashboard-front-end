import React, { useState, useEffect, useReducer } from 'react';
import { useCookies } from 'react-cookie';
import _ from 'lodash';

const Context = React.createContext();

export const AuthStore = ({ children }) => {
  const [cookies, setCookie] = useCookies(['auth_token']);
  // const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  // const { authUser, email, username, course } = state;
  const [authUser, setAuthUser] = useState(cookies['auth_token']);

  // useEffect(() => {
  //   // dispatch({ type: 'authUser', payload: { field: 'authUser', value: cookies['auth_token'] } });
  //   if (authUser && _.isEmpty(cookies)) {
  //     console.log('set cookie', authUser)
  //     setCookie('auth_token', authUser)
  //     setAuthUser(cookies['auth_token'])
  //     console.log(cookies)
  //     console.log('cookie', cookies['auth_token'])
  //   }

  // }, [])

  if (authUser && _.isEmpty(cookies)) {
    // console.log('set cookie', authUser)
    setCookie('auth_token', authUser)
    // setAuthUser(cookies['auth_token'])
    // console.log(cookies)
    // console.log('cookie', cookies['auth_token'])
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
  // return (
  //   <Context.Provider
  //     value={[state, dispatch]}
  //   >
  //     {children}
  //   </Context.Provider>
  // )
}

export default Context;
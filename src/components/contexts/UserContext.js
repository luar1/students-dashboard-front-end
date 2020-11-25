import React, { useReducer } from 'react';

const Context = React.createContext();

const INITIAL_STATE = {
  username: 'jorge',
  email: 'jgabitto1792@gmail.com',
  courseID: 4
}

const ACTIONS = {
  SET_EMAIL: 'email',
  SET_USERNAME: 'username',
  SET_COURSE: 'course',
  SET_ALL: 'all'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_EMAIL:
      return { ...state, [action.payload.field]: action.payload.value };
    case ACTIONS.SET_USERNAME:
      return { ...state, [action.payload.field]: action.payload.value };
    case ACTIONS.SET_COURSE:
      return { ...state, [action.payload.field]: action.payload.value };
    case ACTIONS.SET_ALL:
      return { ...action.payload.value };
    default:
      throw new Error();
  }
}

export const UserStore = ({ children }) => {
  const [userInfo, dispatchUser] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider
      value={[userInfo, dispatchUser]}
    >
      {children}
    </Context.Provider>
  )
}

export default Context;
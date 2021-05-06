import React from 'react';

export const user = {
  email: '',
  password: '',
  isLoggedIn: false
}

export const logOut = () => void(0);

const AppContext = React.createContext({ user, logOut });

export default AppContext;

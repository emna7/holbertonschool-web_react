import { createContext } from 'react';

export const user = {
  email: '',
  password: '',
  isLoggedIn: false
};

export const logOut = () => {};

const appContext = createContext({ user, logOut });

export default appContext;

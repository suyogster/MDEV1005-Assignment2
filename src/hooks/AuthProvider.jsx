import React from 'react';

import {
  isAuth, login, logout, sendPasswordReset, addUser, getCurrentUser
} from '../services/FirebaseAuthService';

const AuthContext = React.createContext(null);

function AuthProvider({ children, ...rest }) {
  // AuthContext to encapsulate these functions, which are wrappers to the services service.
  const auth = {
    isAuth,
    login,
    logout,
    sendPasswordReset,
    addUser,
    getCurrentUser
  };

  return (
    <AuthContext.Provider value={auth} {...rest}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;

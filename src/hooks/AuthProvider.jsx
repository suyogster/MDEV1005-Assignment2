import React from 'react';

import {
  isAuth,
  login,
  logout,
  sendPasswordReset,
  addUser,
  getCurrentUser,
  getAllUsers,
} from '../services/FirebaseAuthService';

const AuthContext = React.createContext(null);

// This function creates an AuthProvider component which encapsulates authentication-related functions
// It provides an AuthContext to access authentication functionalities throughout the app
function AuthProvider({ children, ...rest }) {
  // AuthContext to encapsulate these functions, which are wrappers to the services service.
  const auth = {
    isAuth,
    login,
    logout,
    sendPasswordReset,
    addUser,
    getCurrentUser,
    getAllUsers,
  };

  return (
    <AuthContext.Provider value={auth} {...rest}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;

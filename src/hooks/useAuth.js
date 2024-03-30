import React from 'react';

import { AuthContext } from './AuthProvider';

// This custom hook named useAuth is created to conveniently access the authentication context using React's useContext hook.
// It returns the authentication context obtained from the AuthContext provider.
function useAuth() {
  return React.useContext(AuthContext);
}

export default useAuth;

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import ConsoleLayout from '../layouts/ConsoleLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Signup from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Apps from '../pages/Apps';
import Users from '../pages/Users';
import Settings from '../pages/Settings';
import AuthProvider from '../hooks/AuthProvider';
import News from '../pages/News';
import Weather from '../pages/Weather';
import Stock from '../pages/Stock';

// Import AuthProvider hook
import AuthProvider from '../hooks/AuthProvider';

// Define the main App component
function App() {
  return (
    // Set up BrowserRouter to handle routing
    <BrowserRouter>
      {/* Wrap the application with AuthProvider to provide authentication context */}
      <AuthProvider>
        {/* Define routes using the Routes component */}
        <Routes>
          {/* Route for main layout */}
          <Route path='/' element={<MainLayout />}>
            {/* Define nested routes for different pages */}
            <Route path='' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgot' element={<ForgotPassword />} />
            <Route path='not-found' element={<NotFound />} />
            {/* Redirect to not-found page for invalid routes */}
            <Route path='*' element={<Navigate to='/not-found' />} />
          </Route>
          {/* Route for console layout */}
          <Route path='console' element={<ConsoleLayout />}>
            {/* Define nested routes for console pages */}
            <Route path='' element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            <Route path='apps' element={<Apps />} />
            <Route path='users' element={<Users />} />
            <Route path='settings' element={<Settings />} />
            <Route path='news' element={<News />} />
            <Route path='weather' element={<Weather />} />
            <Route path='stock' element={<Stock />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

// Export the App component
export default App;

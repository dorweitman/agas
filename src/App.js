import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Login from './components/auth/Login';
import HomePage from './components/home/Home';

import { translation } from './lib/config';

import './App.css'

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h2>{translation.loading}</h2>;
  }

  const login = () => <Login />;
  const homePage = () => <HomePage user={user} />;

  const displayPage = isAuthenticated ? homePage() : login();

  return displayPage;
};

export default App; 
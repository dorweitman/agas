import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Login from './components/auth/Login';
import SideBar from './components/side-bar/SideBar'
import Logout from './components/auth/Logout';
import AdminPage from './components/admin';

import { translation } from './config';

import './App.css'

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>{translation.loading}</div>;
  }

  const login = () => <Login />;
  const homePage = () => {
    return (
      <>
        <Logout />
        <h2>{translation.hello + user.name}</h2>
        <div className='sideBar'>
          <SideBar>
            <h2>{translation.individualPage}</h2>
            <h2>{translation.feed}</h2>
            <h2>{translation.graphs}</h2>
          </SideBar>
        </div>
        <AdminPage />
      </>
    );
  };

  const displayPage = isAuthenticated ? homePage() : login();

  return displayPage;
};

export default App; 
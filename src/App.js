import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Login from './components/auth/Login';
import SideBar from './components/side-bar/SideBar'
import Logout from './components/auth/Logout';
import AdminPage from './components/admin';

import { translation } from './config';
import companyImg from './assets/images/agas.png'

import './App.css'

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h2>{translation.loading}</h2>;
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
            <h2>{translation.getInTouch}</h2>
            <img id='companyImg' src={companyImg} alt='companyImg' />
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
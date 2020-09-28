import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { LogoutButton } from './styled-components';

import { translation } from '../../lib/config';

const Logout = () => {
  const { logout } = useAuth0();

  return <LogoutButton onClick={() => logout({ returnTo: window.location.origin })}>{translation.logout}</LogoutButton>; 
};

export default Logout;
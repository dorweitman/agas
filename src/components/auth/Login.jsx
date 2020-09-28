import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Img, Copyright, Page, Title, Button, Box } from './styled-components';

import { translation } from '../../lib/config';
import logoImg from '../../assets/images/agas.png';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const loginButton = <Box onClick={loginWithRedirect}>
    <Button>
      <span>{translation.login}</span>
    </Button>
  </Box>;

  const title = <Title>AGAS</Title>;
  const copyright = <Copyright>{translation.kamanatonCopyright}{new Date().getFullYear()}{'.'}</Copyright>;
  const img = <Img src={logoImg} alt='agasLogo' />;

  return <Page>{img}{title}{loginButton}{copyright}</Page>;
};

export default Login;
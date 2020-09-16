import React from 'react';

import { Container, Box, BoxLogo, BoxData, BoxInput } from './styles';

import Logo from './../../assets/new-php-logo.png';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <Container>
      <Box>
        <BoxLogo>
          <img src={Logo} alt="PHP"/>
          <label>Faça seu login na plataforma</label>
        </BoxLogo>
        <BoxData>
          <BoxInput>
            <input type="text" />
            <input type="password" />
            <Link to="/" >Esqueci a senha</Link>

            <button>Entrar</button>
            <Link to="/">Não tem uma conta? Registre-se</Link>
          </BoxInput>
        </BoxData>
      </Box>
    </Container>
  );
}

export default Login;
import React, { useState } from 'react';

import { Container, Box, BoxLogo, BoxData, BoxInput } from './styles';

import Logo from './../../assets/new-php-logo.png';
import { Link } from 'react-router-dom';

import api from "../../services/api";
import { login } from "../../services/auth";

const Login: React.FC = (props:any) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState({});

  async function logar() {
    if (!user || !password) {
      setError({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/login", { user, password });
        login(response.data.token);
        console.log(response)
        props.history.push("/viewarticles");
      } catch (err) {
        setError({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }  
  }

  return (
    <Container>
      <Box>
        <BoxLogo>
          <img src={Logo} alt="PHP"/>
          <label>Faça seu login na plataforma</label>
        </BoxLogo>
        <BoxData>
          <BoxInput>
              <input type="text" onChange={(e: any) => setUser(e.target.value)} />
              <input type="password" onChange={(e: any) => setPassword(e.target.value)} />
              <Link to="/" >Esqueci a senha</Link>
              <button onClick={logar}>Entrar</button>
              <Link to="/">Não tem uma conta? Registre-se</Link>
          </BoxInput>
        </BoxData>
      </Box>
    </Container>
  );
}

export default Login;
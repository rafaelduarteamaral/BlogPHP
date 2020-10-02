import React, { Component } from 'react';

import { Container, Box, BoxLogo, Form, BoxInput } from './styles';

import Logo from './../../assets/new-php-logo.png';
import { Link } from 'react-router-dom';

import api from "../../services/api";
import { login } from "../../services/auth";

interface StateProps {
  history: any;
}

interface DispatchProps {
};

type Props = StateProps & DispatchProps;


class Login extends Component<Props> {

  state = {
    user: "",
    password: "",
    error: ""
  }

  private handleSignIn = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { user, password } = this.state;
    if (!user || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/login", { user, password });
        login(response.data.token);
        console.log(response)
        this.props.history.push("/viewarticles");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }  
  }

  render() {
    
    return (
      <Container>
        <Box>
          <BoxLogo>
            <img src={Logo} alt="PHP"/>
            <label>Faça seu login na plataforma</label>
          </BoxLogo>
          <Form onSubmit={this.handleSignIn} noValidate={true}>
              <BoxInput>
                <input
                type="email"
                placeholder="Endereço de e-mail"
                onChange={e => this.setState({ user: e.target.value })}
                />
                <input
                type="password"
                placeholder="Senha"
                onChange={e => this.setState({ password: e.target.value })}
                />                
                <Link to="/" >Esqueci a senha</Link>
                <button type="submit">Entrar</button>
                <Link to="/">Não tem uma conta? Registre-se</Link>
              </BoxInput>
          </Form>
        </Box>
      </Container>
    );
  }
}

export default Login;
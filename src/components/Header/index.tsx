import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderTop, Button, SearchIcon, ButtonContainer } from './styles';
import Logo from './../../assets/new-php-logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderTop>
        <Link to="/">
          <img src={Logo} alt="Logo php"/>
        </Link>
        <ButtonContainer>
          <input type="text" placeholder="Pesquisar..." />
          <Button><SearchIcon /></Button>
        </ButtonContainer>
        <div className="menu-options">
          <Link to="/">PHP</Link>
          <Link to="/">NODEJS</Link>
          <Link to="/">REACTJS</Link>
        </div>
      </HeaderTop>
    </Container>
  );
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderTop } from './styles';
import Logo from './../../assets/new-php-logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderTop>
        <Link to="/">
          <img src={Logo} alt="Logo php"/>
        </Link>
       
        <div className="menu-options">
          <Link to="/">Home</Link>
        </div>
      </HeaderTop>
    </Container>
  );
}

export default Header;
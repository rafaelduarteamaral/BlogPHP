import React from 'react';
import { Link } from 'react-router-dom';
import { Container, HeaderTop } from './styles';
import Logo from './../../assets/new-php-logo.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <HeaderTop>
        <Link to="/">
          <img src={Logo} alt="Logo php"/>
        </Link>
        <div className="menu-options">
          <Link to="/">PHP</Link>
          <Link to="/">NODEJS</Link>
          <Link to="/">REACTJS</Link>
        </div>
      </HeaderTop>
      <p>© 2020 Blog da {"<DevCode/>"}. Feito com {"<"}3. Published with Ghost.</p>
    </Container>
  );
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderTop } from './styles';
import Logo from './../../assets/new-php-logo.png';

const HeaderAdmin: React.FC = () => {
  return (
    <Container>
      <HeaderTop>
        <Link to="/">
          <img src={Logo} alt="Logo php"/>
        </Link>
        <Link to="/">
          <img src="https://instagram.fbsb3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/64955594_626372004536266_7013410856809529344_n.jpg?_nc_ht=instagram.fbsb3-1.fna.fbcdn.net&_nc_ohc=E-gEOHVFmVcAX8i43LZ&oh=93a62cf667fe01457977508b930f768a&oe=5F8CCF83" alt="Logo php"/>
        </Link>
      </HeaderTop>
    </Container>
  );
}

export default HeaderAdmin;
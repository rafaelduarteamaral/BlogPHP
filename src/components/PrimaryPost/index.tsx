import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Post, SecondPost, BoxPost } from './styles';

const PrimaryPost: React.FC = () => {
  return (
    <Container>
      <Post>
        <h1>PHP8 - Novas features no PHP.</h1>
        <p>Conheça as novas features no PHP 8.</p>
      </Post>

      <BoxPost>
          <SecondPost>
            <Link to="/article">
              <h1>PHP8 - Novas features no PHP.</h1>
              <p>Conheça as novas features no PHP 8.</p>
            </Link>
          </SecondPost>

          <SecondPost>
            <Link to="/article">
              <h1>PHP8 - Novas features no PHP.</h1>
              <p>Conheça as novas features no PHP 8.</p>
            </Link>
          </SecondPost>

          <SecondPost>
            <Link to="/article">
              <h1>PHP8 - Novas features no PHP.</h1>
              <p>Conheça as novas features no PHP 8.</p>
            </Link>
          </SecondPost>

          <SecondPost>
            <Link to="/article">
              <h1>PHP8 - Novas features no PHP.</h1>
              <p>Conheça as novas features no PHP 8.</p>
            </Link>
          </SecondPost>

          <SecondPost>
            <Link to="/article">
              <h1>PHP8 - Novas features no PHP.</h1>
              <p>Conheça as novas features no PHP 8.</p>
            </Link>
          </SecondPost>

          <SecondPost>
            <Link to="/article">
              <h1>PHP8 - Novas features no PHP.</h1>
              <p>Conheça as novas features no PHP 8.</p>
            </Link>
          </SecondPost>
        
      </BoxPost>
    </Container>
  );
}

export default PrimaryPost;
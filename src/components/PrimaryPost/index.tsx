import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Post, SecondPost, BoxPost } from './styles';

interface ArtciclesProps {
  Articles: Array<{
    id: number;
    title: string;
    img: string;
    text: string;
  }>;
}

const PrimaryPost: React.FC<ArtciclesProps> = ({Articles}) => {
  return (
    <Container>
      <Post>
        <h1>PHP8 - Novas features no PHP.</h1>
        <p>aConheça as novas features no PHP 8.</p>
      </Post>

      <BoxPost>
      {Articles.map( article => {
        return (
          <SecondPost key={article.id}>
            <Link to={`/article/${article.id}`}>
              <h1>{article.title}</h1>
              {/* <p>{article.text}</p> */}
            </Link>
          </SecondPost>
        )
      })}
      </BoxPost>
    </Container>
  );
}

export default PrimaryPost;
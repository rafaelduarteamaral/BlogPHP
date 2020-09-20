import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import HeaderAdmin from '../../components/HeaderAdmin';
import { Container, SecondPost, BoxPost, NewArticle } from './styles';

interface ArtciclesProps {
  articles: Array<{
    id: number;
    title: string;
    img: string;
    text: string;
  }>;
}


const ViewArticles: React.FC<ArtciclesProps> = () => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    api.get('articles').then(response => {
      const todoArticles = response.data;
      setArticles(todoArticles);
    })
  }, []);

  return (
      <Container>
          <HeaderAdmin />
          <BoxPost>
            {articles.map( (article: any) => {
              return (
                <SecondPost key={article.id}>
                  <Link to={`/editarticle/${article.id}`}>
                    <h1>{article.title}</h1>
                    {/* <p>{article.text}</p> */}
                  </Link>
                </SecondPost>
              )
            })}
          </BoxPost>

          <NewArticle>
            <Link className="buttonNewArticle" to={`/editarticle`}> + </Link>
          </NewArticle>
          
      </Container>
  );
}

export default ViewArticles;
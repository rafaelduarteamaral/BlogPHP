import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../../components/HeaderAdmin';
import { Container, SecondPost, BoxPost, NewArticle } from './styles';
import api from '../../services/api';



const ViewArticles: React.FC = (props:any) => {
  const [articles, setArticles] = useState<any>([]);

  async function getArticle() {
    await api.get(`articles`).then(response => {
      setArticles(response.data);
    });
  }

  useEffect(() => {
    getArticle();
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


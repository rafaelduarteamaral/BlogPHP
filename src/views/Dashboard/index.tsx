import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import PrimaryPost from '../../components/PrimaryPost';
import Footer from '../../components/Footer';
import api from '../../services/api';

const Dashboard: React.FC = (props:any) => {
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
      <Header />
      <PrimaryPost Articles={articles}/>
      <Footer/>
    </Container>
  );

}

export default Dashboard;


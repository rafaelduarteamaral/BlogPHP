import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import PrimaryPost from '../../components/PrimaryPost';
import api from '../../services/api';

const Dashboard: React.FC = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.get('articles').then(response => {
      const todoArticles = response.data;
      setArticles(todoArticles);
    })
  }, []);

  return (
    <Container>
      <Header />
      <PrimaryPost Articles={articles}/>
    </Container>
  );
}

export default Dashboard;
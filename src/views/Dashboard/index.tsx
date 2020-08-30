import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import PrimaryPost from '../../components/PrimaryPost';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <PrimaryPost />
    </Container>
  );
}

export default Dashboard;
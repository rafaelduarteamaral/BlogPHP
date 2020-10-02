import React, { Component } from 'react';
import { Container } from './styles';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import PrimaryPost from '../../components/PrimaryPost';
import { Article } from '../../store/ducks/articles/types';
import { ApplicationState } from '../../store';
import * as ArticleActios from '../../store/ducks/articles/actions';
import { bindActionCreators, Dispatch } from 'redux';
import Footer from '../../components/Footer';

interface StateProps {
  articles: Article[]
};

interface DispatchProps {
  loadRequest(): void
};

type Props = StateProps & DispatchProps;

class Dashboard extends Component<Props>{
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render(){
    const { articles } = this.props;
    console.log(articles)
    return (
      <Container>
        <Header />
        <PrimaryPost Articles={articles}/>
        <Footer/>
      </Container>
    );
  };
}

const mapStateToProps = (state: ApplicationState) => ({
  articles: state.articles.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ArticleActios, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


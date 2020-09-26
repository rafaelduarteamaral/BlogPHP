import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import HeaderAdmin from '../../components/HeaderAdmin';
import { ApplicationState } from '../../store';
import { Article } from '../../store/ducks/articles/types';
import { Container, SecondPost, BoxPost, NewArticle } from './styles';
import * as ArticleActios from '../../store/ducks/articles/actions';

interface StateProps {
  articles: Article[]
};

interface DispatchProps {
  loadRequest(): void
};

type Props = StateProps & DispatchProps;

class ViewArticles extends Component<Props> {

  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { articles } = this.props;
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
}


const mapStateToProps = (state: ApplicationState) => ({
  articles: state.articles.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ArticleActios, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ViewArticles);


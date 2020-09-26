import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Article } from '../../store/ducks/articles/types';
import { ApplicationState } from '../../store';
import * as ArticleActios from '../../store/ducks/articles/actions';

import HeaderAdmin from '../../components/HeaderAdmin';
import { Container, BodyBox, Box, InputBox, Buttons, ButtonSuccess, ButtonDelete } from './styles';


interface StateProps {
    articles: Article[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class EditArticle extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { articles } = this.props;
    return (
        <Container>
            <HeaderAdmin />
            <BodyBox>
                <Box>
                    <InputBox>
                        <label>Titulo sobre o arigo.</label>
                        <input type="text" defaultValue={articles.length > 0 ? articles[0].title : ""} />
                    </InputBox>
                    <InputBox>
                        <label>Inserir Imagem.</label>
                        <input type="text" defaultValue={articles.length > 0 ? articles[0].img : ""} />
                    </InputBox>
                    <InputBox>
                        <label>Texto sobre o artigo.</label>
                        <textarea id="story" name="story" defaultValue={articles.length > 0 ? articles[0].text : ""} >
                        </textarea>
                    </InputBox>
                    <Buttons>
                        <ButtonSuccess>
                            <button >Enviar</button>
                        </ButtonSuccess>
                        <ButtonDelete>
                            <button >Deletar</button>
                        </ButtonDelete>
                    </Buttons>
                </Box>
            </BodyBox>
        </Container>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
    articles: state.articles.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ArticleActios, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
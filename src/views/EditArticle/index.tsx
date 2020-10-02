import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Article } from '../../store/ducks/articles/types';
import { ApplicationState } from '../../store';
import api from "../../services/api";

import * as ArticleActios from '../../store/ducks/articles/actions';

import HeaderAdmin from '../../components/HeaderAdmin';
import { Container, BodyBox, Form, InputBox, Buttons, ButtonSuccess, ButtonDelete } from './styles';


interface StateProps {
    articles: Article[]
    history: any;
}



interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class EditArticle extends Component<Props> {

  state = {
    title: "",
    img: "",
    text: "",
  }

  private registerArticle = async (
      e: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
      e.preventDefault();

      const { title, img, text } = this.state;
      if (!title || !img || !text) {

        console.log("aqui");

        this.setState({ error: "Preencha todos os dados para se cadastrar" });
      } else {
        try {
          await api.post("/articles", { title, img, text });
          this.props.history.push("/");
        } catch (err) {
          console.log(err);
          this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
        }
      }
  }


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
                <Form onSubmit={this.registerArticle} noValidate={true}>
                    <InputBox>
                        <label>Titulo sobre o arigo.</label>
                        <input
                        type="text"
                        placeholder="title"
                        defaultValue={articles.length > 0 ? articles[0].title : ""}
                        onChange={e => this.setState({ title: e.target.value })}
                        />
                    </InputBox>
                    <InputBox>
                        <label>Inserir Imagem.</label>
                        <input
                        type="text"
                        placeholder="Image"
                        defaultValue={articles.length > 0 ? articles[0].img : ""}
                        onChange={e => this.setState({ img: e.target.value })}
                        />
                    </InputBox>
                    <InputBox>
                        <label>Texto sobre o artigo.</label>
                        <textarea 
                        id="story" 
                        name="story"
                        defaultValue={articles.length > 0 ? articles[0].text : ""}
                        onChange={e => this.setState({ text: e.target.value })} >
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
                </Form>
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
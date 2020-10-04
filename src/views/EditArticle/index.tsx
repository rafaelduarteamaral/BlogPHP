import React, { useEffect, MouseEvent } from 'react';
import api from "../../services/api";

import HeaderAdmin from '../../components/HeaderAdmin';
import { Container, BodyBox, BoxForm, InputBox, Buttons, ButtonSuccess, ButtonDelete } from './styles';
import { useState } from 'react';

interface IButtonPros {
  onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
}

const EditArticle: React.FC<IButtonPros> = (props:any) => {

  const [article, setArticle] = useState<any>({});
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [text, setText] = useState('');

  async function getArticle() {
    await api.get(`articles/${props.match.params.id}`).then(response => {
      setArticle(response.data[0]);
    });
  }
  
  const registerArticle = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!title || !img || !text) {
    } else {
      try {
        if(article.id) {
          api.put(`/articles/${article.id}`, { id: article.id ,title, img, text });
          alert('Update realizado com sucesso')
        } else {
          api.post("/articles", { title, img, text });
          alert('cadastro realizado com sucesso')
        }

      } catch (err) { 
        alert(err);
      }
    }
  }

  const deleteArticle = (e: React.MouseEvent<HTMLButtonElement>): void => {
    try {
      api.delete(`/articles/${article.id}`);
      alert('Deletado com sucesso')
    } catch (err) { 
      alert(err);
    }
  }

  useEffect(() => {
    getArticle();
  }, []);


  return (
      <Container>
          <HeaderAdmin />
          <BodyBox>
              <BoxForm>
                  <InputBox>
                      <label>Titulo sobre o arigo.</label>
                      <input
                      type="text"
                      placeholder="title"
                      defaultValue={ article && article.title }
                      onChange={e => setTitle(e.target.value)}
                      />
                  </InputBox>
                  <InputBox>
                      <label>Inserir Imagem.</label>
                      <input
                      type="text"
                      placeholder="Image"
                      defaultValue={ article && article.img }
                      onChange={e => setImg(e.target.value)}
                      />
                  </InputBox>
                  <InputBox>
                      <label>Texto sobre o artigo.</label>
                      <textarea 
                      id="story" 
                      name="story"
                      defaultValue={ article && article.text }
                      onChange={e => setText(e.target.value)} >
                      </textarea>
                  </InputBox>
                  <Buttons>
                      <ButtonSuccess>
                          <button onClick={registerArticle}>Enviar</button>
                      </ButtonSuccess>
                      <ButtonDelete>
                          <button onClick={deleteArticle}>Deletar</button>
                      </ButtonDelete>
                  </Buttons>
              </BoxForm>
          </BodyBox>
      </Container>
  );
}


export default EditArticle;
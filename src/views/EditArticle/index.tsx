import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderAdmin from '../../components/HeaderAdmin';
import api from '../../services/api';

import { Container, BodyBox, Box, InputBox, Buttons, ButtonSuccess, ButtonDelete } from './styles';

const EditArticle: React.FC = (props: any) => {
    const [article, setArticle] = useState<any>({});
    const [title, setTitle] = useState();
    const [img, setImg] = useState();
    const [text, setText] = useState();
    const [patch, setPatch] = useState(false);

    async function getArticle() {
        await api.get(`articles/${props.match.params.id}`).then(response => {
            setArticle(response.data[0]);
        });
    }

    async function save() {
        if(props.match.params.id) {
            await api.put(`/articles/${props.match.params.id}`, { title, img, text }).then(response => {
                setArticle(response);
                alert('update realizado com sucesso');
                window.location.reload();
            });
        } else {
            await api.post(`articles`, { title, img, text }).then(response => {
                setArticle(response);
                alert('Cadastro realizado com sucesso');
                window.location.reload();
            });
        }
    }

    async function remove() { 
        await api.delete(`/articles/${props.match.params.id}`).then(response => {
            setArticle(response);
            alert('Artigo deletado com sucesso.');
            setPatch(true);
            window.location.reload();
        });
    }

    useEffect(() => {
        getArticle();
    }, []);
  return (
      <Container>
          <HeaderAdmin />
          <BodyBox>
            <Box>
                <InputBox>
                    <label>Titulo sobre o arigo.</label>
                    <input type="text" defaultValue={ article ? article.title : "" } onChange={(e: any) => setTitle(e.target.value)}/>
                </InputBox>
                <InputBox>
                    <label>Inserir Imagem.</label>
                    <input defaultValue={ article ? article.img : "" } type="text" onChange={(e: any) => setImg(e.target.value)}/>
                </InputBox>
                <InputBox>
                    <label>Texto sobre o artigo.</label>
                    <textarea id="story" name="story" defaultValue={ article ? article.text : "" } onChange={(e: any) => setText(e.target.value)}>
                    </textarea>
                </InputBox>
                <Buttons>
                    <ButtonSuccess>
                        <button onClick={save}>Enviar</button>
                    </ButtonSuccess>
                    <ButtonDelete>
                        <button onClick={remove}>Deletar</button>
                        {
                            patch && <Redirect to="/viewarticles" />
                        }
                    </ButtonDelete>
                </Buttons>
            </Box>
          </BodyBox>
      </Container>
  );
}

export default EditArticle;
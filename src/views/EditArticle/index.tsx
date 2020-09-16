import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';

import { Container, BodyBox, Box, InputBox } from './styles';

const EditArticle: React.FC = () => {
  return (
      <Container>
          <HeaderAdmin />
          <BodyBox>
            <Box>
                <InputBox>
                    <label>Titulo sobre o arigo.</label>
                    <input type="text"/>
                </InputBox>
                <InputBox>
                    <label>Inserir Imagem.</label>
                    <input type="text"/>
                </InputBox>
                <InputBox>
                    <label>Texto sobre o artigo.</label>
                    <textarea id="story" name="story"></textarea>
                </InputBox>
                <InputBox>
                    <button>Enviar</button>
                </InputBox>
            </Box>
          </BodyBox>
      </Container>
  );
}

export default EditArticle;
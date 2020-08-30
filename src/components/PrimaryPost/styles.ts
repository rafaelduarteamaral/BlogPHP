import styled from 'styled-components';
import img_post from './../../assets/img_post.png';

export const Container = styled.div`
  margin-top: 50px;
`;

export const Post = styled.div`
  max-width: 80%;
  height: 425px;
  background-color: var(--color-post-none-img);
  border-radius: 0.5em;
  text-align: center;
  padding-top: 170px;
  margin-left: auto;
  margin-right: auto;

  
  h1 {
    color: var(--color-text-white);
    padding: 20px;
  }

  p {
    color: var(--color-text-white);
    padding: 0 20px;
  }
`;

export const BoxPost = styled.div`
  display: flex;
  margin-left: 10%;
  margin-right: 10%;
  text-decoration: none;
  max-width: 1256px;
  flex-wrap: wrap;

`;


export const SecondPost = styled.div`
  max-width: 381px;
  height: 324px;
  background-image: url(${img_post});
  border-radius: 0.5em;
  text-align: center;
  padding-top: 150px;
  margin: 30px auto;
  background-size: 100% 100%;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: margin-top 0.66s;
  margin-left: 10px;
  word-wrap: break-word;

  a {
    text-decoration: none;
  }

  h1 {
    color: var(--color-text-white);
    padding: 20px;
  }

  p {
    color: var(--color-text-white);
    padding: 0 20px;
  }

  &:hover {
    margin-top: 4%;
  }
`;

import styled from 'styled-components';
import img_post from './../../assets/img_post.png';

export const Container = styled.div`
  background-color: #5F49AB;
  height: 100vh;
`;

export const BoxPost = styled.div`
  display: flex;
  margin-left: 10%;
  margin-right: 10%;
  text-decoration: none;
  max-width: 75vw;
  flex-wrap: wrap;

  @media(max-width: 1000px) {
    flex-direction: column;
  }
`
export const NewArticle = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    width: 76px;
    height: 76px;
    left: 94%;
    bottom: 5px;
    background: #16C60C;
    color: #FFF;
    font-size: 60px;
    border-radius: 50px;
    text-decoration: none;
    margin-bottom: 20px;

  }
`;

export const SecondPost = styled.div`
  max-width: 30%;
  height: 40vh;

  @media(max-width: 1000px) {
    max-width: 80%;
    height: 50vw;
  }

  background-image: url(${img_post});
  border-radius: 0.5em;
  text-align: center;
  padding-top: 10vw;
  margin: 30px auto;
  background-size: 100% 100%;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: margin-top 0.66s;
  /* margin-left: 10px; */
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

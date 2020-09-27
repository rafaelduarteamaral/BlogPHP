import styled from 'styled-components';

export const Container = styled.div`

`;

export const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 740px) {
    flex-direction: column;
  }
`;

export const BoxLogo = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5F49AB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 40%;
  }

  label {
    font-size: 66px;
    text-align: center;
    color: #fff;
    width: 60%;
  }

  @media(max-width: 740px) {
    label {
      text-align: center;
      font-size: 100%;
      color: #fff;
      width: 60%;
    }
  }
`;

export const Form = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5F49AB;

  div {
    border-radius: 8px;
    width: 65%;
    height: 80%;
    background-color: #7159C1;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  input {
    width: 70%;
    height: 70px;
    border-radius: 8px;
    font-size: 25px;
    padding: 0 10px;
    border:none;
  }
  
  input:nth-child(2n) {
    margin-top: 13px;
  }

  a {
    margin-top:5px;
    width: 70%;
    color: #fff;
    text-decoration: none;
    font-size: 25;
  }

  button {
    margin-top: 30%;
    width: 70%;
    height: 70px;
    background-color: #5F49AB;
    font-size: 30px;
    border-radius: 8px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

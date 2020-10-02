import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 150px 0px 50px 0px;

`;


export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;
  align-items: center;

  img {
    width: 147px;
    height: 78px;
  }

  div > a {
    padding: 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 29px;
    color: var(--color-text);
  }
`;




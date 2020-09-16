import styled from 'styled-components';

export const Container = styled.div`
  background-color: #7159C1;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;
  align-items: center;

  img {
    width: 70px;
    border-radius: 50%;
  }

  div > a {
    padding: 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 29px;
    color: var(--color-text);
  }
`;



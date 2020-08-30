import styled from 'styled-components';

export const Container = styled.div`
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



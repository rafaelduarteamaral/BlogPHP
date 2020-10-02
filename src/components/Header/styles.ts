import styled from 'styled-components';
import { Search } from "styled-icons/material"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  input {
    border-radius: 8px;
    width: 70%;
    height: 60px;
    padding: 10px;
    font-size: 17px;
  }
`;

export const Button = styled.div`

`;

export const SearchIcon = styled(Search)`
  width: 60px;
  height: 60px;
  color: var(--symbol);
  cursor: pointer;
`;



import styled from 'styled-components';
import { Search } from "styled-icons/material"

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

export const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  input {
    border-radius: 8px;
    width: 100%;
    height: 60px;
    padding: 10px;
    font-size: 17px;
  }
`;

export const Button = styled.div`

`;

export const SearchIcon = styled(Search)`
  width: 50px;
  height: 50px;
  color: var(--symbol);
  cursor: pointer;
`;



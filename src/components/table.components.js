import styled, { css } from 'styled-components';

export const Button = styled.button`
  float: left;
  background-color: darkseagreen;
  font-size: 20px;
  color: white;
  padding: 2px 15px;
  margin: 8px 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: sticky;
  top: 18px;
  :hover {
    background-color: #45a049;
  }
`;

export const TableProperties = styled.td`
  border-style: solid;
  border-width: 4px;
  color: white;
  border-color: darkseagreen;
  background-color: #8EBF6F;
  :hover {
    background-color: #45a049;
  }
`;

export const TopRightCorner = styled(TableProperties)`
  border-top-right-radius: 18px;
`;

const styledInputBar = css`
  width: 100%;
  padding: 3px 10px;
  height: 28px;
  font-family: sans-serif;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Input = styled.input(styledInputBar);

export const Select = styled.select(styledInputBar);

export const Row = styled.td`
  width: 18px;
  height: 18px;
  padding: 5px;
  background: #fff;
  border: 2px solid darkseagreen;
  background-color: #8EBF6F;
  color: white;
  text-align: center;
  font: 16px Arial, sans-serif;
`;
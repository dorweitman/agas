import styled from 'styled-components';

export const Button = styled.button`
  float: left;
  background-color: #4CAF50;
  font-size: 35px;
  color: white;
  padding: 2px 15px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: sticky;
  top: 18px;
  :hover {
    background-color: #45a049;
  }
`;

export const Grid = styled.table`
    
`;

export const Input = styled.input`
  width: 100%;
  padding: 3px 10px;
  margin: 3px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const OrderedList = styled.tr`
  clear: both;
  list-style: none;
  padding-left: 2%;
    margin: 2em 0;
    padding-top: 1em;
    display: block;
    position: relative;
    /* counter-increment: inst; */
  ::before {
    /* content: counter(inst); */
    background: rgba(255, 150, 0, 0.35);
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    font-style: italic;
    text-shadow: 1px 1px rgba(255, 150, 0, 0.5);
    
    border-radius: 0 0.675em 0.675em 0;
    font-size: 1.5em;
    text-align: center;
    
    padding-top: 0;
    padding-left: 2.25%;
    left: -5%;
    top: -0.65em;
    height: 1.35em;
    width: 1.35em;
    position: absolute;
    
    transition: all 0.2s ease-in-out;
    
    z-index: -1;
  }
  @media (min-width: 33em) {
    :before {
      border-radius: 50%;
      font-size: 1.5em;
      height: 1.35em;
      margin-left: 2.5%;
      padding-left: 0;
      padding-top: 0;
      top: -0.15em;
      width: 1.35em;
      z-index: -1;
    }
  }
`;


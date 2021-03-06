import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    box-sizing: border-box;
    list-style: none;
    font-family: "Montserrat", sans-serif;
`;

export const Header = styled.div`
    background: #4CAF50;
`;

export const Title = styled.div`
    padding: 50px 0px 10px 0px;
    text-align: center;
    font-weight: 700;
    font-size: 76px;
    color: #fff;
`;

export const SearchBox = styled.div`
    max-width: 1000px;
    background: #4CAF50;
    margin: 0 auto;
    padding: 25px 0 50px;
    border-radius: 3px;
    `;

export const SearchInput = styled.input`
    text-align: center; 
    border: 0;
    border-bottom: 2px solid #e5edfa;
    width: 100%;
    outline: none;
    padding: 10px;
    background: transparent;
    color: #fff;
    font-size: 16px;
    :focus {
        border-bottom: 2px solid white;
    }
    ::placeholder {
      color: #e5edfa;
    }
`;

export const Table = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin: 0px auto 3% auto;
`;

const cell = css`
    text-align: center;
    padding: 8px;
`;

export const TableHeaderCell = styled.th`
    ${cell};
    border-bottom: 2px solid #eaeaea;
`; 

export const TableCell = styled.td`
    ${cell};
    border-bottom: 1px solid #efefef;
`;

export const Row = styled.tr`
    background: #fff;
    padding: 15px 0;
    height: 50px;   
`;

export const TableHeader = styled.div`
    width: 80%;
    margin: 3% auto 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4CAF50;
    padding: 1% 0px;
    font-weight: bold;
    cursor: pointer;
    font-size: 17px;
    position: relative; 
`;

export const AgasImg = styled.img`
    margin: auto;
    position: initial;  
    width: 4%;
`;

export const ExcelImg = styled.img` 
    height: 25px;
    width: 25px;
`;

export const Button = styled.button`
    background-color: darkseagreen;
    color: white;
    border: none;
    float: left;
    left: 10px;
    position: absolute; 
    border-radius: 4px;
    cursor: pointer;
    margin: 0 auto;
    :hover {
        background-color: #45a049;
    }
`;
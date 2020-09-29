import styled from 'styled-components';

export const Img = styled.img`
    width: 30%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: white !important;
    border: 4px solid #4CAF50;
    border-radius: 4px;
    :hover {    
        background-color: #4CAF50;
        color: white;
    }
`;

export const Title = styled.h2`
    background-color: darkseagreen;
    font-size: 30px;
    font-weight: lighter;
    color: white;
    padding: 5px;
    margin: 0% 44% 1% 44%;
    border: none;
    border-radius: 4px;
    text-align: center;
`;

export const People = styled.div`
    position: relative;
    height: 3em;
    list-style-type: none;
    width: 30%;
    color: #205f22;
    margin: auto;
    margin-top: 5px;
    background-color: darkseagreen;
    font-size: 20px;
    vertical-align: sub;
    font-weight: lighter;
    color: white;
    border: none;
    border-radius: 4px;
    text-align: center;
`;
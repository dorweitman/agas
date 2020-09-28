import styled from 'styled-components';

export const App = styled.h2`
    background-color: white;
    font-size: 20px;
    font-weight: lighter;
    color: darkseagreen;
    padding: 2px 15px;
    margin: 4px auto 4px auto;
    border: none;
    border-radius: 20px;
    position: initial;  
    top: 18px !important;  
    text-align: center;
    border: 1px solid darkseagreen;
    :hover {
        border: 1px solid black;
    }
`;

export const SideBarWrapper = styled.div`
    width: 300px;
    right: 0;
    position: absolute;
    z-index: 1;
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
`;

export const SideBarImg = styled.img`
    position: initial;  
    height: 70px;
    width: 70px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const SideBarCompanyImg = styled.img`
    margin: 70px auto 10px auto;
    position: initial;  
    height: 50px;
    width: 50px;
`;

export const UserNameHeader = styled.h2`
    float: right;
    background-color: darkseagreen;
    font-size: 20px;
    font-weight: lighter;
    color: white;
    padding: 2px 15px;
    margin: 4px 4px 4px 50%;
    border: none;
    border-radius: 4px;
    position: initial;  
    top: 18px !important;  
    text-align: center;
`;
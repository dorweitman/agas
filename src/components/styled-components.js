import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
    background-color: white;
    font-size: 20px;
    border: 2px solid #4CAF50;
    color: black;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    width: 48%;
    margin-bottom: 10px;
    margin: 7px;
    text-align: center;
    float: right;
    padding: 5px 0px 5px 0px;
    :hover {
        background-color: #4CAF50;
        color: white;
    }
`;

export const Img = styled.img`
    width: 50% ;
    height: 300px;
`;
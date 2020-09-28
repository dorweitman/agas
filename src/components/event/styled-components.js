import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const bg = keyframes`
    0% {
        background-size:    0 3px,
                            3px 0,
                            0 3px,
                            3px 0;
    }
    25% {
        background-size:    100% 3px,
                            3px 0,
                            0 3px,
                            3px 0;
    }
    50% {
        background-size:    100% 3px,
                            3px 100%,
                            0 3px,
                            3px 0;
    }
    75% {
        background-size:    100% 3px,
                            3px 100%,
                            100% 3px,
                            3px 0;
    }
    100% {
        background-size:    100% 3px,
                            3px 100%,
                            100% 3px,
                            3px 100%;
    }  
`;

export const Img = styled.img`
    width: 50% ;
    height: 300px;
`;

export const StyledNavLink = styled(NavLink)`
    background-color: white !important;
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
    &.active {
        border: 2px solid darkseagreen;    
        background-repeat: no-repeat;
        background-image:   linear-gradient(to right, darkseagreen 100%, darkseagreen 100%),
                            linear-gradient(to bottom, darkseagreen 100%, darkseagreen 100%),
                            linear-gradient(to right, darkseagreen 100%, darkseagreen 100%),
                            linear-gradient(to bottom, darkseagreen 100%, darkseagreen 100%);
        background-size:    100% 3px,
                            3px 100%,
                            100% 3px,
                            3px 100%;
        background-position:    0 0,
                                100% 0,
                                100% 100%,
                                0 100%;
        animation: ${bg} 1s cubic-bezier(0.19, 1, 0.22, 1) 1;
        box-shadow: 2px 11px 18px 0px red(219,219,219,0.81);
        :hover {
            animation-play-state: running;
        } 
    } 
`;
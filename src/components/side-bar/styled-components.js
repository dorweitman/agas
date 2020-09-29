import styled from 'styled-components';

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid darkseagreen;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;    
    padding: 20px 0px 0px 0px; 
    border-right-color: white;
    background-color: rgba(232, 236, 241, 1);
    transition: 0.5s ease;
    width: 300px;
    right: 0;
    position: absolute;
    opacity: 0.9;
`;

export const ToggleMenu = styled.button`
    height: 100px;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 9rem;
    width: 10px;
    position: absolute;
    outline: none;
    cursor: pointer;
    background-color: rgba(64, 194, 133, 0.693);
    border-color: rgba(64, 194, 133, 0.693);
    border-left: 0;
    transform: translate(-300px, 15vh);
`;
import styled from 'styled-components';

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid darkseagreen;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;    
    padding: 15px 0px 0px 0px; 
    border-right-color: white;
    background-color: rgba(232, 236, 241, 1);
    transition: 0.5s ease;
    width: 160px;
    right: 0;
    position: absolute;
    opacity: 0.9;
    z-index: 1;
`;

export const ToggleMenu = styled.button`
    height: 120px;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 9rem;
    width: 20px;
    position: absolute;
    outline: none;
    cursor: pointer;
    background-color: #F8901F;
    border-color: #F8901F;
    border-left: 0;
    transform: translate(-160px, 15vh);
`;
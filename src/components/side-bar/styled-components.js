import styled from 'styled-components';

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;    
    padding: 100px 0px 0px 0px; 
    border-color: darkseagreen;
    border-right-color: white;
    background-color: rgba(232, 236, 241, 1);
    transition: 0.8s ease;
`;

export const ToggleMenu = styled.button`
    height: 100px;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 9rem;
    width: 10px;
    position: absolute;
    outline: none;
    z-index: 1;
    cursor: pointer;
    background-color: rgba(64, 194, 133, 0.693);
    border-color: rgba(64, 194, 133, 0.693);
    border-left: 0;
    transform: translate(-300px, 3vh);
`;
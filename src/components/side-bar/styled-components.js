import styled from 'styled-components';

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid;
    border-radius: 0;
    border-color: rgba(64, 194, 133, 0.693);
    background-color: rgb(255, 255, 255);
    transition: 0.8s ease;
`;

export const ToggleMenu = styled.button`
    height: 50px;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 9rem;
    width: 10px;
    position: absolute;
    outline: none;
    z-index: 1;
    background-color: rgba(64, 194, 133, 0.693);
    border-color: rgba(64, 194, 133, 0.693);
    border-left: 0;
    transform: translate(-300px, 4vh);
`;
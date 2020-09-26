import styled from 'styled-components';

export const Copyright = styled.div`
  direction: ltr;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-size: 15px;
  margin-top: 50px;
  font-family: 'ui-sans-serif';
`;

export const LoginButton = styled.button`
    background-color: #90ee90;
    font-size: 20px;
    border: 2px solid #4CAF50;
    color: black;
    border-radius: 4px;
    cursor: pointer;
    text-align:center;
    text-decoration: none;
    width: 40%;
    text-align: center;
    padding: 5px 0px 5px 0px;
    margin: 0 auto;
    display: block;
    :hover {
        background-color: #4CAF50;
        color: white;
    }
`;

export const Img = styled.img`
    width: 20%;
    padding: 30px 30px 0px 30px;
    margin: 0 auto;
    display: block;
`;

export const LogoutButton = styled.button`
  float: left;
  background-color: darkseagreen;
  font-size: 20px;
  color: white;
  padding: 2px 15px;
  margin: 4px 4px 4px 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: initial;  
  top: 18px;
  :hover {
    background-color: #45a049;
  }
`;

export const Page = styled.div`
  background-color: #3C3C3C;
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 0px;
  font-size: 35px;
  color: white;
  font-family: 'ui-sans-serif';
`;

export const Box = styled.div`
  background-color: #3C3C3C; 
	height: 25%;
	width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  line-height: 50px;
	height: 50px;
	text-align: center;
	width: 450px;
	cursor: pointer;
	color: #FFF;
	transition: all 0.5s;
  position: relative;	
  span {
    z-index: 2;	
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;	
  }
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid rgba(255,255,255,0.2);
    background-color: rgba(255,255,255,0.1);
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid rgba(255,255,255,0.2);
    background-color: rgba(255,255,255,0.1);
  }
  :hover::before {
    transform: rotate(-45deg);
    background-color: rgba(255,255,255,0);
  }
  :hover::after {
    transform: rotate(45deg);
    background-color: rgba(255,255,255,0);
  }
`;
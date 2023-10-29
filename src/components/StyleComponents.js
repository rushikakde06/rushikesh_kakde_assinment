// StyledComponents.js
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  #root {
    background-color: #00e6e6;  
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 90%; 
  max-width: 350px; 
  text-align: center;

  @media (max-width: 768px) {
    width: 100%; 
  }
`;

export const Input = styled.input`
  width: calc(100% - 22px); 
  padding: 12px 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 11px -9px 14px -9px; 
    padding: 10px 8px 10px 8px;
  }
`;

export const Button = styled.button`
  width: calc(100% - 22px); 
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }                                                                     
};
`;
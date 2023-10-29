import React, { useState } from 'react';
import {
  LoginPageContainer,
  LoginForm,
  Input,
  Button,
  GlobalStyles
} from './StyleComponents';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill in both fields.');
    } else {
      setErrorMessage('');
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <>
      <GlobalStyles />
      <LoginPageContainer>
        <LoginForm onSubmit={handleLogin}>
          <h2>Login</h2>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: username ? 'green' : '' }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: password ? 'green' : '' }}
          />
          <Button type="submit"  >Login</Button>
        </LoginForm>
      </LoginPageContainer>
    </>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Login = props => {
  const [user, setUser] = useState({ username: '', password: '' });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles');
      })
      .catch(error => console.log(error));
  };
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  return (
    <Wrapper>
      <h1>Welcome to the Bubble App!</h1>
      
      <Form onSubmit={login}>
        <Input
          type='text'
          name='username'
          value={user.username}
          placeholder='Enter Username'
          onChange={handleChange}
        />
        <Input
          type='password'
          name='password'
          value={user.password}
          placeholder='Enter Password'
          onChange={handleChange}
        />
        <Button>Login</Button>
      </Form>
    </Wrapper>
  );
};
export default Login;
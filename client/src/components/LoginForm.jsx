import React, {useState} from 'react';
import axios from 'axios';
import S from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>

            <StyledLabel secondary="true">
            Username
            <StyledInput
            onChange={props.handleChange}
                label="Username"
                type="text"
                name="username"
                value={props.userInformation.username}
            />
            </StyledLabel>
            <StyledLabel secondary="true">
            Password
            <StyledInput
                onChange={props.handleChange}
                label="Password"
                type="password"
                name="password"
                value={props.userInformation.password}
            />
            </StyledLabel>
            <Styledbutton>Login</Styledbutton>
        </form>
    );
}
export default LoginForm;

const StyledTitle = S.h1`
    font-size: 34px;
    widtrh: 100%;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    color: #fff;
=`;
const form = S.form`
    width: 500px;
    margin: 0 auto;
    margin-top: 300px;
    background-color: #35b2a0;
    border: 1px solid #000;
    display: flex;
    flex-flow: row wrap;
    padding: 20px;
    justify-content: center;
`;

const StyledInput = S.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid #fff;
    font-size: 20px;
`;
const StyledLabel = S.label`
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    letter-spacing: 2px;
`;

const Styledbutton = S.button`
    color: #fff;
    border: none;
    outline: none;
    background-color: #000;
    border-radius: 5px;
    margin-top: 30px;
    padding: 10px 20px;
    font-size: 30px;
`;
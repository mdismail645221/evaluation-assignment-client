import { Button, IconButton, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, LOGINSOCAILICONS, LOGINTITLE } from '../../styled/Login';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';


// const { logIn } = useContext(AuthContext)
// console.log(logIn)


const Login = () => {

    const [userName, SetUserName] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")


    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const data = {
            userName,
            password
        }
        console.log(data)

        
    }

    return (
        <LOGIN>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{
                    background: '#FFFCFB',
                    padding: '10px',
                    width: '400px',
                    border: '1.5px solid #F6D8D7',

                }}>
                    <LOGINTITLE>Login</LOGINTITLE>
                    <TextField
                        required
                        id="outlined-required"
                        label="Your Name"
                        // defaultValue=""
                        placeholder='Your Name'
                        onChange={(e) => SetUserName(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="email"
                        type="email"
                        placeholder='Your Name'
                        onChange={(e) => SetEmail(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => SetPassword(e.target.value)}
                    />
                    <LOGINSOCAILICONS>
                        <IconButton>
                            <GoogleIcon />
                        </IconButton>
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                    </LOGINSOCAILICONS>
                    <Button type='submit'>Submit</Button>
                </Stack>
            </form>
        </LOGIN>
    );
};

export default Login;
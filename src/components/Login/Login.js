import { Button, IconButton, Paper, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, LOGINSOCAILICONS, LOGINTITLE } from '../../styled/Login';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';




const Login = () => {
    const { 
        signInUser, 
        user,
        loading,
        googleSignIn, 
    } = useContext(AuthContext)
    // console.log(logIn)
    
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        // console.log(form)
        // const data = {
        //     userName,
        //     password,
        //     email
        // }
        signInUser(email, password)
        .then((result)=> {
            setError(null)
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .catch((error)=>{
            console.log(error)
            setError(error.message)
        })
        
        
        
    }


    // google signin funciton
    const handlegoogle = () => {
        googleSignIn()
            .then(result => {
                setError(null)
                const user = result.user;
                console.log(user)
                // form.reset()
                toast("Successfully Login Good job", { duration: 3000 })
            })
            .catch(err => {
                setError(err.message)
                console.log(err)
            })
    }

    return (
        <LOGIN sx={{
            marginTop: '4rem'
        }}>
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
                        label="email"
                        type="email"
                        placeholder='Your Name'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Stack>
                        <p>Don't have a account? <Link to="/register">Create account</Link></p>
                    </Stack>
                    <LOGINSOCAILICONS>
                        <IconButton onClick={handlegoogle}>
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
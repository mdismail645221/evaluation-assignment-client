import { Button, IconButton, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, LOGINSOCAILICONS, LOGINTITLE } from '../../styled/Login';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AuthContext } from '../../context/AuthProvider';
// import { toast } from 'react-hot-toast';
import { UploadImgBB } from '../../hooks/UploadImgbb';




const Register = () => {
    const {
        registerUser,
        loading,
        googleSignIn,
        updateUser
    } = useContext(AuthContext)
    // console.log(logIn)

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [imgUrl, setImgUrl] = useState("")


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const imageFile = (imgUrl[0])
        const data = {
            userName,
            password,
            email, 
            imgUrl
        }
        registerUser(email, password)
        .then((result) => {
            setError(null)
            const user = result.user;
            UploadImgBB(imageFile)
            .then((imgData => {
                const userInfo = {
                    displayName: userName,
                    photoURL: imgData.data.display_url
                }
                updateUser(userInfo)
                .then(result => {
                    setError(null)
                    // toast.success('Successfully Registed. Good Job', { duration: 3000 })
                    form.reset()
                })
                .catch((error)=>{
                    setError(error.message)
                    // toast.error(`${error.message}`, { duration: 3000 })

                })
                // console.log(userInfo)
            }))
                .catch(err => {
                    console.log(err)
                    // toast.error(err.message)
                    setError(err.message)
                });
            
        })
        .catch(error=> {
            setError(error.message)
            // toast.error(error.message)
            console.log(error)
        })


    }


    // google signin funciton
    const handlegoogle = () => {
        googleSignIn()
            .then(result => {
                setError(null)
                const user = result.user;
                console.log(user)
                // toast("Successfully Login Good job", { duration: 3000 })
            })
            .catch(err => {
                setError(err.message)
                console.log(err)
            })
    }

    return (
        <LOGIN>
            <form onSubmit={handleRegister}>
                <Stack spacing={2} sx={{
                    background: '#FFFCFB',
                    padding: '10px',
                    width: '400px',
                    border: '1.5px solid #F6D8D7',

                }}>
                    <LOGINTITLE>Register</LOGINTITLE>
                    <TextField
                        required
                        id="outlined-required"
                        label="Your Name"
                        // defaultValue=""
                        type='text'
                        placeholder='Your Name'
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <TextField
                        required
                        // id="outlined-required"
                        // label="Your Name"
                        // defaultValue=""
                        type='file'
                        // placeholder='Your Name'
                        onChange={(e) => setImgUrl(e.target.files)}
                    />
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
                   { 
                    !error && <Stack>
                        <p>You have already create account? <Link to="/login">Login</Link></p>
                    </Stack>
                    }
                    {error && <Stack>
                        <p>{error}</p>
                    </Stack>}
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

export default Register;
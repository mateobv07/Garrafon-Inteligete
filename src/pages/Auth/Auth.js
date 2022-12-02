import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import {MdLockOutline} from 'react-icons/md';
import Input from './Input';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/features/userSlice'

const initialState = { firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(isSignUp){
            //const { data, isFetching }
        } else {
            axios({
                method: 'post',
                url: process.env.REACT_APP_BASE_URL + 'login/',
                data: formData
              })
              .then((res) => {
                dispatch(setAuth(res.data.token))
                localStorage.setItem('token', res.data.token)
                navigate('/')
              })
              .catch((err) => console.log(err))
        }
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

  

    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <MdLockOutline />
                </Avatar>
                <Typography variant="h5">
                    {isSignUp ? 'Sign Up' : 'Login'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                                </>
                            )
                        }
                        <Input name="username" label="Username" handleChange={handleChange}/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                        { isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>}
                    </Grid>
                    <Grid container direction="column"  justifyContent="space-evenly" alignItems="center" spacing={2}>
                        <Grid item>
                            <Button fullWidth type="Submit"  variant="contained" color="primary" className={classes.submit}> {isSignUp ? 'Sign Up' : 'Login'} </Button>
                        </Grid> 
                       
                        <Grid item>
                            <Button onClick={() => setIsSignUp((prevIsSignUp) => !prevIsSignUp)} >{isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"} </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;
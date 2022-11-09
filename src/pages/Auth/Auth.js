import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import {MdLockOutline} from 'react-icons/md';
import Input from './Input';
import useStyles from './styles';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();

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
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                        { isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>}
                    </Grid>
                    <Grid container direction="column"  justifyContent="space-evenly" alignItems="center" spacing={2}>
                        <Grid item>
                            <Button fullWidth type="Submit"  variant="contained" color="primary" className={classes.submit}> {isSignUp ? 'Sign Up' : 'Sign In'} </Button>
                        </Grid> 
                       
                        <Grid item>
                            <Button onClick={() => setIsSignUp((prevIsSignUp) => !prevIsSignUp)} >{isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"} </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;
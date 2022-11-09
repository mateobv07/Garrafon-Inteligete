import React from "react";

import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import {MdOutlineVisibility} from 'react-icons/md';
import {MdOutlineVisibilityOff} from 'react-icons/md'

const Input = ({ name, label, handleChange, autoFocus, type, half, handleShowPassword }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
                name={name} 
                onChange={handleChange} 
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={(name === 'password' || name === "confirmPassword") ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null}
            /> 
        </Grid>
    );
}

export default Input;
import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import useStyles from './styles'
import bottle from '../../assets/bottle.png'
const ConsumoHoy = () => {
    const styles = useStyles();
    
    return (
        <Paper elevation={8} className={styles.paper} sx={{ borderRadius: '15px'}}>
            <Grid container mt={3} >
                <Grid item xs={6}>
                    <img src={bottle} alt="bottle" className={styles.image}/>
                </Grid>
                <Grid item xs={6} alignItems="center">
                    <h2 >Hoy</h2>
                    <Typography variant="h5"> 600 ml</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ConsumoHoy;
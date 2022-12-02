import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import useStyles from './styles'
import bottle from '../../assets/bottle.png'
const LatestRefill = ({ cantidad }) => {
    const styles = useStyles();
    
    return (
        <Paper elevation={8} className={styles.paper} sx={{ borderRadius: '15px'}}>
            <h2 >Último refill</h2>
            <Grid container mt={3} alignItems="center">
                <Grid item xs={6}>
                    <img src={bottle} alt="bottle" className={styles.image}/>
                </Grid>
                <Grid item xs={6} alignItems="center">
                    <Typography variant="h4"> {cantidad} L</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default LatestRefill;
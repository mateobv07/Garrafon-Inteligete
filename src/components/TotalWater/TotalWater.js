import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import useStyles from './styles'
import waterDrop from '../../assets/waterDrop.png'
const TotalWater = ({ cantidad }) => {
    const styles = useStyles();
    
    return (
        <Paper elevation={8} className={styles.paper} sx={{ borderRadius: '15px'}}>
            <h2 >Agua consumida total</h2>
            <Grid container mt={3} alignItems="center">
                <Grid item xs={6}>
                    <img src={waterDrop} alt="bottle" className={styles.image}/>
                </Grid>
                <Grid item xs={6} alignItems="center">
                    <Typography variant="h3"> {cantidad} L</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TotalWater;
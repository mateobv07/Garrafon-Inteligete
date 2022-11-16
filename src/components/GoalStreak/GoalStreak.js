import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import useStyles from './styles'
import trophy from '../../assets/trophy.jpeg'
const GoalStreak = ({ cantidad }) => {
    const styles = useStyles();
    
    return (
        <Paper elevation={8} className={styles.paper} sx={{ borderRadius: '15px'}}>
            <h2 >Días con meta lograda:</h2>
            <Grid container mt={3} alignItems="center">
                <Grid item xs={6}>
                    <img src={trophy} alt="bottle" className={styles.image}/>
                </Grid>
                <Grid item xs={6} alignItems="center">
                    <Typography variant="h3"> {cantidad}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default GoalStreak;
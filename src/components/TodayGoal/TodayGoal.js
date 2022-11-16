import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import useStyles from './styles'
const TodayGoal = ({ cantidad }) => {
    const styles = useStyles();
    
    return (
        <Paper elevation={8} className={styles.paper} sx={{ borderRadius: '15px'}}>
            <h2 >Progreso Hoy</h2>
            (1.2 L)
            <Grid container mt={3} alignItems="center">
                <Grid item xs={12} >
                    2800ml<div className={styles.hundredEmpty}></div>
                </Grid>
                <Grid item xs={12} >
                    2400ml (goal)<div className={styles.hundredEmptyGoal}></div>
                </Grid>
                <Grid item xs={12} >
                    2000ml<div className={styles.hundredEmpty}></div>
                </Grid>
                <Grid item xs={12} >
                    1600ml<div className={styles.hundredFilled}></div>
                </Grid>
                <Grid item xs={12} >
                    1200ml<div className={styles.hundredFilled}></div>
                </Grid>
                <Grid item xs={12} >
                    800ml<div className={styles.hundredFilled}></div>
                </Grid>
                <Grid item xs={12} >
                    400ml<div className={styles.hundredFilled}></div>
                </Grid>
            </Grid>
         
        </Paper>
    )
}

export default TodayGoal;
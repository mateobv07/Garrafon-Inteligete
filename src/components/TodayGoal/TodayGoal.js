import React from "react";
import { Paper, Grid } from "@mui/material";
import useStyles from './styles'
const TodayGoal = ({ cantidad }) => {
    const styles = useStyles();
    
    return (
        <Paper elevation={8} className={styles.paper} sx={{ borderRadius: '15px'}}>
            <h2 >Progreso Hoy</h2>
            ({cantidad} L)
            <Grid container mt={3} alignItems="center">
                <Grid item xs={12} >
                    2800ml<div className={cantidad >= 2800 ? styles.hundredFilled : styles.hundredEmpty}></div>
                </Grid>
                <Grid item xs={12} >
                    2400ml (goal)<div className={cantidad >= 2400 ? styles.hundredFilledGoal : styles.hundredEmptyGoal}></div>
                </Grid>
                <Grid item xs={12} >
                    2000ml<div className={cantidad >= 2000 ? styles.hundredFilled : styles.hundredEmpty}></div>
                </Grid>
                <Grid item xs={12} >
                    1600ml<div className={cantidad >= 1600 ? styles.hundredFilled : styles.hundredEmpty}></div>
                </Grid>
                <Grid item xs={12} >
                    1200ml<div className={cantidad >= 1200 ? styles.hundredFilled : styles.hundredEmpty}></div>
                </Grid>
                <Grid item xs={12} >
                    800ml<div className={cantidad >= 800 ? styles.hundredFilled : styles.hundredEmpty}></div>
                </Grid>
                <Grid item xs={12} >
                    400ml<div className={cantidad >= 400 ? styles.hundredFilled : styles.hundredEmpty}></div>
                </Grid>
            </Grid>
         
        </Paper>
    )
}

export default TodayGoal;
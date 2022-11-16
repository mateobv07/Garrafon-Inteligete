import React, { useRef } from "react";
import { Typography, Grid } from "@mui/material";
import TotalWater from '../../components/TotalWater/TotalWater'
import TodayGoal from '../../components/TodayGoal/TodayGoal'
import GoalStreak from '../../components/GoalStreak/GoalStreak'

import useStyles from './styles';

const Datos = () => {
    const styles = useStyles();
    const containerRef = useRef(null);

    return (
        <div className={styles.mainContainer} ref={containerRef}>
            <Typography variant="h4">Datos </Typography>
            <Grid container spacing={2} justifyContent="center" mt={2} px={2}>
                {/* General stats container */}
                <Grid item xs={11} sm={8} md={9} lg={10} className={styles.statsContainer}>
                    <Grid item xs={12} md={6} lg={4}>
                        <TotalWater cantidad={10}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <GoalStreak cantidad={3}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TotalWater cantidad={10}/>
                    </Grid>
                </Grid>

                {/* Goal of the Day */}
                <Grid item xs={11} sm={4} md={3} lg={2}>
                    <TodayGoal cantidad={10}/>
                </Grid>

            </Grid>
        </div>
    );
}

export default Datos;
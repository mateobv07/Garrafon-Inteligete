import React, { useRef } from "react";
import { Typography, Grid } from "@mui/material";
import TotalWater from '../../components/TotalWater/TotalWater'
import TodayGoal from '../../components/TodayGoal/TodayGoal'
import GoalStreak from '../../components/GoalStreak/GoalStreak'
import PieChart from '../../components/PieChart/PieChart'
import useStyles from './styles';
import ConsumoSemana from "../../components/ConsumoSemana/ConsumoSemana";
import { useGetMyStadisticsQuery } from "../../redux/services/api"
import Loader from "../../components/Loader/loader";

const Datos = () => {
    const styles = useStyles();
    const containerRef = useRef(null);
    const { data, isFetching } = useGetMyStadisticsQuery();

    const semana = {
        'Enero': 30, 
        'Febrero':40, 
        'Marzo': 43,
        'Abril': 82,
        'Mayo': 90,
        'Junio': 50,
        'Julio': 80,
        'Septiembre': 32,
        'Octubre': 53,
        'Noviembre': 34,
        'Diciembre': 33
    }
    
    const info = {type: "garrafones", cantidades: {"Sala": 20, "Cocina": 40}}
    const info2 = {type: "botellas", cantidades: {"Deportes": 90, "Escuela": 23}}

    if(isFetching) return <Loader title="Cargando datos..." />

    return (
        <div className={styles.mainContainer} ref={containerRef}>
            <Typography variant="h4">Datos </Typography>
            <Grid container spacing={2} justifyContent="center" mt={2} px={2}>
                {/* General stats container */}
                <Grid container item xs={11} sm={8} md={9} lg={10} className={styles.statsContainer}>
                    <Grid item xs={12} md={6} lg={4}>
                        <TotalWater cantidad={data.cantidad}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <GoalStreak cantidad={data.daysAchieved}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TotalWater cantidad={data.cantidad}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <PieChart info={info}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <PieChart info={info2}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <ConsumoSemana semana={semana}/>
                    </Grid>
                    
                </Grid>

                {/* Goal of the Day */}
                <Grid item xs={11} sm={4} md={3} lg={2}>
                    <TodayGoal cantidad={data.todayTotal * 1000}/>
                </Grid>

            </Grid>
        </div>
    );
}

export default Datos;
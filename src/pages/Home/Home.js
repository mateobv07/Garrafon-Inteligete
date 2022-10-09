import React, { useRef } from "react";
import { Typography, Grid } from "@mui/material";
import useStyles from './styles'
import ConsumoHoy from "../../components/ConsumoHoy/ConsumoHoy";
import ConsumoSemana from "../../components/ConsumoSemana/ConsumoSemana";
import PromedioSemanal from "../../components/PromedioSemanal/PromedioSemanal";
import Slide from '@mui/material/Slide';


const Home = () => {
    const styles = useStyles();
    const checked = true;
    const containerRef = useRef(null);

    return (
        <div className={styles.mainContainer} ref={containerRef}>
            <Typography variant="h4">Mi Consumo</Typography>
            <Slide direction="up" in={checked} timeout={1000} container={containerRef.current}>
            <Grid container spacing={2} justifyContent="center" mt={2} px={2}>
                <Grid item xs={11} sm={5} md={4} lg={4} >
                    <ConsumoHoy/>
                </Grid>
                <Grid item xs={11} sm={5} md={4} lg={4}>
                    <PromedioSemanal/>
                </Grid>
                <Grid item xs={11} md={8} lg={8}>
                    <ConsumoSemana/>
                </Grid>
            </Grid>
            </Slide>
        </div>
    );
}

export default Home
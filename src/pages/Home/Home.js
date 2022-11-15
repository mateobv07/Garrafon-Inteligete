import React, { useRef } from "react";
import { Typography, Grid } from "@mui/material";
import useStyles from './styles'
import ConsumoHoy from "../../components/ConsumoHoy/ConsumoHoy";
import ConsumoSemana from "../../components/ConsumoSemana/ConsumoSemana";
import PromedioSemanal from "../../components/PromedioSemanal/PromedioSemanal";
import Slide from '@mui/material/Slide';
import { useGetMyWeekQuery } from "../../redux/services/api"
import Loader from "../../components/Loader/loader";

const Home = () => {
    const styles = useStyles();
    const containerRef = useRef(null);
    //const [datos, setDatos] = useState({"hoy": 0, "promedio": 0, "semana": []});
    const { data, isFetching } = useGetMyWeekQuery(); 
    
    if(isFetching) return <Loader title="Cargando datos..." />
    return (
        <div className={styles.mainContainer} ref={containerRef}>
            <Typography variant="h4">Mi Consumo</Typography>
            <Slide direction="up" in={!isFetching} timeout={1000} container={containerRef.current}>
            <Grid container spacing={2} justifyContent="center" mt={2} px={2}>
                <Grid item xs={11} sm={5} md={4} lg={4} >
                    <ConsumoHoy cantidad={data.hoy * 1000}/>
                </Grid>
                <Grid item xs={11} sm={5} md={4} lg={4}>
                    <PromedioSemanal cantidad={data.promedioSemanal * 1000}/>
                </Grid>
                <Grid item xs={11} md={8} lg={8}>
                    <ConsumoSemana semana={data.semana} />
                </Grid>
            </Grid>
            </Slide>
        </div>
    );
}

export default Home
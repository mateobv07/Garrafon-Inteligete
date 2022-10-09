import React, { useRef } from "react";
import { Typography, Grid } from "@mui/material";
import useStyles from './styles';
import Garrafon from "../../components/Garrafon/Garrafon"; 
import Slide from '@mui/material/Slide';

const Garrafones = () => {
    const styles = useStyles();
    const containerRef = useRef(null);
    const checked = true;
    const grrafones = [{name: 'Cocina', amount: 39, id: 'csd131'}, {name: 'Sala', amount: 80, id: '23131'}];

    return (
        <div className={styles.mainContainer} ref={containerRef}>
            <Typography variant="h4">Garrafones</Typography>
            <Slide direction="up" in={checked} timeout={1000} container={containerRef.current}>
                <Grid container justifyContent="center" spacing={3} mt={2} px={6}>
                    {grrafones.map((garrafon) => (
                        <Grid item xs={12} sm={6} lg={5} xl={4} key={garrafon.id}> 
                            <Garrafon name={garrafon.name} id={garrafon.id} amount={garrafon.amount} />
                        </Grid>
                    ))}
                </Grid>
            </Slide>
        </div>
    );
}

export default Garrafones;
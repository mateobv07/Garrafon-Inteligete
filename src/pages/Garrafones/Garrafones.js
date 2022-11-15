import React, { useRef, useState } from "react";
import { Grid, Fab, Paper, Typography, Dialog, TextField, Button } from "@mui/material";
import { useGetGarrafonesQuery } from "../../redux/services/api"
import Loader from "../../components/Loader/loader";

import useStyles from './styles';
import Garrafon from "../../components/Garrafon/Garrafon"; 
import Slide from '@mui/material/Slide';
import {BsPlus} from 'react-icons/bs';

const Garrafones = () => {
    const styles = useStyles();
    const containerRef = useRef(null);
    const [addGarrafonInfo, setAddGarrafonInfo ] = useState({name: "", code: ""})
    const [add, setAdd] = useState(false);
    const { data: grrafones, isFetching } = useGetGarrafonesQuery();


    if(isFetching) return <Loader title="Cargando garrafones..." />
    return (
        <div className={styles.mainContainer} ref={containerRef}>
            <Typography variant="h4">Garrafones 
             <Fab color="primary" size="small" onClick={() => setAdd(true)} aria-label="add" sx={{ ml:2 }}>
                <BsPlus size={42}/>
            </Fab>
            </Typography> 
            <Slide direction="up" in={!isFetching} timeout={1000} container={containerRef.current}>
                <Grid container justifyContent="center" spacing={3} mt={2} px={6}>
                    {grrafones.map((garrafon) => (
                        <Grid item xs={12} sm={6} lg={5} xl={4} key={garrafon.id}> 
                            <Garrafon name={garrafon.name} id={garrafon.id} amount={garrafon.cantidad} />
                        </Grid>
                    ))}
                </Grid>
            </Slide>
            <Dialog open={add} onClose={() => setAdd(false)} >
                <Paper className={styles.editName} >
                    <Typography variant="h5">Agregar</Typography>
                    <TextField 
                        sx={{ mt: 3, mx: 3 }}
                        label="nombre" 
                        variant="outlined" 
                        value={addGarrafonInfo.name}
                        onChange={(event) => setAddGarrafonInfo({...addGarrafonInfo, name: event.target.value})}
                    />

                    <TextField 
                        sx={{ mt: 3, mx:3 }}
                        label="Codigo" 
                        variant="outlined"
                        value={addGarrafonInfo.code}
                        onChange={(event) => setAddGarrafonInfo({...addGarrafonInfo, code: event.target.value})}
                    />

                    <Button variant="contained" sx={{ mx: 3, mt:3 }} onClick={() => setAdd(false)}>Agregar</Button>
                </Paper>
            </Dialog>
        </div>
       
    );
}

export default Garrafones;
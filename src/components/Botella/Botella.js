import React, { useState, useEffect } from "react";
import { Paper, Box, Typography, Dialog, TextField, Button } from "@mui/material";
import useStyles from './styles';
import {MdOutlineEdit} from 'react-icons/md';
import ImagenBotella from '../../assets/bottle.png'

const Garrafon = ({ name, amount }) => {
    const [editName, setEditName] = useState(false);
    const [garrafonInfo, setGarrafonInfo ] = useState({name: "", amount: 0})
    const styles = useStyles();

    useEffect(() => {

        setGarrafonInfo({name: name, amount: amount})
    }, [name, amount])

    return (
        <>
            <Paper elevation={8}  sx={{ borderRadius: '15px' }} >
                <Box className={styles.header} px={2}>
                    <h2>{garrafonInfo.name}</h2>
                    <MdOutlineEdit size={24} onClick={() => setEditName(true)} style={{cursor: 'pointer'}}/>
                </Box>
                <Box className={styles.content} px={2}>
                    <img src={ImagenBotella} alt="garrafon" className={styles.image}/>
                    <Typography variant="subtitle1" style={{ fontWeight: 600 }} color="#4459e8" mt={1}> Ultimo refill: 10/08/2022 </Typography>
                </Box>
            </Paper>
            <Dialog open={editName} onClose={() => setEditName(false)} >
                <Paper className={styles.editName} >
                    <TextField 
                        sx={{ mx: 3 }}
                        label="nombre" 
                        variant="outlined" 
                        value={garrafonInfo.name}
                        onChange={(event) => setGarrafonInfo({...garrafonInfo, name: event.target.value})}
                    />
                    <Button variant="contained" sx={{ mx: 3, mt:3 }} onClick={() => setEditName(false)}>Guardar</Button>
                </Paper>
            </Dialog>

        </>
        
    );
}

export default Garrafon;
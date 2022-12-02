import React, { useState, useEffect } from "react";
import { Paper, Box, Typography, Dialog, TextField, Button } from "@mui/material";
import useStyles from './styles';
import {MdOutlineEdit} from 'react-icons/md';
import ImagenGarrafon from '../../assets/garrafon.png'
import axios from 'axios';

const Garrafon = ({ id, name, amount }) => {
    const [editName, setEditName] = useState(false);
    const [garrafonInfo, setGarrafonInfo ] = useState({name: "", amount: 0})
    const styles = useStyles();

    useEffect(() => {

        setGarrafonInfo({name: name, amount: amount})
    }, [name, amount, id])

    const updateGarrafon = () => {
        axios({
            method: 'PATCH',
            url: process.env.REACT_APP_BASE_URL + 'garrafon/updateOne/',
            headers: {Authorization: "Token " + localStorage.getItem('token')},
            data: {id:id, name: garrafonInfo.name, cantidad:garrafonInfo.amount }
          })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => console.log(err))
        setEditName(false);
    }

    return (
        <>
            <Paper elevation={8}  sx={{ borderRadius: '15px' }} >
                <Box className={styles.header} px={2}>
                    <h2>{garrafonInfo.name}</h2>
                    <MdOutlineEdit size={24} onClick={() => setEditName(true)} style={{cursor: 'pointer'}}/>
                </Box>
                <Box className={styles.content} px={2}>
                    <img src={ImagenGarrafon} alt="garrafon" className={styles.image}/>
                    <Typography variant="h4" style={{ fontWeight: 600 }} color="#4459e8" mt={1}> {Math.floor(garrafonInfo.amount * 100/20)}% </Typography>
                </Box>
            </Paper>
            <Dialog open={editName} onClose={() => setEditName(false)} >
                <Paper className={styles.editName} >
                    <TextField 
                        sx={{ mx: 3, mt:6 }}
                        label="nombre" 
                        variant="outlined" 
                        value={garrafonInfo.name}
                        onChange={(event) => setGarrafonInfo({...garrafonInfo, name: event.target.value})}
                    />
                    <TextField 
                        sx={{ mx: 3, mt:3 }}
                        label="Cantidad (litros)" 
                        variant="outlined" 
                        type="number"
                        value={garrafonInfo.amount}
                        onChange={(event) => setGarrafonInfo({...garrafonInfo, amount: event.target.value})}
                    />
                    <Button variant="contained" sx={{ m:3 }} onClick={() => updateGarrafon()}>Actualizar</Button>
                </Paper>
            </Dialog>

        </>
        
    );
}

export default Garrafon;
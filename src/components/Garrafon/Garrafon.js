import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import useStyles from './styles';
import {MdOutlineEdit} from 'react-icons/md';
import ImagenGarrafon from '../../assets/garrafon.png'

const Garrafon = ({ name, amount }) => {
    const styles = useStyles();

    return (
        <Paper elevation={8}  sx={{ borderRadius: '15px' }} >
            <Box className={styles.header} px={2}>
                <h2>{name}</h2>
                <MdOutlineEdit size={24}/>
            </Box>
            <Box className={styles.content} px={2}>
                <img src={ImagenGarrafon} alt="garrafon" className={styles.image}/>
                <Typography variant="h4" style={{ fontWeight: 600 }} color="#4459e8" mt={1}> {amount}% </Typography>
            </Box>
        </Paper>
    );
}

export default Garrafon;
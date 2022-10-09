import React from "react";
import { Typography, List, ListItem, ListItemButton, ListItemIcon, Box } from "@mui/material";
import { AiOutlineHome } from 'react-icons/ai';
import { GiWaterGallon } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom';
import { MdWaterDrop } from 'react-icons/md'
import useStyles from './styles'


const SideBar = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    return (
        <Box className={styles.sideBar} color="#4459e8" sx={{ boxShadow: 14 }}> 
            <div className={styles.titleContainer} onClick={() => navigate('/')}>
                <MdWaterDrop size={37} color='#fbffff' />
                <Typography variant="h4" color='#fbffff' >Nombre</Typography>
            </div>

             <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/')} justifycontent="center">
                        <ListItemIcon >
                            <AiOutlineHome size={22} color='#fbffff'/>
                        </ListItemIcon>
                        <Typography variant="h6" color='#fbffff'>Home</Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/garrafones')}>
                        <ListItemIcon>
                            <GiWaterGallon size={22} color='#fbffff'/>
                        </ListItemIcon>
                        <Typography variant="h6" color='#fbffff'>Garrafones</Typography>
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    );
}

export default SideBar;
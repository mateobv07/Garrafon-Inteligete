import React from "react";
import { Typography, List, ListItem, ListItemButton, ListItemIcon, Box } from "@mui/material";
import { AiOutlineHome } from 'react-icons/ai';
import { GiWaterGallon } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { MdWaterDrop } from 'react-icons/md'
import { TbBottle } from 'react-icons/tb'

import useStyles from './styles'


const SideBar = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    return (
        <Box className={styles.sideBar} color="#4459e8" sx={{ boxShadow: 14 }}> 
            <div className={styles.titleContainer} onClick={() => navigate('/')}>
                <MdWaterDrop size={37} color='#fbffff' />
                <Typography variant="h4" color='#fbffff'>weDrink</Typography>
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

                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/botellas')}>
                        <ListItemIcon>
                            <TbBottle size={22} color='#fbffff'/>
                        </ListItemIcon>
                        <Typography variant="h6" color='#fbffff'>Botellas</Typography>
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    );
}

export default SideBar;
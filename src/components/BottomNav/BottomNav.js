import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction , Paper } from '@mui/material';
import { AiOutlineHome } from 'react-icons/ai';
import { GiWaterGallon } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
    const [value, setValue] = useState(1);
    const navigate = useNavigate();

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={10}>
            <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
            <BottomNavigationAction label="Garrafones" icon={<GiWaterGallon />} onClick={() => navigate('/garrafones')} />
            <BottomNavigationAction label="Home" icon={<AiOutlineHome />} onClick={() => navigate('/')}/>
            <BottomNavigationAction label="Datos" icon={<GiWaterGallon />} onClick={() => navigate('/datos')}/>
            </BottomNavigation>
        </Paper>
    );
}

export default BottomNav;
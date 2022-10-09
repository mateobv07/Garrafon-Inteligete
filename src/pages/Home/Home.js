import React from "react";
import { Typography } from "@mui/material";
import useStyles from './styles'

const Home = () => {
    const styles = useStyles();
    return (
        <div className={styles.mainContainer}>
            <Typography variant="h3">Mi Consumo</Typography>
        </div>
    );
}

export default Home
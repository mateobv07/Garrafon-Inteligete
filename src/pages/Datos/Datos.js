import React, { useRef } from "react";
import { Typography } from "@mui/material";

import useStyles from './styles';

const Datos = () => {
    const styles = useStyles();
    const containerRef = useRef(null);

    return (
        <div className={styles.mainContainer} ref={containerRef}>
            <Typography variant="h4">Datos </Typography>
        </div>
    );
}

export default Datos;
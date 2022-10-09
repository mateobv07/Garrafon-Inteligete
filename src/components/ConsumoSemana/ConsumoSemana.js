import React from "react";
import { Line } from 'react-chartjs-2';
import { Paper } from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const ConsumoSemana = ()=> {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };
    const data = {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [
          {
            data: [12, 45, 54, 43, 43, 43, 6],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.4,
            fill: true,
            
          },
        ],
      };
      return (
        <Paper elevation={8}  sx={{ borderRadius: '15px', padding: '15px'}}>
            <Line options={options} data={data} />
        </Paper>
      );
}

export default ConsumoSemana;
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
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

const ConsumoSemana = ({semana})=> {
    const data = {
        labels: Object.keys(semana),
        datasets: [
          {
            data: Object.values(semana),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension: 0.4,
            fill: true,
            label: "litros"
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
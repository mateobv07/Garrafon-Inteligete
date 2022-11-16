import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({info}) {
    
    const data = {
      labels: Object.keys(info.cantidades),
      datasets: [{
        data: Object.values(info.cantidades),
        backgroundColor: [
          'rgb(75, 192, 192)',
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    }
    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: info.type,
        },
      },
    };
    const config = {
      type: 'pie',
      data: data,
    };
    console.log('test')
    
    return (
      <Pie options={options} data={data} config={config}/>
    );
  };



export default PieChart;
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin-top: 2rem;
  background-color: rgba(26, 26, 46, 0.8);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 0 20px rgba(233, 69, 96, 0.5);
`;

const TPSChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => new Date(item.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'TPS',
        data: data.map((item) => item.tps),
        borderColor: '#14f195',
        backgroundColor: 'rgba(20, 241, 149, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Historical TPS',
        color: '#e94560',
      },
    },
    scales: {
      x: {
        ticks: { color: '#e94560' },
        grid: { color: 'rgba(233, 69, 96, 0.1)' },
      },
      y: {
        ticks: { color: '#e94560' },
        grid: { color: 'rgba(233, 69, 96, 0.1)' },
      },
    },
  };

  return (
    <ChartContainer>
      <Line data={chartData} options={options} />
    </ChartContainer>
  );
};

export default TPSChart;
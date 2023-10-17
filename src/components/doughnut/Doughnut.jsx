import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './style.css'

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const data = {
    labels: [`Basic`, 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  useEffect(() => {
    const ctx = chartRef.current;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        responsive: false,
        maintainAspectRatio:true,
        cutout: '80%',
        plugins: {
            legend: {
              display: true,
              position: 'right',
            },
          },
      },
    });

    return () => {
      // Cleanup: Destroy the chart when the component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="doughnut-chart-container">
        <div className='heading-container' >
            <div>
                <h1>Top Products</h1>
            </div>
            <div>
                <p>May-jun 2021</p>
            </div>
        </div>
        <div className='canvas-container'>
        <canvas ref={chartRef} width="350" height="300"></canvas>
    </div>
    </div>
  );
};

export default DoughnutChart;

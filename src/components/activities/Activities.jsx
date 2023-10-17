import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './style.css';

const Activities = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const dataSet1 = [30, 45, 25, 100];
    const dataSet2 = [20, 55, 45, 30];

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: 'rgba(152, 216, 158, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: dataSet1,
          },
          {
            label: 'Dataset 2',
            backgroundColor: 'rgba(238, 132, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: dataSet2,
          },
        ],
      },
      options: {
        maintainAspectRatio:false,
        scales: {
          y: {
            beginAtZero:true,
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              // Customize the tooltip label to include the value
              label: function (context) {
                return `${context.dataset.label}: ${context.parsed.y}`;
              },
            },
          },
        },
      },
    });
  }, []);

  const canvasStyle = {
    width: '100%',
  };

  return (
    <div className="activities">
      <p className='heading'>Activities</p>
      <p className='light'>May - Jun 2021 </p>
      <div className="chart-container">
        <canvas ref={chartRef} className="chart-canvas" style={canvasStyle} />
      </div>
    </div>
  );
};

export default Activities;

import React from 'react';
import { Line } from 'react-chartjs-2';
import '../screens/HomeScreen.css';

const WeatherChart = ({ data: weather }) => {


  let dataLength = weather.length;

  let dates = weather.map(day => day.dt_txt.substring(5, 10));
  let temps = weather.map(day => day.main.temp - 273.15);
  let humidities = weather.map(day => day.main.humidity);
  let pressures = weather.map(day => day.main.pressure);

  let avgTemp = temps.reduce((a, b) => a + b, 0) / dataLength;
  let avgHumidity = humidities.reduce((a, b) => a + b,0) / dataLength;
  let avgPressure = pressures.reduce((a, b) => a + b, 0) / dataLength;

  const data1 = {
    labels: dates,
    datasets: [
      {
        label: 'Temperature in C',
        data: temps,
        fill: true,
        backgroundColor: 'rgb(250, 250, 100)',
        borderColor: 'rgb(0, 150, 233,0.5)',
        borderWidth: 1,
        textColor: 'rgb(250, 250, 250)',
      },
    ],
  };

  const data3 = {
    labels: dates,
    datasets: [
      {
        label: 'Humidity %',
        data: humidities,
        fill: true,
        backgroundColor: 'rgb(250, 250, 100)',
        borderColor: 'rgb(0, 150, 233,0.5)',
        borderWidth: 1,
        textColor: 'rgb(250, 250, 250)',
      },
    ],
  };

  const data2 = {
    labels: dates,
    datasets: [
      {
        label: 'Pressure',
        data: pressures,
        fill: true,
        backgroundColor: 'rgb(250, 250, 100)',
        borderColor: 'rgb(0, 150, 233,0.5)',
        borderWidth: 1,
        textColor: 'rgb(250, 250, 250)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          color: '#FFFF'
        },
         beginAtZero: true,

      },
      x: {
        ticks: {
          color: '#FFFF'
        },
      }
    }
  }
    const [chartData, setChartData] = React.useState(data1);
  return (
    <div className="data-card section">
      <div className='header'>
        <span className='title'>Forecast for 5 day</span>
      </div>
      <div style={{ color: '#FFFFFF'}}>
        <p className='data-card__val2 btn' onClick={()=>{setChartData(data1)}}>Temperature : {avgTemp.toFixed(2)}</p>
        <p className='data-card__val2 btn' onClick={()=>{setChartData(data2)}}>Pressure : {avgPressure.toFixed(2)}</p>
        <p className='data-card__val2 btn' onClick={()=>{setChartData(data3)}}>Humidity : {avgHumidity.toFixed(0)}%</p>
      </div>
      <div>
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}

export default WeatherChart;



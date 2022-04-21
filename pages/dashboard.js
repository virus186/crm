import React from "react";
import dynamic from 'next/dynamic'
//import Chart from "react-apexcharts";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series = [44, 55, 41, 17, 15];
//const lables = [44, 55, 41, 17, 15];
const options = {
  chart: {
    width: 300,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
  dataLabels: {
    enabled: true,
    style: {
        fontSize: '12px',
      },
  },
  fill: {
    type: "gradient",
  },
  /* legend: {
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    },
  }, */
  title: {
    text: "Gradient Donut with custom Start-angle",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};


const Dashboard = () => {
  return <div>
      <div className="mixed-chart">
  <Chart
    options={options}
    series={series}
    type="donut"
    width={300}
  />
</div> 
  </div>
   
};

export default Dashboard;

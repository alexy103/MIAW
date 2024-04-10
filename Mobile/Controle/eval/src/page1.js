import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Page1 = (props) => {
  const prefixes6 = props.prefixes6;
  const prefixes7 = props.prefixes7;
  const prefixesX = props.prefixesX;

  const data = {
    labels: ["Prefixes 6", "Prefixes 7", "Autres Prefixes"],
    datasets: [
      {
        label: "# de Prefixes",
        data: [prefixes6.length, prefixes7.length, prefixesX.length],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>Affichage sous forme de barres</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Page1;

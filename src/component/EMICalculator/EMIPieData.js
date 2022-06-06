import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const EMIData2 = (props) => {
  let compoundAmount =
    props.data.amount *
    Math.pow(1 + props.data.interest / 100, props.data.tenure);

  const data = {
    labels: ["Principal Amount", "Interest to be paid"],
    datasets: [
      {
        label: "# of Votes",
        data: [props.data.amount, compoundAmount - props.data.amount],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h6>Break up of Amount</h6>
      <Pie data={data} />
    </>
  );
};

export default EMIData2;

import React from "react";

const EMIData1 = (props) => {
  let compundAmount =
    props.data.amount *
    Math.pow(1 + props.data.interest / 100, props.data.tenure);
  return (
    <>
      <h6>EMI Details</h6>
      <div className="bg-light">
        <div>
          Principal Amount = <b>{props.data.amount}</b>
        </div>
        <div>
          Interest to be paid = <b>{compundAmount - props.data.amount}</b>
        </div>
        <div>
          Amount with interest = <b>{compundAmount}</b>
        </div>
      </div>
    </>
  );
};

export default EMIData1;

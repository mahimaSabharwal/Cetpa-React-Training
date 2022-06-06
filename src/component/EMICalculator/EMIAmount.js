import React from "react";

const EMIAmount = (props) => {
  return (
    <>
      <h6>Amount to be paid</h6>
      <input
        type="text"
        className="form-control"
        onChange={props.handleClick}
        value={props.amount}
      />
    </>
  );
};

export default EMIAmount;

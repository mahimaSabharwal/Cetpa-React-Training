import React from "react";

const EMIInterest = (props) => {
  return (
    <>
      <h6>EMI Interest Percentage</h6>
      <input
        type="number"
        className="form-control"
        onChange={props.handleClick}
        value={props.interest}
      />
    </>
  );
};

export default EMIInterest;

import React from "react";

const EMITenure = (props) => {
  return (
    <>
      <h6>EMI to be paid for (in months)</h6>
      <input
        type="number"
        className="form-control"
        onChange={props.handleClick}
        value={props.tenure}
      />
    </>
  );
};

export default EMITenure;

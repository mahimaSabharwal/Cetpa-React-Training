import React, { useState } from "react";

const CurrencyConverter = () => {
  let fromArr = ["USD", "EUR", "COP"];
  let toArr = ["CAD", "BRL", "BTN"];

  const [currAmount, setCurrAmount] = useState(0);
  const [currFrom, setCurrFrom] = useState("USD");
  const [currTo, setCurrTo] = useState("CAD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleCurrencyAmount = (e) => {
    console.log("handleCurrencyAmount", e.target.value);
    let currAmountF = e.target.value;
    setCurrAmount(currAmountF);
  };

  const handleCurrencyFrom = (e) => {
    console.log("handleCurrencyFrom", e.target.value);
    console.log(e.target.value);
    let currFromF = e.target.value;
    setCurrFrom(currFromF);
  };

  const handleCurrencyTO = (e) => {
    console.log("handleCurrencyTO", e.target.value);
    console.log(e.target.value);
    let currToF = e.target.value;
    setCurrTo(currToF);
  };

  const convertCurrency = () => {
    if (currFrom === "EUR" && currTo === "BRL") {
      const convertedAmountF = currAmount * 1.35;
      setConvertedAmount(convertedAmountF);
    } else if (currFrom === "EUR" && currTo === "BTN") {
      const convertedAmountF = currAmount * 80.33;
      setConvertedAmount(convertedAmountF);
    } else if (currFrom === "COP" && currTo === "BRL") {
      const convertedAmountF = currAmount * 0.0013;
      setConvertedAmount(convertedAmountF);
    } else if (currFrom === "USD" && currTo === "CAD") {
      const convertedAmountF = currAmount * 1.3;
      setConvertedAmount(convertedAmountF);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Currency Converter</h2>
          <div className="col-md-7">
            <div>
              <label className="form-label">Amount to convert</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount"
                onChange={handleCurrencyAmount}
              />
            </div>
            <div>
              <label className="form-label">From</label>
              <select className="form-control" onChange={handleCurrencyFrom}>
                {fromArr && fromArr.map((item) => <option>{item}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label">To</label>
              <select className="form-control" onChange={handleCurrencyTO}>
                {toArr && toArr.map((item) => <option>{item}</option>)}
              </select>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-success text-center"
                onClick={convertCurrency}
              >
                Convert Currency
              </button>
            </div>
            <div>
              <label className="form-label">Result</label>
              <input
                className="form-control"
                type="text"
                value={convertedAmount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;

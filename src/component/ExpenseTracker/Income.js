import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";

const Income = () => {
  const localAppData = useContext(DataContext);
  const [incomeList, setIncomeList] = useState([]);
  const [incomeFrom, setIncomeFrom] = useState("");
  const [incomeAmount, setAmountincome] = useState("");
  const updateName = (e) => {
    setIncomeFrom(e.target.value);
  };
  const updateAmount = (e) => {
    setAmountincome(e.target.value);
  };
  const addIncome = () => {
    setIncomeList([
      ...incomeList,
      { id: "income", name: incomeFrom, amount: incomeAmount },
    ]);
    localAppData.addBalance(incomeAmount);
    setIncomeFrom("");
    setAmountincome(0);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Add Income</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              value={incomeFrom}
              className="form-control"
              onChange={updateName}
              placeholder="Enter Income Source"
            />
            <input
              type="number"
              value={incomeAmount}
              className="form-control"
              onChange={updateAmount}
              placeholder="Enter Income Amount"
            />
            <button onClick={addIncome}>Add Income</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Income over the month</h4>
            {incomeList &&
              incomeList.map((item) => (
                <div>
                  Earned <b>{item.amount}</b> from {item.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Income;

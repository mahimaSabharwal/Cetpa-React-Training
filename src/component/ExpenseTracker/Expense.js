import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataContext";

const Expense = () => {
  const localAppData = useContext(DataContext);
  const [expenseList, setExpenseList] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [amountexpense, setAmountexpense] = useState(0);
  const updateName = (e) => {
    setExpenseName(e.target.value);
  };
  const updateAmount = (e) => {
    setAmountexpense(e.target.value);
  };
  const subIncome = () => {
    setExpenseList([
      ...expenseList,
      { id: "expense", name: expenseName, amount: amountexpense },
    ]);
    localAppData.subBalance(amountexpense);
    setExpenseName("");
    setAmountexpense(0);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Add Expenses</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              value={expenseName}
              className="form-control"
              onChange={updateName}
              placeholder="Enter Expense Name"
            />
            <input
              type="number"
              className="form-control"
              value={amountexpense}
              onChange={updateAmount}
              placeholder="Enter Expense Amount"
            />
            <button onClick={subIncome}>Add Expense</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Expenses over the month</h4>
            {expenseList &&
              expenseList.map((item) => (
                <div>
                  Spent <b>{item.amount}</b> on {item.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expense;

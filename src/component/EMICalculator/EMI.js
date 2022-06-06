import React from "react";
import EMIAmount from "./EMIAmount";
import EMIInterest from "./EMIInterest";
import EMITenure from "./EMITenure";
import EMIData1 from "./EMIDetails";
import EMIData2 from "./EMIPieData";

class EMI extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 10000,
      interest: 10,
      tenure: 10,
    };
  }

  updateAmount = (e) => {
    this.setState({
      ...this.state,
      amount: e.target.value,
    });
  };

  updateInterest = (e) => {
    this.setState({
      ...this.state,
      interest: e.target.value,
    });
  };

  updateTenure = (e) => {
    this.setState({
      ...this.state,
      tenure: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>EMI Calculator</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <EMIAmount
                amount={this.state.amount}
                handleClick={this.updateAmount}
              />
              <EMIInterest
                interest={this.state.interest}
                handleClick={this.updateInterest}
              />
              <EMITenure
                tenure={this.state.tenure}
                handleClick={this.updateTenure}
              />
              <EMIData1 data={this.state} />
            </div>
            <div className="col-md-6">
              <EMIData2 data={this.state} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EMI;

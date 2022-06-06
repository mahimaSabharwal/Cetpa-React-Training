import React from "react";

class CounterChange extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      counterState: "Stable",
    };
  }

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1,
      counterState: "Increasing",
    });
  };
  decreaseCounter = () => {
    this.setState({
      count: this.state.count - 1,
      counterState: "Decreasing",
    });
  };

  render() {
    return (
      <>
        <h2>Counter Change Component</h2>
        <p>
          Counter is now {this.state.counterState}: {this.state.count}
        </p>
        <input
          type="button"
          onClick={this.increaseCounter}
          value="Increase Counter"
        />
        <input
          type="button"
          onClick={this.decreaseCounter}
          value="Decrease Counter"
        />
      </>
    );
  }
}

export default CounterChange;

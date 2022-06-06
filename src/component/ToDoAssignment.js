import React, { Component } from "react";

class ToDoAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }

  // Add HobbiesUpdate input

  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  // Add Hobbies

  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };
      const list = [...this.state.list];
      list.push(userInput);
      this.setState({
        list,
        userInput: "",
      });
    }
  }

  // Delete Todo List

  deleteToDOList(key) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== key);
    this.setState({
      list: updateList,
    });
  }

  render() {
    return (
      <>
        <div>
          <h2>ToDo List Component</h2>
          <div class="mb-3">
            <label for="todoList" class="form-label">
              List Item
            </label>
            <input
              type="text"
              class="form-control"
              id="todoList"
              placeholder="Enter List Item Here"
              value={this.state.userInput}
              onChange={(item) => this.updateInput(item.target.value)}
            />
          </div>

          <div className="cta_wrap">
            <div className="btn btn-primary" onClick={() => this.addItem()}>
              ADD Item to TODO List
            </div>
          </div>
        </div>
        <div>
          {this.state.list.map((item, index) => {
            return (
              <>
                <div className="todo_list">
                  {index + 1}- {item.value}
                </div>
                <div
                  className="cta_delete"
                  onClick={() => this.deleteToDOList(item.id)}
                >
                  Remove Item
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default ToDoAssignment;

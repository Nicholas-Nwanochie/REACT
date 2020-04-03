import React, { Component } from 'react'
import  '../App.css';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txtValue: "",
      isValid: false,
      selectValue:""
    };
  }

  handlesubmit = e => {
    e.preventDefault();
  };

  handlechange = (e) => {

let targetType = e.target.type == 'checkbox' ? e.target.checked : e.target.value;



let name = e.target.name;

console.log(name);

this.setState({
    [name]: targetType
})

  };

  render() {
    return (
      <div classname="todo-form">
        <form onSubmit={this.handlesubmit}>
          <input
            name="txtValue"
            value={this.setState.txtValue}
            type="text"
            onChange={this.handlechange}
          />
          <br></br>

          <input
            checked={this.setState.isValid}
            name="isValid"
            type="checkbox"
            onChange={this.handlechange}
          />
          <br></br>

          <select
            select={this.setState.selectValue}
            name="selectValue"
            id=""
            onChange={this.handlechange}
          >
            <option value="Texas">Texas</option>
            <option value="Georgia">Georgia</option>
            <option value="NewYork">New York</option>
          </select>
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms

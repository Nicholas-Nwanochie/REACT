import React, { Component } from "react";
import TodoList from "./components/Todo";
// import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}
export default App;

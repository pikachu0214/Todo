import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./component/list";

class App extends Component {
  constructor(props) {
    super(props);
    this.inputChanged = this.inputChanged.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.removeAllButton = this.removeAllButton.bind(this);
    this.state = { date: "", description: "", todos: [] };
  }
  componentDidMount() {
      console.log("componentDidMount used");
      //gets last state from local storage
      const json = localStorage.getItem("todos");
      //parse last state as integer value
      const todos = JSON.parse(json);
      //check if there is a list then add it
      if (todos) {
        this.setState(() => ({ todos }));
      }
  }
  componentDidUpdate() {
        const json = JSON.stringify(this.state.todos);
        //stores key to "options", json is value
        localStorage.setItem("todos", json);
    
  }
  inputChanged = event => {
    this.setState({ [event.target.name.trim()]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    event = { description: this.state.description, date: this.state.date };

    this.setState(prevState => ({ todos: prevState.todos.concat([event]) }));
  };
  deleteButton(e) {
    console.log("deleted");
    this.setState({ todos: this.state.todos.filter((todos, i) => i !== e) });
  }
  removeAllButton() {
    console.log("delete all");
    this.setState({ todos: [] });
  }
  render() {
      
    return <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            <input type="text" name="description" onChange={this.inputChanged} value={this.state.description} />
            <input type="date" name="date" onChange={this.inputChanged} value={this.state.date} />
            <input type="submit" value="Add" />
          </form>
        </div>
        <div>
          <List todos={this.state.todos} removeAllButton={this.removeAllButton} deleteButton={this.deleteButton}/>
        </div>
      </div>;
  }
}

export default App;

import React, { Component } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  addTodo = (todo) => {
    if (todo.length) {
      let todosList = [...this.state.todos, todo];
      this.setState({todos: todosList})
    }
  }
  deleteTodo = (id) => {
    let todoList = this.state.todos.filter((x, i) => id !== i )
    this.setState({todos: todoList})
  }
  render() { 
    return ( 
      <div className='center'>
      <h1 className='tc f1 blue pa2 comic'>TODO APP</h1>
      <Input addTodo={this.addTodo}/>
      <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/> 
     </div>
     );
  }
}
 
export default App;
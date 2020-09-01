import React, { Component } from 'react';
import './Input.css';

class Input extends Component{
constructor() {
    super();
    this.state = {
        todo: ''
    }
}
    handleChange = (event) => {
        this.setState({todo: event.target.value}) 
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.todo)
        this.setState({todo: ''})
    }

      render() {
           return ( 
            <form className="cf pa4-l bg-light-blue mw7 center pa4 br2-ns ba b--black-10 bn ma0 pa0" onSubmit={this.handleSubmit}>
                <input 
                className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                placeholder='Enter a todo'
                value={this.state.todo}
                type="text"
                onChange={this.handleChange}
                />
                <button 
                className="f6 f5-l btn button-reset fl pv3 tc bn bg-animate bg-black-70 grow hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" 
                type="submit"
                >Add</button>
            </form>
         );
      }
}
 
export default Input;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HeaderInput} from "./HeaderInput";
import {MainList} from "./MainList";
import {Footer} from "./Footer";

class App extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.state = {
			
			todoListItems:[]
		}
	}
	
	updateTodoLis = (text) => {
		
		const { todoListItems } = this.state
		
		let items = [...todoListItems, text]
		
		console.log(items)
	
		this.setState((prevState) => ({
			todoListItems:[...todoListItems, text]
		}))
	}
	
  render() {
		
		const { todoListItems } = this.state
		
    return (
      <div className="App">
        <HeaderInput updateTodoLis={this.updateTodoLis}/>
				<MainList todoListItems={todoListItems}/>
				<Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './HeaderInput.css'

export class HeaderInput extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.state = {
			value:''
		}
	}
	
	onKeyDown = e => {
		
		if (e.which !== 13) {
			
			return
		}
		
		const { updateTodoLis } = this.props
		
		if (updateTodoLis) {
			
			updateTodoLis(e.target.value)
		}
		
		this.setState(() => ({
			value:''
		}))
	}
	
	onChange = e => {
	
		const value = e.target.value
		
		this.setState(() => ({
			value
		}))
	}
	
	render(){
		return (
			<div>
				<input type="text" placeholder='What needs to be done?' onChange={this.onChange} value={this.state.value} className='headerInput' onKeyDown={this.onKeyDown}/>
			</div>
		)
	}
}
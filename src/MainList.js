import React, { Component } from 'react'

export class MainList extends Component {
	
	constructor(props) {
		
		super(props)
		
		const { todoListItems:listItems } = this.props
		
		this.state = {
			listItems
		}
	}
	
	render(){
		
		const { listItems } = this.state
		
		return (
			<div>
				{
					listItems.map((item, index) => {
						return (
							<div key={index}>{item}</div>
						)
					})
				}
			</div>
		)
	}
}
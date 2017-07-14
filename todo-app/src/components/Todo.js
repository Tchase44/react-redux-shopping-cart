import React,{Component} from 'react'

class Todo extends Component{
	constructor(props) {
		super(props)
		this.state={
			todoItems:[
				"Learn React",
				"Clean House",
				"Rule the World",
				"Sleep",
				"Clean Room",
				"Feed Enemies to Sharks",
				"Learn Drunken Boxing",
				"Make Bed"
			]
		}
	}

	render() {
		const todoList = this.state.todoItems.map((todo,idx)=>{
			return(
					<li key={idx}>
						{todo}
						<button onClick={ ()=>this.props.addTodo(todo) }>[add]</button>
						
					</li>
				)
		})

		return(
				<div>
					<h2>The ToDo Pool</h2>
					<ul>{todoList}</ul>
				</div>
			)
	}
}

export default Todo
//exported to List




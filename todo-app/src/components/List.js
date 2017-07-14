import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ListActions from '../actions/ListActions.js'
import Todo from './Todo.js'

// List actions has a "*" beacuse no default is declared in that filr
// it now contains 2 functions, add and remove

const List = (props)=>{
// class in React becomes a function in Redux
// props comes form the invoked function that is call when exported/imported
	let todoList = props.list.map((todo,idx)=>{
		// list comes from the bottom of page
		// as well as actions
		return(
				<li key={idx}>
					{todo}
					<button onClick={()=>{props.actions.removeFromList(idx)} }>[ remove ]</button>
				</li>
			)
	})

	return(
		<div>
			<Todo addTodo={props.actions.addToList} />
			<h3>My ToDo List</h3>
			<ul>{todoList}</ul>
		</div>
		)
}

function mapStoreStateToComponentProps(state, props) {
  return {
    list: state.list
  };
}


function mapDispatchToComponentProps(dispatch) {
  return {
    actions: bindActionCreators(ListActions, dispatch)
  }
}


export default connect(
	mapStoreStateToComponentProps,
	mapDispatchToComponentProps)(List)
// ^^^ an emediately invoked function
// it passes the List obj as a parameter
// exported to 




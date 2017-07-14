import list from './ListReducers'
import { combineReducers } from 'redux'

// our list function get imported

const rootReducer = combineReducers({
	list
//	^^^ => list: list
// list contains the return of the ListReducer Function/Method
})
export default rootReducer

//This file get exported to the Store
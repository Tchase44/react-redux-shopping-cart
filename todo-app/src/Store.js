import { createStore } from 'redux'
import rootReducer from './reducers/RootReducer'

// RootReducer get imported here
//now contains the return of our list function/method

export default (initialState)=>{
	return createStore(
			rootReducer,
			initialState,
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
}
// rootReducer conatian the return 'state' of ListReducer
// 
// idk what initailState contains as its never referenced again
// 
// 
// 
// Exported to index.js

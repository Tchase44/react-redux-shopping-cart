export default (state = [],action)=>{
	switch(action.type){
		case 'ADD_TODO':
			return [...state,action.todo]
		case 'REMOVE_TODO':
			let newList = [...state]
			newList.splice(action.item,1)
			return newList
		default:
			return state
	}
}

// this function contains our actions which get 
// exported to RootReducer
export const addToList = (todo)=>{
	console.log(`Action: ${todo} added`)
	return{
		type: 'ADD_TODO',
		todo
	}
}
/**
	Exported to List.js

	no default delcared
**/
export const removeFromList = (todo)=>{
	console.log(`Action: ${todo} removed from list`)
	return {
		type: 'REMOVE_TODO',
		todo
	}
}
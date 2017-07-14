import React,{Component} from 'react'

class Shelf extends Component {
	constructor(props){
		super(props)
		this.state={
			shelfItems:[
				"Bananas",
				"Pizza",
				"Cheetos",
				"Arugula"
			]
		}
	}

	render(){
		const shelfItems = this.state.shelfItems.map((item,idx)=>{
			return(
					<li key={idx}>
						{item}
						<button onClick={()=>this.props.addItem(item)}>[ + ]</button>
					</li>
				)
		})

		return(
				<div>
					<h2>Store Inventory</h2>
					<ul>
						{shelfItems}
					</ul>
				</div>
			)
	}
}

export default Shelf
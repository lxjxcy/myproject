export default function(state=[],action){
	switch(action.type){
		case "FILM":
			var newS=[...state]
				console.log(newS)
				newS=action.payload
				console.log(newS.length)
				return newS;
		default:
			return state;
	}

}
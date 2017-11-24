export default function(state=[],action){
	switch (action.type){
		case "SLIDER":
			var newS=[...state];
			newS=action.payload;
			return newS;
		default:
			return state;
	}
}
export const initialState = {
	basket:[],
	user: null,
};

const reducer = (state, action) => {
	console.log(action);
	switch(action.type){
		case "ADD_TO_BASKET":
			return { 
				...state, 
				basket: [...state.basket, action.item]
			};
		//Logic for adding item to basket
				// ...state,
				// dispatch([...state.basket, action.type])
		case "REMOVE_FROM_BASKET": 
		//logic for removing from basket
			return { state };
		default:
			return state;
	};
}

export default reducer;
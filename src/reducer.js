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
			//we cloned the basket
			let newBasket = [...state.basket];
			//we check to see if product exist or not
			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
			if(index >= 0){
				//item exist in basket, remove it...
				newBasket.splice(index,1);
			}
			else{
				console.log(`cant remove product (id : ${action.id}) as its not existed in basket`);
			}
			return { 
				...state, 
				basket: newBasket
			};
		default:
			return state;
	};
}

export default reducer;
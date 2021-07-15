import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating}){
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		//remove item from basket...
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id
		})
	}
	
	return(
		<div className="checkoutproduct">
			<img src={image} alt="" />
			<div className="checkoutproduct__info">
				<p className="checkoutproduct__title">{title}</p>
				<p><strong>&#x20B9;{price}</strong></p>
				<p className="checkoutproduct__ratings">
					{
						Array(rating)
						.fill()
						.map((_) => <p>💫</p>)
					}
					(<strong>{rating}</strong>)
				</p>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image}){
	const [state, dispatch] = useStateValue();
	const addToBasket = () =>{
		//Add item to basket...
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				price: price,
				rating: rating,
				image: image
			}
		})
	}
	return(
		<div className="product">
			<div className="product__details">
				{/*<p>{id}</p>*/}
				<div className="product__titlePriceRating">
					<p className="product__title">{title}</p>
					<p className="product__price"> &#x20B9; {price}</p>
					<div className="product__ratings">
						{
							Array(rating)
							.fill()
							.map((_) => (
								<p>💫</p>
							))
						}
						<p><strong>({rating})</strong></p>
					</div>
				</div>
				<img src={image} alt="" />
				<button onClick={addToBasket}>Add to Cart</button>
			</div>
		</div>
	);
}

export default Product;
import React from 'react';
import './Product.css';

function Product({id, title, price, rating, image}){
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
				<button>Add to Cart</button>
			</div>
		</div>
	);
}

export default Product;
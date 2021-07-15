import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout(){
	const [{basket}] = useStateValue();
	return(
		<div className="checkout">
			<img 
				className="checkout__ad" 
				src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" 
				alt="" 
			/>
			{
				basket?.length ===0 ? 
				(
					<div>
						<h2>Your Shopping Basket is Empty</h2>
						<p>You have no items in your basket. To by one or more items, click "Add to basket" next to the item</p>
					</div>
				) :
				(
					<div>
						<h2 className="checkout__title">Your Shopping Basket</h2>
						
						{/*List out all of the Checkout products*/}
						{
							basket?.map(item => 
								<CheckoutProduct 
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							)
						}
					</div>
				)
			}
		</div>	
	);
}

export default Checkout;
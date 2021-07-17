import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header(){ 
	const [{basket, user}] = useStateValue();
	console.log(basket);

	const login = () => {
		if(user){
			auth.signOut();
		}
	}

	return(
		<div className="header">
			{/*header__img*/}
			<Link to="/">
				<img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
			</Link>
			{/*searchbar*/}
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon"/>
			</div>
			<div className="header__nav">
				{/*1st link*/}
				<Link to={!user && "/login"} className="header__link">
					<div onClick={login} className="header__option">
						<span className="header__optionLineOne">Hello <br/> {user?.email}</span>
						<span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
					</div>	
				</Link>
				{/*2nd link*/}
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>	
				</Link>
				{/*3rd link*/}
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>	
				</Link>
				{/*4th link*/}
				<Link to="/checkout" className="header__link">
					<div className="header__optionBasket">
						{/*shopping basket icon*/}
						<ShoppingBasketIcon className="header__shoppingCart"/>	
						{/*number of items in the basket*/}
						<span className="header__BasketCount">{basket?.length}</span>
					</div>
				</Link>
			</div>
			
		</div>
	);
}

export default Header;
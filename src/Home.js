import React from 'react';
import './Home.css';
import Product from './Product';

function Home(){
	return(
		<div className="home">
			{/*banner*/}
			<img 
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
				alt="" 
			/>
			{/*Product*/}
			{/* product id, title, price, rating, image*/}
			<div className="home__firstRow">
					<Product 
					id='12341'
					title="Syska HT800 Cordless Trimmer for Men (Black)"
					price = {999}
					rating = {4}
					image="https://images-eu.ssl-images-amazon.com/images/I/615+QWNAsbL._AC_UL160_SR160,160_.jpg"
				/>
				<Product 
					id='12342'
					title=" HP X1000 Wired Mouse (Black/Grey) "
					price = {399}
					rating = {4}
					image="https://m.media-amazon.com/images/I/31N2n4tGvGL._AC_SY200_.jpg"
				/>
			</div>
			<div className="home__secondRow">
					<Product 
					id='12343'
					title="SanDisk Cruzer Blade 32GB USB Flash Drive "
					price = {399}
					rating = {4}
					image="https://images-eu.ssl-images-amazon.com/images/I/31BMAMhCDPS._SY300_SX300_QL70_FMwebp_.jpg"
				/>
				<Product 
					id='12344'
					title="OFIXO Multi-Purpose Laptop Table/Study Table/Bed Table/Foldable and Portable Wooden/Writing Desk (Wooden) "
					price = {492}
					rating = {5}
					image="https://m.media-amazon.com/images/I/41JUbD67xQS._AC_SY200_.jpg"
				/>
				<Product 
					id='12345'
					title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand(Black) "
					price = {549}
					rating = {4}
					image="https://m.media-amazon.com/images/I/51aYKwgu-GL._AC_SY200_.jpg"
				/>
			</div>
			<div className="home__thirdRow">
				<Product 
					id='12346'
					title="HP 15 (2021) Thin &amp; Light Ryzen 3-3250 Laptop, 8 GB RAM, 1TB HDD + 256GB SSD, 15.6&quot; (39.2 cms) FHD Screen, Windows 10, MS Office (15s-gr0012AU)Click to open expanded view"
					price = {41,999}
					rating = {4}
					image="https://images-eu.ssl-images-amazon.com/images/I/41mQtYQUzmL._SY300_SX300_QL70_FMwebp_.jpg"
				/>
			</div>
		</div>	
	); 
}

export default Home;
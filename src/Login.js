import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import { auth } from './firebase';
import './Login.css';

function Login(){
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = e => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
		.then((auth) => {
			history.push("/");
		})
		.catch(e => alert(e.message));
	}
	const register = e => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
		.then(auth => {
			history.push("/");
		})
		.catch(e => alert(e.message));
	}
	return(
		<div className='login'>
			<Link to="/">
				<img
					className="login__logo" 
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
					alt=""
				/>
			</Link>
			<div className="login__container">
				<form action="">
					<h1>Sign in</h1>
					<h5>E-mail</h5>
					<input type="email" onChange={event => setEmail(event.target.value)} value={email} />
					<h5>Password</h5>
					<input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
					<button onClick={login} type="submit" className="login__signInButton">Sign In</button>
				</form>
				<p>
					By signing-in you afree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice,
					our Cookies Notice and our interest-Based Ads Notice.
				</p>
				<button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
			</div>
		</div>
	);
}

export default Login;
import React from 'react';

const Navigation = (props) => {

	if (props.route === 'signin' || props.route === 'register') 
		return (
						<div className='flex justify-end h2'>
							<h1 className='f5 normal pa3 ma3 mh0 ph0 pointer' 
								onClick={() => props.routeChange('signin')}
							> Sign In </h1>
							<h1 className='f5 normal pa3 ma3 pointer'
								onClick={() => props.routeChange('register')}
							> Register </h1>
						</div>
		);
	else return (
						<div className='flex justify-end h2'>
							<h1 className='f5 normal pa3 ma3 pointer'
								onClick={() => props.routeChange('signin')}
							> Sign Out </h1>
						</div>
		);
	
}

export default Navigation;
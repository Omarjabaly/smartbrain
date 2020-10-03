import React from 'react';


const Rank = (props) => {

	return (

		<div>
			<p className='tc f5 h1 mt0'> Welcome 
			<span className='f5 b'> {props.user.name} </span>
			to 
			<span className='f5 b'> Smartbrain </span> 
			App where you can detect faces within images.. Give it a try 
			</p>
			<p className='tc f5 h1'> You are ranked <span className='f5 b'> #{props.user.count}</span> 
			</p>
		</div>

	);

}

export default Rank;

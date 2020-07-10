import React from 'react';
import Tilt from 'react-tilt';
import Brain from './Brain.png';


const Logo = () => {

	return (
		<Tilt 	className='Tilt pa3 mh4 h3' 
				options={{ max : 100 }} 
				style={{ height: 150, width: 150 }} >
					<div className="Tilt-inner">
						<img src={Brain} alt='brainImage' />
					</div>
		</Tilt>
		);

}


export default Logo;
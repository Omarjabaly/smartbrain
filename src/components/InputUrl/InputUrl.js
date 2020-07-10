import React from 'react';


const InputUrl = (props) => {

	return (

		<div className='flex justify-center'>
			<input 	id='myInput' 
					onChange={props.onInputChange}
					className='w-30' 
					type='text' 
					placeholder='insert image url' 
			/>
			<button 
				id='myBtn' 
				onClick={props.recognizeFace} 
				className='pointer'
			> detect 
			</button>
		</div>

	);

}

export default InputUrl;
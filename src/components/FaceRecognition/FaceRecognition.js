import React from 'react';

const FaceRecognition = (props) => {

	return (

		<div className='flex justify-center mv4'>
				<div style={{ position: 'relative'}}>
					<img 
						style={{ width: 470, height: 'auto' }} 
						alt='' 
						src={props.imageUrl}
						id='faceRecognitionImage' 
					/>
					<div 	className='bounding_box' 
							style={{ 
								position: 'absolute', 
								top: props.facebox.top, 
								right: props.facebox.right, 
								bottom: props.facebox.bottom, 
								left: props.facebox.left 
					 		}}>
					</div>
				</div>
		</div>

	);

}


export default FaceRecognition;

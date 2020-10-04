import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import 'tachyons';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import InputUrl from './components/InputUrl/InputUrl';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Clarifai from 'clarifai';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputUrl: '',
			imageUrl: '',
			route: 'signin',
			facebox: { },
			user: {
				id: '',
				name: '',
				email: '',
				count: '',
				joined: ''
			}
		};
	}

	render () {

		const recognizeFace = () => {
			this.setState({imageUrl: this.state.inputUrl});	
			const api = new Clarifai.App({ apiKey: '82fd10651ee34bc88e9953b18595fe19' });
			api.models.predict('e15d0f873e66047e579f90cf82c9882z', this.state.inputUrl)
			.then((response) => {
					let image = document.getElementById("faceRecognitionImage");
					let imageHeight = Number(image.height);
					let imageWidth = Number(image.width);
					let top_row = (imageHeight * response.outputs[0].data.regions[0].region_info.bounding_box.top_row);
					let right_col = (imageWidth - (imageWidth * response.outputs[0].data.regions[0].region_info.bounding_box.right_col));
					let bottom_row = (imageHeight - (imageHeight * response.outputs[0].data.regions[0].region_info.bounding_box.bottom_row));
					let left_col = (imageWidth * response.outputs[0].data.regions[0].region_info.bounding_box.left_col);
					
					return (
						console.log(imageHeight, imageWidth),
						console.log(top_row, right_col, bottom_row, left_col),
						this.setState({facebox: { 	top: top_row, 
													right: right_col, 
													bottom: bottom_row, 
													left: left_col 
												}
						}),
						fetch('http://localhost:3001/image', {
				      			method: 'PUT',
				      			headers: { 'Content-Type': 'application/json' },
				      			body: JSON.stringify({
				      				    "id": this.state.user.id
				      			})
				      	})
				      	.then(response => response.json())
				      	.then(user => {
				      		this.setState({ user: user })
				      	})
				      	.catch(console.log)


					)
			.catch(err => console.log(err))
	  		
			})
		}
		

		const onInputChange = (event) => {
			this.setState({inputUrl: event.target.value});
			
		}



		const routeChange = (route) => {
			this.setState({route: route});

		}

		const loadUser = (user) => {
			this.setState({ user: user })
		}


		  return (
			<div>
					  	
		  		<Particles 	style={{
		  						width: '100%',
							    height: '100%',
							    position: 'fixed',
							    zIndex: -1,
							    top: '0',
							    left: '0'
							}}

			        		params={{
								    "particles": {
								        "number": {
								            "value": 200
								        },
								        "size": {
								            "value": 1
								        }
								    },
								    "interactivity": {
								        "events": {
								            "onhover": {
								                "enable": true,
								                "mode": "repulse"
								                
								            }
								        }
								    }
							}}
			    />

			    <div>
					<Navigation route={this.state.route} routeChange={routeChange} />
					<Logo />
			    	{(() => {
			    		switch (this.state.route) {
			    		case 'signin': return <SignIn routeChange={routeChange} loadUser={loadUser} />;
			    		case 'register': return <Register routeChange={routeChange} />;
			    		default: return (
			    			<div>
				    		  	<Rank user={this.state.user}/>
								<InputUrl 	onInputChange={onInputChange} 
											recognizeFace={recognizeFace}
								/>
						
					    		<FaceRecognition 	
						    				imageUrl={this.state.imageUrl} 
						    				facebox={this.state.facebox}
								/>
									
							</div>	
							);
						}
					})()}
					
				</div>
			</div>
		  
		  )
		}
}

export default App;
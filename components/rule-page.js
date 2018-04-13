import React, { Component } from 'react';
import {
	View,
	Text,
	Button,
	Image
} from 'react-native';
import rulepage from '../styles/rule-page.js';
import Scissors from '../images/scissors.png';
import Paper from '../images/paper.png';

var Sound =require('react-native-sound');

const sound = new Sound('rules.mp3',null, (error) => {
	if(error){
		console.log("Can't play");
	}
});

const sound0 = new Sound('scissor_cuts_paper.mp3',null, (error) => {
			if(error){
				console.log("Can't play");
			}
		});

const sound1 = new Sound('paper_covers_rock.mp3',null, (error) => {
			if(error){
				console.log("Can't play");
			}
		});

const sound2 = new Sound('rock_crushes_lizard.mp3',null, (error) => {
	if(error){
		console.log("Can't play");
	}
});

const sound3 = new Sound('lizard_poisons_spock.mp3',null, (error) => {
	if(error){
		console.log("Can't play");
	}
});

const sound4 = new Sound('spock_smashes_scissors.mp3',null, (error) => {
	if(error){
		console.log("Can't play");
	}
});

const sound5 = new Sound('scissor_decapitates_lizard.mp3',null, (error) => {
	if(error){
		console.log("Can't play");
	}
});

const sound6 = new Sound('lizard_eats_paper.mp3',null, (error) => {
	if(error){
		console.log("Can't play");
	}
});

const sound7 = new Sound('paper_disproves_spock.mp3',null, (error) => {
	if(error){
		console.log("Can't play");
	}
});

const sound8 = new Sound('spock_vaporizes_rock.mp3',null, (error) => {
	if(error){
		console.log("Can't play");
	}
});

const sound9 = new Sound('rock_crushes_scissors.mp3',null, (error) => {
	if(error){
		console.log("Can't play");
	}
});

const sounds = [sound0,sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,sound9];

const ruleOrder = [{ 
						name: 'Scissor cuts Paper',
						sound: 'scissor_cuts_paper.mp3',
						firstImage: Scissors,
						secondImage: Paper
					 },
					 { 
						name: 'Paper covers Rock',
						sound: 'paper_covers_rock.mp3',
						firstImage: 'paper.png',
						secondImage: 'rock.png'
					 },
					 { 
						name: 'Rock crushes Lizard',
						sound: 'rock_crushes_lizard.mp3',
						firstImage: 'rock.png',
						secondImage: 'lizard.png'
					 },
					 { 
						name: 'Lizard poisons Spock',
						sound: 'lizard_poisons_spock.mp3',
						firstImage: 'lizard.png',
						secondImage: 'spock.png'
					 },
					 { 
						name: 'Spock smashes Scissors',
						firstImage: 'spock.png',
						secondImage: 'scissors.png'
					 },
					 { 
						name: 'Scissors decapitates Lizard',
						firstImage: 'scissors.png',
						secondImage: 'lizard.png'
					 },
					 { 
						name: 'Lizard eats Paper',
						firstImage: 'lizard.png',
						secondImage: 'paper.png'
					 },
					 { 
						name: 'Paper disproves Spock',
						firstImage: 'paper.png',
						secondImage: 'spock.png'
					 },
					 { 
						name: 'Spock vaporizes rock',
						firstImage: 'spock.png',
						secondImage: 'rock.png'
					 },
					 { 
						name: 'Rock crushes Scissors',
						firstImage: 'rock.png',
						secondImage: 'scissors.png'
					 }];


export default class RulePage extends Component{

	constructor() {
		super();
		this.state = {
			confused: true,
			text: null,
			firstImage: null,
			secondImage: null
		}
	}

	playSound = () => {
		sound.play((success) => {
			if(success) {
				this.setState(previousState => {
					return {
						confused: true
					}
				});
			}
		});

		
	}

	playSlowSound = () => {

			this.playRule(0);
	}

	 playRule = async (i) => {
		//console.log(data);
		
		if(i < ruleOrder.length)
		{
			var data = ruleOrder[i];

			await this.setState((previousState) => {
				return {
					text: data.name,
					firstImage: data.firstImage,
					secondImage: data.secondImage
				}
			},() => {
				sounds[i].setSpeed(0.7);
				sounds[i].play((success) => {
					if(success) {
						this.playRule(++i);
					}
				});
			});
		}
		
	}

	render = () => {
		return (
			<View style={rulepage.mainContainer}>
				<Text style={rulepage.title}> 
					THE RULES 
				</Text>
				<Text style={rulepage.description}>
					Let Sheldon explain it to you. Press Bazinga when you're ready!
				</Text>
				<View style={rulepage.btn}>
					<Button title="Bazinga!" 
							color='#D40000'
							onPress={this.playSound}> 
					</Button>
				</View>

				{this.state.confused &&
					<View>
						<Text style={rulepage.confused}>
							Confused, are you?
						</Text>
						<View style={rulepage.btn}>
							<Button title="Touch me to slow down Sheldon" 
									color='#D40000'
									onPress={this.playSlowSound}> 
							</Button>
						</View>
					
						{this.state.text && this.state.firstImage 
							&& this.state.secondImage &&
							<View>
								<Text>
									{this.state.text}
								</Text>
							</View>
						}
					</View>
				}
			</View>
		);
	}
}
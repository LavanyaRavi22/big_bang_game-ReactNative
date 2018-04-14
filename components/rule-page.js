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
import Rock from '../images/rock.png';
import Lizard from '../images/lizard.png';
import Spock from '../images/spock.png';

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
						firstImage: Paper,
						secondImage: Rock
					 },
					 { 
						name: 'Rock crushes Lizard',
						sound: 'rock_crushes_lizard.mp3',
						firstImage: Rock,
						secondImage: Lizard
					 },
					 { 
						name: 'Lizard poisons Spock',
						sound: 'lizard_poisons_spock.mp3',
						firstImage: Lizard,
						secondImage: Spock
					 },
					 { 
						name: 'Spock smashes Scissors',
						firstImage: Spock,
						secondImage: Scissors
					 },
					 { 
						name: 'Scissors decapitates Lizard',
						firstImage: Scissors,
						secondImage: Lizard
					 },
					 { 
						name: 'Lizard eats Paper',
						firstImage: Lizard,
						secondImage: Paper
					 },
					 { 
						name: 'Paper disproves Spock',
						firstImage: Paper,
						secondImage: Spock
					 },
					 { 
						name: 'Spock vaporizes rock',
						firstImage: Spock,
						secondImage: Rock
					 },
					 { 
						name: 'Rock crushes Scissors',
						firstImage: Rock,
						secondImage: Scissors
					 }];


export default class RulePage extends Component{

	constructor() {
		super();
		this.state = {
			confused: false,
			text: null,
			firstImage: null,
			secondImage: null,
			next_back_btn: false,
			order: 0
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

	showButtons = () => {
		this.setState(previousState => {
			return {
				next_back_btn: true
			}
		});
		this.playRuleOneByOne();
	}

	playRuleOneByOne = () => {
		var data = ruleOrder[this.state.order];

		this.setState(previousState => {
			return {
				text: data.name,
				firstImage: data.firstImage,
				secondImage: data.secondImage
			}
		},() => {
			sounds[this.state.order].setSpeed(0.7);
			sounds[this.state.order].play();
		});
	}

	nextRule = () => {
		if(this.state.order < ruleOrder.length-1) {
			this.setState(previousState => {
				return {
					order: previousState.order + 1
				}
			}, () => {
				sounds[this.state.order-1].release();
				this.playRuleOneByOne();
			})
		}	
	}

	previousRule = () => {
		if(this.state.order > 0) {
			this.setState(previousState => {
				return {
					order: previousState.order - 1
				}
			}, () => {
				sounds[this.state.order+1].release();
				this.playRuleOneByOne();
			})
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
					<View style={{alignItems: 'center'}}>
						<Text style={rulepage.confused}>
							Confused, are you?
						</Text>
						{!this.state.next_back_btn &&
							<View style={rulepage.btn}>
								<Button title="One by one Sheldon!" 
										color='#D40000'
										onPress={this.showButtons}> 
								</Button>
							</View>
						}

						{this.state.next_back_btn &&
							<View style={rulepage.btnVertical}>
								<Button title="Back" 
										color='#D40000'
										style={{margin: 10}}
										onPress={this.previousRule}> 
								</Button>

								<Button title="Next" 
										color='#D40000'
										style={{margin: 10}}
										onPress={this.nextRule}> 
								</Button>

							</View>
						}
					
						{this.state.text && this.state.firstImage 
							&& this.state.secondImage &&
							<View style={{marginTop:10, marginBottom:0,alignItems: 'center'}}>
								<Text style={rulepage.description}>
									{this.state.text}
								</Text>
								<View style={rulepage.ruleView} >
									<Image source={this.state.firstImage} style={rulepage.icons} />
									<Image source={this.state.secondImage} style={rulepage.icons} />
								</View>
							</View>
						}
					</View>
				}
			</View>
		);
	}
}
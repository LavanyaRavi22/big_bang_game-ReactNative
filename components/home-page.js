import React, { Component } from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';
import homepage from '../styles/home-page.js';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homepage: true
		}
	}

	displayGameScreen = () => {
		this.setState(previousState => {
			return { homepage: !previousState.homepage };
		});
	}

	render() {
		return (
			<View style={homepage.mainContainer}>
				{this.state.homepage &&
					<View style={homepage.container}>
						<Text style={homepage.gameTitle}>
							The Big 
							<Text style={homepage.bang}> 
								Bang
							</Text> 
							Game
						</Text>
						<View style={homepage.btn}>
							<Button title="Let's Play!" 
									color='#D40000'
									onPress={this.displayGameScreen}> 
							</Button>
						</View>
					</View>
				}
				{!this.state.homepage &&
					<View style={homepage.container}>
					</View>
				}
			</View>
		);
	}
}
import {
	StyleSheet
} from 'react-native';

export default StyleSheet.create({
	mainContainer: {
		backgroundColor: '#EBAF00',
		height: '100%',
		alignItems: 'center',
		flexDirection: 'column'
	},

	title: {
		color:'#D40000',
  		textShadowColor:'black',
  		textShadowOffset: {width: 1, height: 1},
  		fontSize:50,
  		fontWeight:'bold'
	},

	description: {
		color: 'black',
		fontSize:25,
		width:350,
		marginTop:30,
		alignItems: 'center'
	},

	btn: {
		width:200,
		marginTop:20
	},

	btnVertical: {
		flexDirection: 'row',
		marginTop:20
	},

	confused: {
		marginTop: 30,
		color: 'black',
		fontSize:25
	},

	icons: {
		width: '40%',
	    height: '40%',
	    resizeMode: 'contain'
	},

	ruleView: {
		marginTop: -70,
		flex: 1,
		flexDirection: 'row'
	}
});
import {
	StyleSheet
} from 'react-native';

export default StyleSheet.create({
	mainContainer: {
		backgroundColor: '#EBAF00',
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column'
	},
	container: {
		backgroundColor: '#EBAF00',
		flex: 1,
		alignItems: 'center',
		paddingTop: 100,
		flexDirection: 'column'
	},
	gameTitle: {
		textAlign:'center',
  		fontSize:40,
  		color:'black',
  		fontWeight:'bold'
	},
	bang: {
		color:'#D40000',
  		textShadowColor:'black',
  		textShadowOffset: {width: 1, height: 1},
  		fontSize:60,
  		fontWeight:'bold'
	},
	btn: {
		width:250,
		marginTop:200
	}
});


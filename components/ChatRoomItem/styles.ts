import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		// backgroundColor: '#456',
	},
	images: {
		height: 60,
		width: 60,
		borderRadius: 50,
		marginRight: 10,
	},
	badgeContainer: {
		backgroundColor: '#3872E9',
		width: 20,
		height: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: 45,
		top: 10,
	},
	badgeText: {
		color: 'white',
		fontSize: 12,
	},
	userInfoParent: {
		// backgroundColor: '#456',
		flex: 1,
		justifyContent: 'center',
	},
	userInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		// backgroundColor: '#000',
	},
	username: {
		// backgroundColor: 'black',
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 3,
	},
	userDetails: {
		color: 'grey',
		fontSize: 14,
	},
})

export default styles

import * as React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: 'https://avatars.githubusercontent.com/u/44367062?v=4',
				}}
				style={styles.images}
			/>
			<View style={styles.userInfoParent}>
				<View style={styles.userInfo}>
					<Text style={styles.username}>Krishna Raga</Text>
					<Text style={styles.userDetails}>1:22PM</Text>
				</View>
				<Text style={styles.userDetails}>Hello There!</Text>
			</View>
		</View>
	)
}

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
	userInfoParent: {
		// backgroundColor: '#456',
		flex: 1,
	},
	userInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		// backgroundColor: '#000',
	},
	username: {
		// backgroundColor: 'black',
		fontWeight: 'bold',
	},
	userDetails: {
		color: 'grey',
		fontSize: 18,
	},
})

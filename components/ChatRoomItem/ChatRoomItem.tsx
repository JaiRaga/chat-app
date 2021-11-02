import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import styles from './styles'

const ChatRoomItem = () => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: 'https://avatars.githubusercontent.com/u/44367062?v=4',
				}}
				style={styles.images}
			/>
			<View style={styles.badgeContainer}>
				<Text style={styles.badgeText}>4</Text>
			</View>
			<View style={styles.userInfoParent}>
				<View style={styles.userInfo}>
					<Text style={styles.username}>Krishna Raga</Text>
					<Text style={styles.userDetails}>1:22PM</Text>
				</View>
				<Text numberOfLines={1} style={styles.userDetails}>
					Hello There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!Hello There!Hello
					There!Hello There!Hello There!Hello There!
				</Text>
			</View>
		</View>
	)
}

export default ChatRoomItem

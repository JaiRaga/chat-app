import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import styles from './styles'

const ChatRoomItem = ({ chatRoom }) => {
	const user = chatRoom.users[0]
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: user.imageUri,
				}}
				style={styles.images}
			/>
			<View style={styles.badgeContainer}>
				<Text style={styles.badgeText}>4</Text>
			</View>
			<View style={styles.userInfoParent}>
				<View style={styles.userInfo}>
					<Text style={styles.username}>{user.name}</Text>
					<Text style={styles.userDetails}>
						{chatRoom.lastMessage.createdAt}
					</Text>
				</View>
				<Text numberOfLines={1} style={styles.userDetails}>
					{chatRoom.lastMessage.content}
				</Text>
			</View>
		</View>
	)
}

export default ChatRoomItem

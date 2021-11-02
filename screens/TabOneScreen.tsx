import * as React from 'react'
import { View, Image, Text, StyleSheet, FlatList } from 'react-native'
import ChatRoomItem from '../components/ChatRoomItem'
import chatRoomData from '../assets/dummy-data/ChatRooms'

const chatRoom1 = chatRoomData[0]
const chatRoom2 = chatRoomData[2]

export default function TabOneScreen() {
	return (
		<View style={styles.page}>
			<FlatList
				data={chatRoomData}
				renderItem={({ item: ChatRoom, index }) => (
					<ChatRoomItem chatRoom={ChatRoom} />
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		backgroundColor: 'white',
		flex: 1,
	},
})

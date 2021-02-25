import React from 'react'
import {
	View,
	Text,
	FlatList,
	StyleSheet
} from 'react-native'
import Layout from '../components/bluetooth-list-layout'
import Empty from '../containers/empty'


function BluetoothList(props) {

	const list = [
		{
			key: '1',
			name: 'item 1'
		},
		{
			key: '2',
			name: 'item 2'
		}
	]

	const renderEmpty = () => <Empty text='No device present' />

	return (
		<Layout title='TOCA devices'>
			<FlatList
				data={list}
				ListEmptyComponent={renderEmpty}
				renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
			/>
		</Layout>
	)
}

const styles = StyleSheet.create({
	item: {
		fontSize: 20,
		padding: 10,

	}
})

export default BluetoothList
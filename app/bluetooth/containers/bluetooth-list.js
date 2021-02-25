import React, { useEffect, useState } from 'react'
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	InteractionManager
} from 'react-native'
import Layout from '../components/bluetooth-list-layout'
import Empty from '../components/empty'
import Toggle from '../components/toggle'
import Subtitle from '../components/subtitle'
import Device from '../components/device'
import { BleManager } from 'react-native-ble-plx'

function BluetoothList(props) {

	const [Items, setItems] = useState([])
	const [BolEnable, setBolEnable] = useState(false)

	// const Items = [
	// 	{ key: '1', name: 'item 1' },
	// 	{ key: '2', name: 'item 2' },
	// 	{ key: '3', name: 'item 3' }
	// ]

	const renderEmpty = () => <Empty text='No device present' />
	const renderItem = ({ item }) => {
		return <Device
			{...item}
			iconLeft={require('../../icons/ttrainer.png')}
			iconRight={require('../../icons/check_circle.png')}
		/>
	}

	useEffect(() => {
		// TODO: code is WIP; not working
		async function init() {
			try {
				this.manager = new BleManager();
				this.manager.startDeviceScan(null, null, (error, device) => {
					if (error) {
						console.log("scan error ", error);
						return;
					}

					console.log("devices found ", device);
				})
				const Items = await this.manager.devices()
				console.log("Items ", items)
			} catch (err) {
				console.log("logging error", err)
			}

		}

		init();

	})

	const enableBluetooth = async () => {
		try {
			const Items = []
			console.log(Items)
			setBolEnable(true)
			setItems(Items)
		} catch (error) {
			console.log(error)
		}
	}

	const disableBluetooth = async () => {
		try {

			setBolEnable(false)
			setItems([])
		} catch (error) {
			console.log(error)
		}
	}

	const toggleBluetooth = value => {
		if (value) {
			return enableBluetooth()
		}
		disableBluetooth()
	}

	return (
		<Layout title='Bluetooth'>
			<Toggle value={BolEnable} onValueChange={toggleBluetooth} />
			<Subtitle title='TOCA devices' />
			<FlatList
				data={Items}
				ListEmptyComponent={renderEmpty}
				renderItem={renderItem}
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
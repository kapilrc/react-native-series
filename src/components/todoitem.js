import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Todoitem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

export default Todoitem

const styles = StyleSheet.create({
  item: {
    padding: 16,
    margin: 16,
    color: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
})

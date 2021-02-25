import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

function Separator(props) {
  return (
    <View
      style={[styles.separator,
      {
        borderColor: props.color ? props.color : '#eceff1'
      }
      ]}

    >

    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    borderWidth: 1,
    marginLeft: 60,
    marginRight: 25
  }
})

export default Separator
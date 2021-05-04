import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text styles={globalStyles.titleText}>About screen</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
})

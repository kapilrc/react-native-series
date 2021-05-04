import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

const ReviewDetails = ({navigation}) => {

  const handlePress = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details screen</Text>
      <Button title="Go to review screen" onPress={handlePress} />
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  
})

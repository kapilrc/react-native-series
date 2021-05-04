import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({navigation}) {
  
  console.log("you are on home screenssssssssssss!", navigation);

  const handlePress = () => {
    navigation.navigate('ReviewDetails');
    // navigation.push('ReviewDetails');
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button title="Go to review screen" onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  
})

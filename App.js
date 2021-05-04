import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Navigator from './app/routes/homeStack'
const App = () => {

  return (
    <Navigator />
    // <SafeAreaView>
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    //     <Navigator />
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

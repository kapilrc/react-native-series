import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import BluetoothList from './app/bluetooth/containers/bluetooth-list'

const App = () => {
  const [counter, setCounter] = useState(0);

  const onClickHandler = () => {
    setCounter(counter + 1)
  }

  return (
    <View style={styles.body}>
      <BluetoothList />

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 80
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
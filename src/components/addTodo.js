import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'

const AddTodo = ({placeholder, submitHandler}) => {
  const [text, setText] = useState('')

  const changeHandler = val => {
    setText(val);
  }

  return (
    <>
      <TextInput style={styles.input}
        placeholder={placeholder}
        onChangeText={changeHandler}
      />
      <Button style={styles.button} onPress={() => submitHandler(text)} title="Add" color='coral' />
    </>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa'
  },
  button: {

  }
})

import React, { useState } from 'react'
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import AddTodo from './src/components/addTodo'
import Header from './src/components/header'
import Todoitem from './src/components/todoitem'

const App = () => {

  const [todos, setTodos] = useState([
    {text: "buy coffee", key: "1"},
    {text: "create an app", key: "2"},
    {text: "take rest", key: "3"},
  ])

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = text => {

    if(text.length < 4) {
      Alert.alert('OOPS', 'Todo must be over 3 chars long',
        [
          {text: 'OK', onPress: () => (console.log('alert closed'))}
        ]
      )
      return;
    }

    let isTextExist = todos.find(todo => todo.text.toLowerCase() == text.toLowerCase())
    if(isTextExist){
      console.warn("item is already in todo list");
      return;
    }

    setTodos(prevTodos => {

      return [
        {
          text,
          key: (prevTodos.length+2).toString()
        },
        ...prevTodos
      ]
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo placeholder="new tod ..." submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <Todoitem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea'
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 10
  }
})

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import TodoBody from './components/TodoBody';
export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const getState = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');
      if (!todos) return;
      setTodos(JSON.parse(todos))
    } catch (error) {
      console.log(error)
    }
  }
  const setState = async () => {
    try {// 1. Transform data to JSON
      const stringifiedTodos = JSON.stringify(todos);
      // 2. Set Todos
      await AsyncStorage.setItem('todos', stringifiedTodos)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getState()
  }, [])


  useEffect(() => {
    setState()
  }, [todos])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <Header {...{ inputValue, setInputValue, setTodos, todos }} />
      <TodoBody todos={todos} setTodos={setTodos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222f3e',

  },
});

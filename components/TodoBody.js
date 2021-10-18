import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import TodoItem from './TodoItem'
const TodoBody = ({ todos, setTodos }) => {
    return (
        <FlatList
            style={{ paddingHorizontal: 10, marginTop: 50 }}
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} setTodos={setTodos} />}
        />
    )
}

export default TodoBody

const styles = StyleSheet.create({})

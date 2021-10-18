import React from 'react'
import { StyleSheet, Button, TextInput, View, Alert } from 'react-native'
import Todo from '../model/Todo';
import uuid from 'react-native-uuid';

const Header = ({ inputValue, setInputValue, setTodos, todos }) => {
    const handleAddNewTodo = () => {
        // 1. Validate
        const doesTodoExist = todos.some((todo) => todo.task === inputValue.trim());
        if (inputValue.trim().length === 0 || doesTodoExist) return Alert.alert('Problem', 'Input length should be greater than 0 and todo names cannot be repeated.')
        // 2. Add New Todo
        setTodos(previousState => (
            [...previousState, new Todo(inputValue, uuid.v4())]
        ));
        // 3. Reset Values
        setInputValue('');
    }
    return (
        <View style={styles.headerContainer} >
            <TextInput placeholder='Add Todo'
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                style={{ backgroundColor: 'white', minHeight: 50, width: '85%', borderRadius: 5, paddingHorizontal: 10, marginRight: 5 }} placeholderTextColor='#333' />
            <View >
                <Button title='Add' onPress={handleAddNewTodo} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

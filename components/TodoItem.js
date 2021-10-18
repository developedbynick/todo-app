import React, { useRef } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const TodoItem = ({ item, setTodos }) => {
    const translateAnim = useRef(new Animated.Value(0)).current;
    const handleDeleteTodoItem = () => {
        Animated.timing(translateAnim, {
            toValue: 100,
            duration: 600,
            useNativeDriver: false
        }).start(() => {
            const id = item.id;
            setTodos(previousState => {
                return previousState.filter((todo) => {
                    return todo.id !== id;
                })
            })
        })
    }
    const translateX = translateAnim.interpolate({
        inputRange: [0, 50, 60, 100],
        outputRange: ['0%', '50%', '60%', '100%']
    })
    return (
        <View style={styles.containerView}>
            <Animated.View style={[styles.todoItem, { left: translateX }]}>
                <Text style={styles.taskText} numberOfLines={1}>{item.task}</Text>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', minWidth: 55,
                    maxWidth: 100
                }}>
                    <TouchableOpacity onPress={handleDeleteTodoItem}>
                        <Ionicons name='ios-trash-outline' color={'#ee5253'} size={25} />
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    containerView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    todoItem: {
        width: '95%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderRadius: 5,
        paddingHorizontal: 5,
        minHeight: 40
    },
    taskText: {
        fontSize: 18,
        fontWeight: '800'
    }
})

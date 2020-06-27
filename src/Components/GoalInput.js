import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)

    };

    const addGoalHandler = () => {
        if(enteredGoal === "") {
            alert('Enter a goal')
            return
        }
        props.action(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    style={styles.input} />
                <View style={styles.buttonContainer}>
                <Button title="CANCEL"
                    color="red"
                    onPress={props.onCancel}/>
                <Button
                    title="ADD"
                    onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

export default GoalInput;

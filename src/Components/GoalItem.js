import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>
    );

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 5,
        backgroundColor: '#ccc',
        borderColor: '#000',
        borderWidth: 1,
        marginVertical: 10,
    }
})

export default GoalItem;

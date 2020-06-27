import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../Constants/Colors';


const MainButton = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={{...styles.button, ...props.style}}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary, 
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

export default MainButton;

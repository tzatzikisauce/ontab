import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default class LoginForm extends Component {
    render() {
        var menuItems = [
            ["Gin and Tonic", 6.25],
            ["Margarita", 6.50],
            ["Tequila Shot", 6],
        ];
        return (
            <View style={styles.container}>
                {/* <Text>Menu Table</Text> */}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    // input: {
    //     height: 40,
    //     width: 300,
    //     backgroundColor: "#FFF",
    //     marginBottom: 10,
    //     color: '#FFF',
    //     paddingHorizontal: 10,
    // },

    // buttonContainer: {
    //     backgroundColor: '#2980b9',
    //     paddingVertical: 15,
    // },

    // buttonText: {
    //     textAlign: 'center',
    //     color: '#FFFFFF',
    //     fontWeight: '700',
    // }
})
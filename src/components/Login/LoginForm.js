import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    StyleSheet,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';

class LoginForm extends Component{
    
    render() {
        return (

            <View style={styles.container}>
                <TextInput
                    placeholder = "username or email"
                    placeholderTextColor = "#FFF"
                    returnKeyType = "next"
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    autoCorret = {false}
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    style={styles.input}
                />

                <TextInput
                    placeholder = "password"
                    placeholderTextColor = "#FFF"
                    returnKeyType = "go"
                    secureTextEntry
                    style={styles.input}
                    ref = {(input) => this.passwordInput = input}
                />


                <Button
                  title="Login"
                  onPress={() =>
                    this.props.navigation.navigate('Home')
                  }
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    input: {
        height: 40,
        width: 300,
        backgroundColor: "#FFF",
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },

    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }
})


export default withNavigation(LoginForm);



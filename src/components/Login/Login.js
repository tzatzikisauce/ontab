import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    StyleSheet,
    View,
    KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';
import bgImage from '../../../assets/images/app_background.jpg';
import logoImage from '../../../assets/images/OnTabLogoCropped.png'

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style = { styles.container }>
                <ImageBackground style = { styles.backgroundImage } source = {bgImage}>
                    <View style={ styles.logoContainer } source = {logoImage}>
                        <Image
                            style={styles.logo}
                            source = {logoImage}
                        />
                        <Text style={styles.title}>
                            Login to OnTab below!
                        </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <LoginForm/>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3238db'
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 100
    },

    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
})

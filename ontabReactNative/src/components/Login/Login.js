import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    StyleSheet,
    View
} from 'react-native';
import bgImage from '../../../assets/images/app_background.jpg';
import logoImage from '../../../assets/images/react_logo.png'

export default class Login extends Component {
    render() {
        return (
            <View style = { styles.container }>
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

                    </View>
                </ImageBackground>
            </View>
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

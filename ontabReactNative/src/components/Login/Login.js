import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    StyleSheet,
    View
} from 'react-native';
import bgImage from '../../../assets/images/app_background.jpg';

export default class Login extends Component {
    render() {
        return (
            <View style = { styles.container }>
                <ImageBackground style = { styles.backgroundImage } source = {bgImage}>

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
    }
})

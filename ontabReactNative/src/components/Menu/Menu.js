import React, { Component } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    StyleSheet,
    View,
    KeyboardAvoidingView
} from 'react-native';
import MenuTable from './MenuTable';
import bgImage from '../../../assets/images/app_background.jpg';
import logoImage from '../../../assets/images/react_logo.png'

export default class Menu extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style = { styles.container }>
                <ImageBackground style = { styles.backgroundImage } source = {bgImage}>
                    <View style={ styles.logoContainer }>
                        <Text style={styles.title}>
                            Menu
                        </Text>
                    </View>
                    <View style={styles.menuContainer}>
                        <MenuTable/>
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
        // alignItems: 'center',
        // justifyContent: 'center'
    },

    menuContainer: {
        // alignItems: 'flex-start',
        flexGrow: 1,
        // justifyContent: 'center'
    },

    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        // opacity: 1,
        fontSize: 30,
    }
})

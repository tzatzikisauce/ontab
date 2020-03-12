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

export default class Menu extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style = { styles.container }>
                <View style = { styles.backgroundImage } >
                    <View style={ styles.logoContainer }>
                        <Text style={styles.title}>
                            Menu
                        </Text>
                    </View>
                    <View style={styles.menuContainer}>
                        <MenuTable/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1a26',
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        // opacity: 0.7
    },

    logoContainer: {
        // alignItems: 'center',
        // justifyContent: 'center'
    },

    menuContainer: {
        flexGrow: 1,
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

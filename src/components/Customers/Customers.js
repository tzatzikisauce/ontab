import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    KeyboardAvoidingView
} from 'react-native';
import CustomerTable from './CustomerTable';

export default class Customer extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style = { styles.container }>
                <View style={ styles.titleContainer }>
                    <Text style={styles.title}>
                        Customer
                    </Text>
                </View>
                <View style={styles.menuContainer}>
                    <CustomerTable/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1a26',
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    menuContainer: {
        flexGrow: 1,
        width: '100%',
    },

    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        fontSize: 30,
    }
})

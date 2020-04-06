import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView
} from 'react-native';

export default class Tab extends Component {

_closeTab = () => {
    Alert.alert(`Your current tab has been closed.`);
} 

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style = { styles.container }>
                <View style={ styles.titleContainer }>
                    <Text style={styles.title}>
                        Tab
                    </Text>
                </View>
                <View style={styles.menuContainer}>
                    
                    <TouchableOpacity onPress={() => this._closeTab()}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>CLOSE TAB</Text>
                        </View>
                    </TouchableOpacity>
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
    text: {
      fontSize: 30
    },
  
    titleContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
  
    menuContainer: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
  
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        fontSize: 30,
    },
  
    btn: { 
        width: 200, 
        height: 30, 
        backgroundColor: '#30304a',  
        borderRadius: 2, 
        color: 'white',
        justifyContent: 'center',
        padding: 20,
        margin: 5,
    },
  
    btnText: { 
        textAlign: 'center', 
        color: '#fff' 
    },
})

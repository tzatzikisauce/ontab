import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import MenuComponent from '../MenuComponent';

import { db } from './../../../config';

let menuRef = db.ref('/menu');

export default class Tab extends Component {

    state = {
        names: [],
    }

    componentDidMount() {
        menuRef.on('value', (snapshot) => {
          let data = snapshot.val();
          let names = Object.values(data);
          this.setState({ names });
        });
      }

    closeTab = () => {
        Alert.alert(`Your current tab has been closed.`);
    } 

    handleChange = (e) => {
        this.setState({
          name: e.nativeEvent.text,
        });
      };
      handleSubmit = () => {
        addItem(this.state.names);
        Alert.alert(
          'Item Added',
          'Bravo',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
      };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style = { styles.container }>
                <View style={ styles.titleContainer }>
                    <Text style={styles.title}>
                        Tab: Ric Han
                    </Text>
                </View>
                <View style={styles.menuContainer}>
                    <View style={styles.row}>
                        {this.state.names.length > 0 ? (
                        <MenuComponent items={this.state.names} />
                        ) : (
                        <Text style={styles.text}>No items</Text>
                        )}
                    </View>
                    <TouchableOpacity onPress={() => this.closeTab()}>
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
      fontSize: 18,
      padding: 20,
      color: 'white',
    },
  
    titleContainer: {
        padding: 20,
        
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
  
    menuContainer: {
        // flexGrow: 1,
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: { 
        flexDirection: 'row', 
        height: 100, 
        flexGrow: 1,
        // padding: 20,
    },
  
    title: {
        color: '#FFF',
        marginTop: 10,
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

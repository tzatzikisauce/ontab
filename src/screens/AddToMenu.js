import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

import { db } from './../../config';

let addItem = (name,price) => {
  db.ref('/menu').push({
    name: name,
    price: price,
  });
};

export default class AddToMenu extends Component {
  state = {
    name: '',
    price: '',
  };

  handleChange = (e) => {
    let n = e.nativeEvent.text.split(",")[0];
    let p = e.nativeEvent.text.split(",")[1];
    this.setState({
      name: n,
      price: p,
    });
  };
  handleSubmit = () => {

    addItem(this.state.name,this.state.price);
    Alert.alert(
      'Item Added',
      'Bravo',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add Item</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor='white'
          onPress={this.handleSubmit}
        >
            <Text style={styles.btn}>Add</Text>
        </TouchableHighlight>
      </View>
    );
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

  itemInput: {
    width: '80%',
    height: 40,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'white',
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
});
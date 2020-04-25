import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import PropTypes from 'prop-types';

export default class MenuComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  makeLists() {
      let names = [];
      let prices = [];
      this.props.items.map((item, index) => {
        names.push(item.name);
        prices.push(item.price);
      })
      Alert.alert(names.join("\n"));
  }

  render() {
    return (
    <View>
        <TouchableOpacity onPress={() => this.makeLists()}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>CLOSE TAB</Text>
            </View>
        </TouchableOpacity>
    
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemtext}>
                {item.name} - {item.price}
              </Text>
            </View>
          );
        })}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemtext: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#30304a', 
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
});

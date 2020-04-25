import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.menuContainer}>
        

        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>BAR MENU</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('AddSubscriptionView')}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>PAYMENT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Customer')}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>VIEW CUSTOMERS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>TAB</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddToMenu')}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>ADD MENU ITEM </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('List')}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>ITEMS </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1a26',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },

  titleContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuContainer: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#fff',
  },
});

export default HomeScreen;

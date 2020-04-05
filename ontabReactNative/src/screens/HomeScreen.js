import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
 homepage
    <View style = { styles.container }>
      <View style={ styles.titleContainer }>
          <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.btn}>
                  <Text style={styles.btnText}>LOGIN</Text>
              </View>
          </TouchableOpacity>
              
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <View style={styles.btn}>
                  <Text style={styles.btnText}>BAR MENU</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
              <View style={styles.btn}>
                  <Text style={styles.btnText}>TAB</Text>
              </View>
          </TouchableOpacity>
      </View>

    <View>
      <Text style={styles.text}>Hey there</Text>
      <Button
        title='Go to Components'
        onPress={() => navigation.navigate('Components')}
      ></Button>
      <Button
        title='Go to Lists'
        onPress={() => navigation.navigate('List')}
      ></Button>
      <Button
        title='Go to List ImageScreen'
        onPress={() => navigation.navigate('Image')}
      ></Button>
      <Button
        title='Go to Login'
        onPress={() => navigation.navigate('Login')}
      ></Button>
      <Button
        title='Go to Payment'
        onPress={() => navigation.navigate('AddSubscriptionView')}
      ></Button>
      <Button
        title='Go to Menu'
        onPress={() => navigation.navigate('Menu')}
      ></Button>
 master
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

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
});

export default HomeScreen;

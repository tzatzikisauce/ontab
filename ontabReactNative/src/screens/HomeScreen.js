import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
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
        title='Go to Menu'
        onPress={() => navigation.navigate('Menu')}
      ></Button>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

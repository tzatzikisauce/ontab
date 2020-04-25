import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import { withNavigation } from 'react-navigation';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='username or email'
          placeholderTextColor='black'
          returnKeyType='next'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorret={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          style={styles.input}
        />

        <TextInput
          placeholder='password'
          placeholderTextColor='black'
          returnKeyType='go'
          secureTextEntry
          style={styles.input}
          ref={(input) => (this.passwordInput = input)}
        />

        <Button
          style={styles.loginForm}
          title='Login'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  input: {
    height: 60,
    width: 500,
    backgroundColor: '#FFF',
    marginBottom: 10,
    color: 'black',
    paddingHorizontal: 10,
    fontSize: 20,
  },

  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    height: 60,
    width: 300,
    fontSize: 20,
  },

  loginForm: {
    fontSize: 30,
    height: 60,
    width: 500,
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default withNavigation(LoginForm);

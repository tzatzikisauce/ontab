import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import LoginForm from './LoginForm';
import bgImage from '../../../assets/images/spots.jpg';
import logoImage from '../../../assets/images/OnTabLogoCropped.png';

export default class Login extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={bgImage}>
        <View style={styles.container}>
          <View style={styles.logoContainer} source={logoImage}>
            <Image style={styles.logo} source={logoImage} />
          </View>
          <LoginForm style={styles.formContainer}> </LoginForm>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',

    opacity: 0.7,
  },

  logoContainer: {},

  logo: {
    width: 100,
    height: 100,
  },

  formContainer: {},
});

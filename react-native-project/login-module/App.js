import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'reactstrap';
import { BlinkApp } from './BlinkApp';
import { createStackNavigator } from 'react-navigation';
import { Login } from './Login';
import { ForgotPassword } from './ForgotPassword';
import { Register } from './Register';

const MyNavigator = createStackNavigator({
  login : {screen: Login},
  forgot : {screen: ForgotPassword},
  register : {screen: Register}
});

export default MyNavigator;
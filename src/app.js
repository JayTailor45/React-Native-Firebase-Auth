import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    Firebase.initializeApp({
      apiKey: 'AIzaSyDaZAILuie6aEotLUera0MC5s98ksvWBn4',
      authDomain: 'rn-auth-5c0ff.firebaseapp.com',
      databaseURL: 'https://rn-auth-5c0ff.firebaseio.com',
      projectId: 'rn-auth-5c0ff',
      storageBucket: 'rn-auth-5c0ff.appspot.com',
      messagingSenderId: '920760473277',
      appId: '1:920760473277:web:6664a109220cd576'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm/>
      </View>
    );
  }
}

export default App;

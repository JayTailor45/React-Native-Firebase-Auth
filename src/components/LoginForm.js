import React, { Component } from 'react';
import Firebase from 'firebase';
import { Text, StyleSheet } from 'react-native'
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component{

  state = {
    email: '',
    password: '',
    error: ''
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({error: ''})

    Firebase.auth().signInWithEmailAndPassword(email,password)
      .catch(() => {
        Firebase.auth().createUserWithEmailAndPassword(email,password)
          .catch(() => {
            this.setState({error: 'Authentication failed.'});
          })
      })
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            placeholder  = 'your@mail.com' 
            value        = {this.state.email}
            label        = 'Email'
            onChangeText = {email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
        <Input
            placeholder  = 'your password' 
            value        = {this.state.password}
            label        = 'Password'
            onChangeText = {password => this.setState({ password })}
            isPassword   = {true}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>

      </Card>
    )
  }
}

const styles = StyleSheet.create({
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
});

export default LoginForm;
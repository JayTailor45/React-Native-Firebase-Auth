import React, { Component } from 'react';
import Firebase from 'firebase';
import { Text, StyleSheet } from 'react-native'
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component{

  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({error: '', loading: true})

    Firebase.auth().signInWithEmailAndPassword(email,password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        Firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  renderButton() {
    if(this.state.loading){
      return <Spinner size='small'/>
    }
    return(
      <Button 
        onPress={this.onButtonPress.bind(this)}
      >
        Log In
      </Button>
    );
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication failed.',
      loading: false
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
          {this.renderButton()}
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
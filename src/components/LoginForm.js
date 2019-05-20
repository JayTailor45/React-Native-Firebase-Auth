import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common'

class LoginForm extends Component{

  state = {
    email: '',
    password: ''
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
        <CardSection>
          <Button>Log In</Button>
        </CardSection>

      </Card>
    )
  }
}

export default LoginForm;
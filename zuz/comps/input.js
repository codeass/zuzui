import React, { Component } from 'react';
import { TextInput } from 'react-native';

export class Input extends Component {
  constructor(props) {
    super(props);    
  }

  requestFocus(){
    this.input.focus();
  }

  render() {
    return (
      <TextInput 
        ref={ref => (this.input = ref)}
        editable={this.props.disabled ? false : true}
        secureTextEntry={this.props.password ? this.props.password: false}
        underlineColorAndroid="rgba(0,0,0,0)"
        keyboardType={this.props.keyboard ? this.props.keyboard : "default"}
        placeholder={this.props.placeholder ? this.props.placeholder : null}
        placeholderTextColor={this.props.placeholderColor ? this.props.placeholderColor : "#777777"}
        onKeyPress={this.props.onKeyUp ? this.props.onKeyUp : ()=>{}}
        {...this.props}
      />
    );
  }
}

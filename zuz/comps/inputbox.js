import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Input} from "zuz-comps/input";

export class InputBox extends Component {
  constructor(props) {
    super(props);    
  }

  requestFocus(){
    this._inputbox && this._inputbox.requestFocus();
  }

  render() {
    return (
      <View style={[
        {
            backgroundColor: "#dddddd",
            padding: 10,
            borderRadius: 3,                    
        },
        {...this.props.bstyle}
      ]}>
          <Input ref={(ref)=>{this._inputbox = ref}} {...this.props}/>
      </View>
    );
  }
}

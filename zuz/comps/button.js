import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Icon} from "zuz-comps/icon";


export class Button extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <TouchableOpacity style={
          [
            {
                backgroundColor: "#eeeeee",
                alignContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 3
            },
            {...this.props.style}
        ]}
        onPress={this.props.onClick ? this.props.onClick : () => { console.log('`onClick` Prop Missing'); }}    
    >

        <View style={{flexDirection: "row"}}>
        {this.props.icon ? <Icon size={this.props.icon.size} style={[{color: "#333333"}, {...this.props.icon.style}]} name={this.props.icon.name} type={this.props.icon.type} /> : null}
        {this.props.text ? <Text style={[{...this.props.textStyle}]}>{this.props.text || this.props.children}</Text> : null}
        </View>

        {this.props.children}
      </TouchableOpacity>
    );
  }
}

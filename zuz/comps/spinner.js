import React, { Component } from 'react';
import { ActivityIndicator} from "react-native";

export class Spinner extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <ActivityIndicator 
        {...this.props}
        color={
            this.props.color ? this.props.color : this.props.inverse ? "white" : "#666666"
        }
        size={this.props.size ? this.props.size : "large"}
      />
    );
  }
}

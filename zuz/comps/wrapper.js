import React, { Component } from 'react';
import { View, Text } from 'react-native';
import def from "zuz/vars";

export class Wrapper extends Component {

    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <View style={[
                {
                    flex: 1,
                    height: def.platform === "ios" ? def.deviceHeight : def.deviceHeight - 20,
                    backgroundColor: "white"
                },
                this.props.style
            ]}
            {...this.props}>
            {this.props.children}
            </View>
        );
    }

}

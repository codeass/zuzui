import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import AppContext from "root/AppContext";
import {Wrapper} from "zuz/ui";
import {Asset} from "expo-asset";
import * as Font from "expo-font";

export default class AppLoader extends React.Component {
  
    constructor(props) {
        super(props);    
    }

    async loadApp(context){

        //Fonts
        await Font.loadAsync({
          'font': require('./assets/fonts/OpenSans-Regular.ttf'),
          'fontb': require('./assets/fonts/OpenSans-Bold.ttf'),
        });

        //Assets
        await Asset.loadAsync([
            require('./assets/icon.png'),
            require('./assets/ui/app-icon.png')
        ]);   

        var state  = context.getState();
        //state.appLoaded = true;
        //context.setState(state); 

    }

    splash(){
        return (<Wrapper style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#f6f9fe"
          }}>
              <Image 
                style={{height: 84}}
                source={require('./assets/ui/app-icon.png')} 
                resizeMode="contain"/>
          </Wrapper>)
    }

    render() {
        var self = this;
        return (
            <AppContext.Consumer>
                {(context) => {
                    return (
                        context.getState().appLoaded === true ? 
                            <View></View>
                        : 
                        <AppContext.Consumer>
                            {(context) => {
                                self.loadApp(context);
                                return self.splash()
                            }}
                        </AppContext.Consumer>
                    )
                }}
            </AppContext.Consumer>
        );
    }

}

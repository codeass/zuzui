import AppContext from "root/AppContext";
import React from "react";
import lang from "root/langs/en";

export default class AppRoot extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    state = {        
        
        debug: true,
        appLoaded: false,
        lang: lang,        
        account: {
            mode: "signin",           
        },                
        user: {
          is: false,
          ID: -1
        },        
        consoleUri: "https://instaccount.io/console/",
        apiUri: "https://instaccount.io/console/___ajax",

        //AppSpecific        
    }

    updateState = state => {
        var self = this;
        return new Promise(resolve => {
            self.setState({ ...state });
            resolve();
        });        
    }

    render(){
        var self = this;
        return (
            <AppContext.Provider value={{
                get: (key, defaultValue) => {
                    let val = self.state[key];
                    return val === undefined ? defaultValue : val;
                },
                set: (key, value) => {
                    const state = self.state;
                    state[key] = value;
                    return self.updateState(state);
                },
                setState: (state) => {
                    return self.updateState(state);
                },
                remove: (key) => {
                    const state = self.state;
                    delete state[key];
                    return self.updateState(state);
                },
                getState: () => {
                    return Object.assign({}, self.state);
                }
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}

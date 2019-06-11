console.disableYellowBox = true;
import React from 'react';
import AppRoot from "./AppRoot";
import AppLoader from "root/AppLoader";

export default class App extends React.Component {

    render() {                  
      return (
        <AppRoot>
          <AppLoader />            
        </AppRoot>
      );
      
    }

}

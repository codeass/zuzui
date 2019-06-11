import React from 'react';
const AppContext = React.createContext({
    state: {
      appLoaded: false,      
    }
});

export default AppContext
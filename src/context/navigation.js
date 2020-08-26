import React from 'react';

const NavigationContext = React.createContext({
    activeSection: 0,
    isBottombar: false
});

export default NavigationContext;
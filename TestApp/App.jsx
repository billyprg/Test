import React from 'react';
import Navigator from './src/navigation/Navigator';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 5000);

  return <Navigator />;
};

export default App;

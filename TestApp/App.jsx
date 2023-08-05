import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import SplashScreen from './src/screens/Splash/SplashScreen';
import Navigator from './src/navigation/Navigator';

const App = () => {
  const [loading, setLoading] = useState(true);
  // Other code ...

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? <SplashScreen /> : <Navigator />}
    </>
  );
};

export default App;

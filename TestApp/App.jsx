import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import SplashScreen from './src/screens/Splash/SplashScreen';
import Navigator from './src/navigation/Navigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  const [loading, setLoading] = useState(true);
  // Other code ...

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <AuthProvider>
    <>
      {loading ? <SplashScreen /> : <Navigator />}
    </>
    </AuthProvider>
  );
};

export default App;

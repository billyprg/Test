
import React, {useEffect} from 'react';
import Navigator from './src/navigation/Navigator';


const App = () => {
  // const userData = useSelector(state => state.userEmail);
  // const splash = useSelector(state => state.splash_screen);
  // const dispatch = useDispatch(state => state.splash_screen);
  // console.log('userData ==>', userData);
  // useEffect(() => {
  //   if (userData) {
  //     dispatch({type: SPLASH_SCREEN, payload: 'red'});
  //   }
  // }, [userData]);

  return <Navigator/>;
};

export default App;

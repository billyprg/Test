
import React, {useEffect} from 'react';

import Book from './src/screens/Book';


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

  return <Book/>;
};

export default App;

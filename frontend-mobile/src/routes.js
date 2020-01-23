import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import Twitter from './pages/memberTwitter';

export default createStackNavigator(
  {
    Main,
    Twitter,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#b110b1',
      },
      headerTintColor: '#FFF',
    },
  },
);

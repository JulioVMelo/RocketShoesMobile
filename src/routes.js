import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './screens/Main';
import Cart from './screens/Cart';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Cart,
    },
    {
      initialRouteName: 'Main',
    },
  ),
);

export default Routes;

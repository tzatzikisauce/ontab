import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import Login from './src/components/Login/Login';
import Menu from './src/components/Menu/Menu';
import AddSubscriptionView from '/src/components/Payment/AddSubscriptionView'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Login: Login,
    Menu: Menu,
    AddSubscriptionView: AddSubscriptionView
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'OnTab'
    }
  }
);

export default createAppContainer(navigator);

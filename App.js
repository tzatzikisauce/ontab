import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import Login from './src/components/Login/Login';
import Menu from './src/components/Menu/Menu';
import Tab from './src/components/Tab/Tab';
import AddItem from './src/screens/AddItem';
import AddToMenu from './src/screens/AddToMenu';
import List from './src/screens/List';
import AddSubscriptionView from './src/components/Payment/AddSubscriptionView';
import Customer from './src/components/Customers/Customers'

const navigator = createStackNavigator(
  {
    Home: Home,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Login: Login,
    Menu: Menu,
    Customer: Customer,
    Tab: Tab,
    AddSubscriptionView: AddSubscriptionView,
    AddItem: AddItem,
    AddToMenu: AddToMenu,
    List: List,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'OnTab',
    },
  }
);

export default createAppContainer(navigator);

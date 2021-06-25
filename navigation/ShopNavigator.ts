import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Colors from '../constants/Colors'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import { createDrawerNavigator} from 'react-navigation-drawer'
import UserProducts from '../screens/user/UserProducts'
import EditProductScreen from '../screens/user/EditProductScreen'
import ShopHomeScreen from '../screens/shop/ShopHomeScreen'
import Ionicons from '@expo/vector-icons'

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '#444'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail:  ProductDetailsScreen,
    Cart: CartScreen,
}, {
    defaultNavigationOptions: defaultNavigationOptions
})

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
}, {
    defaultNavigationOptions: defaultNavigationOptions
})

const UsersNavigator = createStackNavigator({
    'Users Items': UserProducts,
    EditProduct: EditProductScreen
}, {
    defaultNavigationOptions: defaultNavigationOptions
})

const HomeNavigator = createStackNavigator({
    Home: ShopHomeScreen
}, {
    defaultNavigationOptions: defaultNavigationOptions
})

const ShopDrawerNavigator = createDrawerNavigator({
    Home: HomeNavigator,
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    User: UsersNavigator
}, {
    contentOptions: {
        inactiveTintColor: Colors.primary,
        activeBackgroundColor: Colors.primary,
        activeTintColor: '#222',
        inactiveBackgroundColor: '#222',
        overlayColor: '#222',
        itemsContainerStyle: {}
    },
    overlayColor: '#555',
    drawerBackgroundColor: '#222'
})

export default createAppContainer(ShopDrawerNavigator)
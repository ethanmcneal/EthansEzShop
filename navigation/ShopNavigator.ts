import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Colors from '../constants/Colors'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import { createDrawerNavigator} from 'react-navigation-drawer'

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
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

const ShopDrawerNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator
}, )

export default createAppContainer(ShopDrawerNavigator)
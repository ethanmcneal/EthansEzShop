import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import OrderCard from '../../components/OrderCard';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';


const OrdersScreen = (props :any) => {

    const orders = useSelector((state :any) => state.orders.orders);
    return(
        <FlatList style={styles.screen} data={orders} renderItem={(itemData => <OrderCard item={itemData.item}/>)}/>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#222'
    }
})

OrdersScreen.navigationOptions = (navData :any) => {
	return{
	headerTitle: "Your Orders",
	headerLeft: () => { 
		return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Menu' iconName={'ios-menu'} onPress={() => {
				navData.navigation.toggleDrawer();
			}}/>
		</HeaderButtons>
		)},
    }
}
export default OrdersScreen
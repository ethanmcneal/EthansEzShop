import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';


const UserProducts = (props :any) => {

    const userProds = useSelector((state :any) => state.products.userProducts)
    return <FlatList 
    data={userProds} 
    keyExtractor={item => item.id} 
    renderItem={(itemData) => <ProductCard 
                                itemData={itemData.item}
                                />}/>
}


UserProducts.navigationOptions = (navData :any) => {
	return{
	headerTitle: "Your Items",
	headerLeft: () => { 
		return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Menu' iconName={'ios-menu'} onPress={() => {
				navData.navigation.toggleDrawer();
			}}/>
		</HeaderButtons>
		)},
    }
}
export default UserProducts
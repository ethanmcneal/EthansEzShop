import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import * as productsActions from '../../store/actions/products'


const UserProducts = (props :any) => {

    const dispatch = useDispatch()
    const userProds = useSelector((state :any) => state.products.userProducts)
    return <FlatList 
    data={userProds} 
    keyExtractor={item => item.id} 
    renderItem={(itemData) => <ProductCard 
                                itemData={itemData.item}
                                handleEditButton={() => {
                                    props.navigation.navigate('EditProduct', 
                                                             {productId: itemData.item.id})
                                }}
                                handleDeleteButton={() => {
                                    dispatch(productsActions.deleteProduct(itemData.item.id))
                                }}
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
    headerRight: () => { 
    return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Menu' iconName={'ios-add'} onPress={() => {
            navData.navigation.navigate('EditProduct');
        }}/>
    </HeaderButtons>
    )},
    }
}
export default UserProducts
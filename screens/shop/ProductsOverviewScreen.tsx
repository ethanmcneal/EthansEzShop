import React from "react";
import { FlatList, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard";
import CustomHeaderButton from "../../components/UI/CustomHeaderButton";
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = (props: any) => {
	const products = useSelector((state: any) => state.products.availableProducts);

	const dispatch = useDispatch();
	return (
		<FlatList
			data={products}
			renderItem={(itemData) => (
				<ProductCard
					handleDetailsButton={() => {
						props.navigation.navigate("ProductDetail", {
							productId: itemData.item.id,
							productTitle: itemData.item.title,
						});
					}}
					handleAddToCartButton={() => {
						dispatch(cartActions.addToCart(itemData.item))
					}}
					itemData={itemData.item}
				/>
			)}
		/>
	);
};

ProductsOverviewScreen.navigationOptions = {
	headerTitle: "All Products",
	headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
		<Item title='Cart' iconName={'ios-cart'} onPress={() => {}}/>
	</HeaderButtons>
};

export default ProductsOverviewScreen;

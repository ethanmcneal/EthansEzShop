import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";
import * as orderActions from "../../store/actions/orders";

const CartScreen = (props: any) => {
	const cartTotalAmount = useSelector((state: any) => state.cart.totalAmount);
	const cartItems = useSelector((state: any) => {
		const transformedCartItems = [];
		for (const key in state.cart.items) {
			transformedCartItems.push({
				productId: key,
				title: state.cart.items[key].title,
				price: state.cart.items[key].price,
				quantity: state.cart.items[key].quantity,
				amount: state.cart.items[key].sum,
			});
		}
		return transformedCartItems.sort((a, b) =>
			a.productId > b.productId ? 1 : -1,
		);
	});

    const [ordered, setOrdered] = useState(false)

	const dispatch = useDispatch();

    const orderNowButton = () => {
        dispatch(orderActions.addOrder(cartItems, cartTotalAmount))
        dispatch(cartActions.clearCart())
        setOrdered(true)
    }

    let infoText;

    if(ordered && cartItems.length === 0){
        infoText = 'Order Submitted!'
    } else if (cartItems.length === 0) {
        infoText = 'No Items'
    } else {
        infoText= ''
    }
	return (
		<View style={styles.screen}>
			<View style={styles.summary}>
				<Text style={styles.summaryText}>
					Total:
					<Text style={styles.amount}>
						${cartTotalAmount.toFixed(2)}
					</Text>
				</Text>
				<Button
					title="Order Now"
					onPress={orderNowButton}
					color={Colors.accent}
					disabled={cartItems.length === 0}
				/>
			</View>
			<View>
				<FlatList
					data={cartItems}
					keyExtractor={(item) => item.productId}
					renderItem={(itemData) => (
						<CartCard
							itemData={itemData.item}
							handleDelete={() => {
								dispatch(
									cartActions.deleteFromCart(itemData.item),
								);
							}}
						/>
					)}
				/>
                <View style={styles.infoCard}>
                    <Text style={infoText === 'Order Submitted!' ? {color: 'green', fontSize: 18} : {}}>
                        {infoText}
                        </Text>
                </View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		margin: 20,
	},
	summary: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
		padding: 10,
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: "white",
	},
	summaryText: {
		fontSize: 18,
	},
	amount: {
		color: "green",
	},
    infoCard: {
        alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
		padding: 10,
    },
});
export default CartScreen;

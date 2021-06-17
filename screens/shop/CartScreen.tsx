import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart'


const CartScreen = (props :any) => {

    const cartTotalAmount = useSelector((state :any)  => state.cart.totalAmount)
    const cartItems = useSelector((state :any)  => {
        const transformedCartItems = [];
        for(const key in state.cart.items){
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].title,
                productPrice: state.cart.items[key].price,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            });

        }
        return transformedCartItems
    })

    
    const dispatch = useDispatch();
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>  
                Total:
                <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button title="Order Now" onPress={() => {}} color={Colors.accent} disabled={cartItems.length === 0}/>
            </View>
            <View>

            </View>
            <Text>{JSON.stringify(cartItems)}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        margin: 20,


    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: { 
        fontSize: 18,
    },
    amount: {
        color: 'green'
    },
})
export default CartScreen
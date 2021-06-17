import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';


const CartScreen = (props :object) => {

    const cartTotalAmount = useSelector((state :any)  => state.cart.totalAmount)

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>  
                <Text style={styles.amount}>$19.99</Text>
                </Text>
                <Button title="order Now" onPress={() => {}}/>
            </View>
            <View>
                <Text>Card items</Text>
            </View>
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
    },
    summaryText: { 
        fontSize: 18,
    },
    amount: {
        color: 'green'
    },
})
export default CartScreen
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const OrdersScreen = (props :any) => {
    return(
        <View style={styles.screen}>
            <Text>Orders Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default OrdersScreen
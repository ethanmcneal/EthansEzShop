import { Text, View } from "react-native"
import React from 'react';
const OrderCard = (props :any) => {
    return (
        <View>
            <Text>
                {JSON.stringify(props.item)}
            </Text>
        </View>

    )
}

export default OrderCard
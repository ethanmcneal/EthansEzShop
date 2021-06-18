import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import OrderCard from '../../components/OrderCard';


const OrdersScreen = (props :any) => {

    const orders = useSelector((state :any) => state.orders.orders);
    return(
        <FlatList data={orders} renderItem={(itemData => <OrderCard item={itemData.item}/>)}/>
    )
}


export default OrdersScreen
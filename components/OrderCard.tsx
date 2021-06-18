import { StyleSheet, Text, View } from "react-native"
import React from 'react';
import { formattedDate } from "../constants/formattedDate";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
const OrderCard = (props :any) => {
    let date = formattedDate(props.item.id)
    // console.log(date)
    return (
        <View style={styles.card}>
            <Text style={styles.date}>
             {date}
            </Text>

            <TouchableOpacity style={styles.cardRight}>
            <Text style={styles.itemCount}>{props.item.items.length} Items</Text>
                <Ionicons name='caret-down' size={22} color={Colors.accent}/>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
        card: {
            padding: 10,
            alignItems: 'center',
            backgroundColor: 'white',
            flexDirection: "row",
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 8,
    
        },
        cardRight: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        date: {
            fontSize: 13,
        },
        itemCount: {
            fontSize: 14,
            color: Colors.primary
        }
})

export default OrderCard
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";


const CartCard = (props: any) => {

    const {itemData} = props
	return (
        
		<View style={styles.card}>
            <View>
			<Text>
				<Text style={styles.quantity}>x{itemData.quantity} {'  '}</Text>
				<Text style={styles.title}>{itemData.title}{itemData.quantity <= 1 ? '' : "s"}</Text>
			</Text>
            </View>
			<View style={styles.itemData}>
				<Text style={styles.amount}>${itemData.amount.toFixed(2)}{'  '}</Text>
               {!props.summary && <TouchableOpacity onPress={props.handleDelete} style={styles.deleteButton}>
                    <Ionicons name={'ios-trash'} color='red' size={23}/>
                </TouchableOpacity>}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
        padding: 10,
        backgroundColor: '#444',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,

    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    title: {
        fontSize: 18,
        color: 'white',
    },
    amount: {
        color: Colors.tertiary,
        fontSize: 16,
    },
    quantity: {
        color: '#ddd',
        fontSize: 14,
    },

    deleteButton: {

    }
});
export default CartCard;

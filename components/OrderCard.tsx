import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { formattedDate } from "../constants/formattedDate";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import CartCard from "./CartCard";
const OrderCard = (props: any) => {
	const date = formattedDate(props.item.id);
	const [showDetails, setShowDetails] = useState(false);
	let items = props.item.items;
	console.log(props.item);

		return (
		<View style={styles.card}>
				<View style={styles.cardTop}>
					<Text style={styles.date}>{date}</Text>

					<TouchableOpacity
						style={styles.cardTopRight}
						onPress={() => setShowDetails(!showDetails)}
					>
						<Text style={styles.itemCount}>
							{props.item.items.length} Items
						</Text>
						<Ionicons
							name="caret-down"
							size={22}
							color={Colors.accent}
						/>
					</TouchableOpacity>
				</View>
	{showDetails && 
			<>
				<FlatList
				data={items}
				keyExtractor={(item) => item.productId}
				renderItem={(itemData) => <CartCard itemData={itemData.item} summary={true}/>}
			/>
			<View style={styles.cardTotal}>
				<Text style={styles.total}>
					Total:{" "}
					<Text style={styles.price}>${props.item.totalAmount.toFixed(2)}</Text>
				</Text>
			</View> 
			</>}
		</View>
		);
	}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#2f2f2f",
		marginHorizontal: 20,
		marginVertical: 10,
		shadowColor: Colors.primary,
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
	},
	cardTop: {
		padding: 10,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 15,
	},
	cardTopRight: {
		flexDirection: "row",
		alignItems: "center",
	},
	date: {
		fontSize: 15,
		color: 'white'
	},
	itemCount: {
		fontSize: 15,
		color: Colors.primary,
	},
	cardTotal: {
		alignItems: "flex-end",
		padding: 15,
	},
	total: {
		fontSize: 16,
		color: 'white',
	},
	price: {
		color: Colors.tertiary,
		fontSize: 16,
	},
});

export default OrderCard;

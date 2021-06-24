import React, { useEffect, useState } from "react";

import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import CustomHeaderButton from "../../components/UI/CustomHeaderButton";
import * as productActions from '../../store/actions/products'

const EditProductScreen = (props: any) => {
	const [product, setProduct] = useState({
		title: "",
		imageUrl: "https://picsum.photos/id/237/200/300",
		description: "",
		price: "",
	});

    const dispatch = useDispatch()
	const handleChange = (text: any, value: string) => {
		setProduct({ ...product, [value]: text });
	};
    
    const submitHandler = () => {
        dispatch(productActions.createProduct(product))
        console.log('dispatching...')
    }
    useEffect(() => {
        props.navigation.setParams({submit: submitHandler})
    },[product])
	return (
		<ScrollView>
			<View style={styles.form}>
				<View>
					<Text style={styles.label}>Title</Text>
					<TextInput
						style={styles.input}
						value={product.title}
						onChangeText={(text) => handleChange(text, "title")}
					/>
				</View>
				<View>
					<Text style={styles.label}>Image URL</Text>
					<TextInput
						style={styles.input}
						value={product.imageUrl}
						onChangeText={(text) => handleChange(text, "imageUrl")}
					/>
				</View>
				<View>
					<Text style={styles.label}>Price</Text>
					<TextInput
						style={styles.input}
						value={product.price}
						onChangeText={(text) => handleChange(text, "price")}
					/>
				</View>
				<View>
					<Text style={styles.label}>Description</Text>
					<TextInput
						style={styles.input}
						value={product.description}
						onChangeText={(text) =>
							handleChange(text, "description")
						}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

EditProductScreen.navigationOptions = (navData: any) => {
	return {
		headerTitle: navData.navigation.getParam("productId")
			? "Edit Product"
			: "Add Product",
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Save"
						iconName={"ios-checkmark"}
						onPress={() => {
                            navData.navigation.getParam("submit")()
                        }}
					/>
				</HeaderButtons>
			);
		},
	};
};

const styles = StyleSheet.create({
	screen: {
		width: "100%",
	},
	form: {
		margin: 20,
	},
	label: {
		marginVertical: 8,
	},
	input: {
		paddingHorizontal: 2,
		paddingVertical: 5,
		borderColor: "#ccc",
		borderBottomWidth: 1,
	},
});
export default EditProductScreen;

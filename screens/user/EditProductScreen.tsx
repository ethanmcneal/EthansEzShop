import React, { useCallback, useEffect, useState } from "react";

import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import CustomHeaderButton from "../../components/UI/CustomHeaderButton";
import * as productActions from '../../store/actions/products'

const EditProductScreen = (props: any) => {
const prodId = props.navigation.getParam('productId');
const editedProduct = useSelector((state :any) =>
    state.products.userProducts.find((prod :any) => prod.id === prodId)
  );

	const [product, setProduct] = useState({
		title: editedProduct ? editedProduct.title : "",
		imageUrl: editedProduct ? editedProduct.imageUrl : "https://picsum.photos/id/237/200/300", //for testing ease
		description:editedProduct ? editedProduct.description : "",
		price: editedProduct ? editedProduct.price.toString(10) : "",
	});

    const dispatch = useDispatch()
	const handleChange = (text: any, value: string) => {
		setProduct({ ...product, [value]: text });
	};
    
    const submitHandler = useCallback(() => {
        if(editedProduct){
            dispatch(productActions.updateProduct(prodId, product))
        } else {
        dispatch(productActions.createProduct(product))
        }
        props.navigation.goBack()
    },[product, dispatch, prodId])

    useEffect(() => {
        props.navigation.setParams({submit: submitHandler})
    },[submitHandler])


	return (
		<ScrollView style={styles.screen}>
			<View style={styles.form}>
				<View>
					<Text style={styles.label}>Title</Text>
					<TextInput
						style={styles.input}
						value={product.title}
						onChangeText={(text) => handleChange(text, "title")}
                        keyboardType='default'
                        autoCapitalize='sentences'
                        autoCorrect
                        returnKeyType='done'

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
                        keyboardType='decimal-pad'
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
                        autoCapitalize='sentences'
                        autoCorrect
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
		flex: 1,
        backgroundColor: '#222',
	},
	form: {
		margin: 20,
	},
	label: {
		marginVertical: 8,
        color: 'white',
        fontSize: 16,
	},
	input: {
		paddingHorizontal: 2,
		paddingVertical: 5,
		borderColor: "#ccc",
		borderBottomWidth: 1,
        color: 'white',
	},
});
export default EditProductScreen;

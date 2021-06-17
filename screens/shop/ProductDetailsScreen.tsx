import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Colors from '../../constants/Colors'
import * as cartActions from '../../store/actions/cart'

const ProductDetailsScreen = (props: any) => {

    const dispatch = useDispatch();

    const productId = props.navigation.getParam('productId')
    const selectedProduct = useSelector((state: any)=> state.products.availableProducts.find((prod: any) => prod.id === productId))
    return(
        <ScrollView style={styles.screen}>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
            <Button color={Colors.primary} title='Add to Cart' onPress={() => {
                    dispatch(cartActions.addToCart(selectedProduct))
            }}/>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 300.
    },
    price: {
        fontSize: 20,
        color: 'green',
        textAlign: 'center',
        marginVertical: 20,
    },
    description: {
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: 20,
    },
})

ProductDetailsScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
}
export default ProductDetailsScreen
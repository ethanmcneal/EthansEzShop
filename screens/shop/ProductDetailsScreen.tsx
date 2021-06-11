import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import {useSelector} from 'react-redux'

const ProductDetailsScreen = (props: any) => {

    const productId = props.navigation.getParam('productId')
    const selectedProduct = useSelector(state => state.products.availableProducts.find((prod: any) => prod.id === productId))
    return(
        <ScrollView>
            <Text>{selectedProduct.title}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {

    }
})

ProductDetailsScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
}
export default ProductDetailsScreen
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import {useSelector} from 'react-redux'
import ProductCard from '../../components/ProductCard'


const ProductsOverviewScreen = (props: any) => {
    const products = useSelector(state => state.products.availableProducts)
    return (
        <FlatList data={products} renderItem={itemData => <ProductCard itemData={itemData.item}/>}/>
    )
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductsOverviewScreen
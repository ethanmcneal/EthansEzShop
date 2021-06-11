import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';


const ProductCard = (props: any) => {
    const {itemData} = props
    return (
        <View style={styles.product}>
            <Image style={styles.image} source={{uri: itemData.imageUrl}}/>
            <Text style={styles.title}>{itemData.title}</Text>
            <Text style={styles.price}>${itemData.price.toFixed(2)}</Text>
            <View style={styles.actions}>
                <Button onPress={() =>{}} title='Details'/>
                <Button onPress={() =>{}} title='Add to Cart'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        alignItems: 'center',
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: '60%'
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        textAlign: 'center'
    },
    price: {
        fontSize: 14,
        marginVertical: 4,
        color: 'green'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
        flex: 1,
    },
})

export default ProductCard
import React from 'react';
import { Button, Image, View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';


const ProductCard = (props: any) => {
    const {itemData} = props
    let TouchableCmp

    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    } else {
        TouchableCmp = TouchableOpacity
    }
    return (
        <TouchableOpacity onPress={props.handleDetailsButton}>
        <View style={styles.product}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: itemData.imageUrl}}/>
            </View>
            <Text style={styles.title}>{itemData.title}</Text>
            <Text style={styles.price}>${itemData.price.toFixed(2)}</Text>
            <View style={styles.actions}>
                <Button color={Colors.primary} onPress={props.handleDetailsButton} title='Details'/>
                <Button color={Colors.primary} onPress={() =>{}} title='Add to Cart'/>
            </View>
        </View>
        </TouchableOpacity>
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
        margin: 20,
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
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
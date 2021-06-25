import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ShopHomeScreen = (props :any) => {
    return(
        <View style={styles.screen}>
            <Text>
                Welcome to Ethan's EZ Shop!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ShopHomeScreen
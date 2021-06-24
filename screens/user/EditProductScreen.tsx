import React from 'react'

import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../../components/UI/CustomHeaderButton'

const EditProductScreen = (props :any) => {

    return(
    <ScrollView>
        <View style={styles.form}>
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input}/>
        </View>
        <View>
            <Text style={styles.label}>Image URL</Text>
            <TextInput style={styles.input}/>
        </View>
        <View>
            <Text style={styles.label}>Price</Text>
            <TextInput style={styles.input}/>
        </View>
        <View>
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input}/>
        </View>
        </View>
    </ScrollView>
    )
}

EditProductScreen.navigationOptions = (navData :any) => {
    return {
        headerTitle: navData.navigation.getParam('productId') ? 'Edit Product' : 'Add Product',
        headerRight: () => { 
            return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Save' iconName={'ios-checkmark'} onPress={() => {
                    ;
                }}/>
            </HeaderButtons>
            )},
    }
}

const styles = StyleSheet.create({
    screen: {
        width: '100%'
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
        borderColor: '#ccc',
        borderBottomWidth: 1,
    },
})
export default EditProductScreen
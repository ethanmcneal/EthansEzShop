import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import Colors from '../../constants/Colors';

const ShopHomeScreen = (props :any) => {
    return(
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Welcome to Ethan's EZ Shop!
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222'
    },
    titleContainer: {
        padding: 15,
        backgroundColor: Colors.accent,
        borderRadius: 8
    },
    title: {
        fontSize: 22,
        color: Colors.primary,
    }
})

ShopHomeScreen.navigationOptions = (navData: any) => {
	return {
		headerTitle: "Ethan's EZ Shop",
		headerLeft: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Menu"
						iconName={"ios-menu"}
						onPress={() => {
							navData.navigation.toggleDrawer();
						}}
					/>
				</HeaderButtons>
			);
		}
    }
}

export default ShopHomeScreen
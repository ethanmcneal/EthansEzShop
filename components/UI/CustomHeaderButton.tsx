import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";
import Colors from "../../constants/Colors";
import { Platform } from "react-native";

const CustomHeaderButton = (props: any) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={22}
			color={Platform.OS === "android" ? "white" : Colors.primary}
		/>
	);
};

export default CustomHeaderButton;

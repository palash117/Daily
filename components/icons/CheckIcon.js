import image from "../../public/icons/check.png";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CheckIcon = () => {
    return (
        <View>
            <Image source={image} style={styles.checked}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    checked: {
        width: 45,
        height: 45,
    },
});
export default CheckIcon;

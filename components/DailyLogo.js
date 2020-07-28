import image from "../public/daily.png";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DailyLogo = () => {
    return (
        <View>
            <Image source={image} style={styles.checked}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    checked: {
        width: 140,
        height: 45,
    },
});
export default DailyLogo;

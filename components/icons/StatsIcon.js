import React from "react";
import image from "../../public/icons/stats.png";

import { StyleSheet, Text, View, Image } from "react-native";

const StatsIcon = () => {
    return (
        <View>
            <Image source={image} style={styles.checked}></Image>
        </View>
    );
};

export default StatsIcon;

const styles = StyleSheet.create({
    checked: {
        width: 45,
        height: 45,
    },
});

import image from "../../public/encouragementWords/hot_damn.png";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HotDamn = () => {
    return (
        <View>
            <Image source={image} style={styles.checked}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    checked: {
        // width: 45,
        // height: 45,
    },
});
export default HotDamn;

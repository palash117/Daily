import image from "../../public/encouragementWords/great.png";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Great = () => {
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
export default Great;

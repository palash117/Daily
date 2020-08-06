import React from "react";
import image from "../../public/icons/options.png";

import { StyleSheet, Text, View, Image } from "react-native";

const OptionsIcon = () => {
    return (
        <View>
            <Image source={image} style={styles.checked}></Image>
        </View>
    );
};

export default OptionsIcon;

const styles = StyleSheet.create({
    checked: {
        width: 45,
        height: 45,
    },
});

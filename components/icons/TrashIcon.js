import image from "../../public/icons/trash.png";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TrashIcon = () => {
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
export default TrashIcon;

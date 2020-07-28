import React from "react";
import TitleMedium from "../../public/daily.png";
import { Image, StyleSheet, Text, View } from "react-native";

function MainTitle({ style }) {
    style = style ? style : {};
    style = { ...style, ...styles.defaultStyle };
    return (
        <View style={styles.header}>
            <Image source={TitleMedium} style={{ ...style }} />
        </View>
    );
}
const styles = StyleSheet.create({
    defaultStyle: {
        transform: [{ scale: 0.7 }],
        alignSelf: "center",
    },
    header: {
        // backgroundColor: "blue",
        // margin: 0,
        // borderTopEndRadius: 5,
        // borderTopLeftRadius: 5,
    },
});

export default MainTitle;

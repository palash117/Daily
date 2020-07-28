import targetSmall from "../../public/icons/unchecked.png";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const GoalUnchecked = () => {
    return (
        <View>
            <Image source={targetSmall} style={styles.unchecked}></Image>
        </View>
    );
    // <Image source={targetSmall}></Image>
};

const styles = StyleSheet.create({
    unchecked: {
        width: 45,
        height: 45,
    },
});
export default GoalUnchecked;

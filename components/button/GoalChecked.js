import checkedTargetSmall from "../../public/checked_minimal.png";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const GoalUnchecked = () => {
    return (
        <View>
            <Image source={checkedTargetSmall} style={styles.checked}></Image>
        </View>
    );
    // <Image source={targetSmall}></Image>
};

const styles = StyleSheet.create({
    checked: {
        width: 45,
        height: 45,
    },
});
export default GoalUnchecked;

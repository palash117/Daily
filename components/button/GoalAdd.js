import checkedTargetSmall from "../../public/icons/add.png";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const GoalAdd = () => {
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
export default GoalAdd;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import StatsIcon from "../icons/StatsIcon";

const StatsButton = ({ navigation }) => {
    return (
        <View>
            <CustomButton
                ChildComponent={StatsIcon}
                onPress={() => {
                    navigation.push("");
                }}
            />
        </View>
    );
};

export default StatsButton;

const styles = StyleSheet.create({});

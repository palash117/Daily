import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HistoryEl = ({ historyItem }) => {
    return (
        <View style={styles.historyContainer}>
            <Text style={styles.historyItem}>{historyItem}</Text>
        </View>
    );
};

export default HistoryEl;

const styles = StyleSheet.create({
    historyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    historyItem: {
        textAlign: "center",
    },
});

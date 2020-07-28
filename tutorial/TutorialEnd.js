import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TutorialEnd = () => {
    return (
        <View style={styles.main}>
            <Text
                style={styles.message}
            >{`Great!\n Now you have mastered this app!\n\n Press "Finish" to start using this app`}</Text>
        </View>
    );
};

export default TutorialEnd;
const styles = StyleSheet.create({
    main: {
        height: "99.99%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    message: {
        marginTop: 20,
        textAlign: "center",
        margin: 10,
        fontSize: 15,
    },
});

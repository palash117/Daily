import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WelcomeToTutorial = () => {
    return (
        <View style={styles.main}>
            <Text
                style={styles.message}
            >{`Hi! Welcome to the Daily app tutorial\nPlease press the navigation buttons to continue!`}</Text>
        </View>
    );
};

export default WelcomeToTutorial;

const styles = StyleSheet.create({
    main: {
        height: "99.99%",
        width: "100%",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
    },
    message: {
        textAlign: "center",
    },
});

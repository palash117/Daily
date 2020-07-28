import React from "react";
import elepsis from "./Elipsis.gif";
import { StyleSheet, View, Image } from "react-native";

function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image source={elepsis} style={{ ...styles.loadingImg }} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    loadingImg: {
        width: 100,
        height: 100,
    },
});
export default SplashScreen;

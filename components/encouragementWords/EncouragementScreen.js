import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Awesome from "./Awesome";
import Great from "./Great";
import HotDamn from "./HotDamn";
import Huzzah from "./Huzzah";
import Nice from "./Nice";
import Super from "./Super";
import Superb from "./Superb";
import Wunderbar from "./Wunderbar";

const encouragements = [
    Awesome,
    Great,
    HotDamn,
    Huzzah,
    Nice,
    Super,
    Superb,
    Wunderbar,
];
const EncouragementScreen = ({ navigation }) => {
    let ChildComponent =
        encouragements[Math.floor(Math.random() * encouragements.length)];
    let incline = Math.floor(Math.random() * 60 - 30);
    setTimeout(() => {
        navigation.pop();
    }, 1000);
    return (
        <View style={styles.main}>
            <View style={{ transform: [{ rotate: `${incline}deg` }] }}>
                <ChildComponent />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        height: "99.99%",
        justifyContent: "center",
        alignItems: "center",
    },
});
export default EncouragementScreen;

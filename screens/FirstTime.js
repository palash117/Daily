import React, { useState } from "react";
import { View, Text, StyleSheet, Button, BackHandler } from "react-native";
import { connect } from "react-redux";
import { setFirstUse } from "../state/actions/firstUse";
import CustomButton from "../components/button/CustomButton";

function FirstTime({ navigation, setFirstUse }) {
    const onBackPress = () => {
        return true;
    };
    BackHandler.addEventListener("hardwareBackPress", onBackPress);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <View sytle={styles.header}>
                    <Text style={styles.headermessage}>Hey There!</Text>
                </View>
                <View>
                    <Text style={styles.centeredMessage}>
                        Thanks for downloading our app!
                    </Text>
                    <Text style={styles.mainmessage}>
                        Life can get unruly very easily. Setting and completing
                        some daily goals do help to straigten it out a little
                        bit.
                    </Text>
                    <Text style={styles.mainmessage}>
                        Hope this app helps you
                    </Text>
                </View>
                <CustomButton
                    title="Start!"
                    style={styles.buttonStyle}
                    onPress={() => {
                        setFirstUse();
                    }}
                ></CustomButton>
                <CustomButton
                    title="Start tutorial!"
                    style={styles.buttonStyle}
                    onPress={() => {
                        // navigation.pop();
                        navigation.push("Tutorial");
                        // setFirstUse();
                        // navigation.push("Home");
                    }}
                ></CustomButton>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    subContainer: {
        width: "90%",
        borderColor: "black",
        borderStyle: "dashed",
        borderWidth: 2,
        borderRadius: 5,
    },
    header: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderStyle: "dashed",
        borderWidth: 2,
        borderRadius: 5,
    },
    headermessage: {
        textAlign: "center",
        fontWeight: "bold",
        margin: 10,
    },
    centeredMessage: {
        textAlign: "center",
    },
    mainmessage: {
        textAlign: "center",
        marginTop: 10,
        padding: 10,
    },
    buttonStyle: {
        backgroundColor: "#05B2DC",
    },
});

export default connect(null, { setFirstUse })(FirstTime);

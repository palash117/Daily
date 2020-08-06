import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import SplashScreen from "./SplashScreen";
import { connect } from "react-redux";
import { checkFirstUse } from "../state/actions/firstUse";
import { View, Text, StyleSheet } from "react-native";
import FirstTime from "../screens/FirstTime";
import HomePage from "../screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DailyGoal from "./dailyGoal/DailyGoal";
import DailyLogo from "./DailyLogo";
import { loadGoals } from "../state/actions/goals";
const Stack = createStackNavigator();
function LandingPage({ checkFirstUse, firstUse, navigation, loadGoals }) {
    const { isFirstTime, loading } = firstUse ? firstUse : {};
    useEffect(() => {
        checkFirstUse();
        loadGoals();
    }, []);
    if (!loading && isFirstTime) {
        console.log("navigating to firstTime page");
        navigation.push("FirstVisit");
    } else if (!loading && !isFirstTime) {
        console.log("navigating to Home page");
        navigation.push("Home");
    } else {
        console.log("staying here");
    }
    return (
        <View style={styles.main}>
            <DailyLogo />
            <SplashScreen></SplashScreen>
            {!loading && !isFirstTime && navigation.push("Home")}
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: "99.99%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        // justifyContent: "space-evenly",
    },
});
const mapRedusStateToProps = (reduxState) => ({
    firstUse: reduxState.firstUse,
});
export default connect(mapRedusStateToProps, { checkFirstUse, loadGoals })(
    LandingPage
);

import React, { Component, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { loadGoals } from "../state/actions/goals";
import { View, Text, StyleSheet, BackHandler, Button } from "react-native";
import SplashScreen from "../components/SplashScreen";
import NoGoals from "../components/NoGoals";
import DailyGoalList from "../components/dailyGoal/DailyGoalList";
import CustomButton from "../components/button/CustomButton";
import GoalAdd from "../components/button/GoalAdd";
import StatsIcon from "../components/icons/StatsIcon";
import MainTitle from "../components/header/MainTitle";
import EditIcon from "../components/icons/EditIcon";

const HomePage = ({ goalData, loadGoals, navigation }) => {
    const { loading, goals } = goalData ? goalData : {};
    if (loading) {
        return (
            <View style={styles.main}>
                <SplashScreen></SplashScreen>
            </View>
        );
    }
    const onBackPress = () => {
        return true;
    };
    BackHandler.addEventListener("hardwareBackPress", onBackPress);
    return (
        <View style={styles.main}>
            {goals.length == 0 ? (
                <NoGoals navigation={navigation}></NoGoals>
            ) : (
                <View style={styles.sub}>
                    <DailyGoalList
                        dailyGoalList={goals}
                        navigation={navigation}
                        style={styles.list}
                    ></DailyGoalList>
                    <CustomButton
                        title={"Add goal"}
                        onPress={() => {
                            navigation.navigate("AddGoal");
                        }}
                        ChildComponent={GoalAdd}
                        style={styles.addGoal}
                    ></CustomButton>
                    <CustomButton
                        title={"Stats"}
                        onPress={() => {
                            navigation.navigate("Stats");
                        }}
                        ChildComponent={StatsIcon}
                        style={styles.stats}
                    ></CustomButton>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        height: "99.99%",
    },
    sub: { height: "99.99%" },
    list: {
        height: "90%",
    },
    addGoal: {
        position: "absolute",
        width: 60,
        height: 60,
        backgroundColor: null,
        // top: 0,
        bottom: 50,
        right: 20,
    },

    stats: {
        position: "absolute",
        width: 60,
        height: 60,
        backgroundColor: null,
        // top: 0,
        bottom: 50,
        left: 30,
    },
    setting: {
        position: "absolute",
        backgroundColor: null,
        top: 0,
    },
    header: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
});
const mapStateToProps = (state) => ({ goalData: state.goals });

const mapDispatchToProps = { loadGoals };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

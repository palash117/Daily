import React, { Component, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { loadGoals } from "../state/actions/goals";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import SplashScreen from "../components/SplashScreen";
import NoGoals from "../components/NoGoals";
import DailyGoalList from "../components/dailyGoal/DailyGoalList";
import CustomButton from "../components/button/CustomButton";
import GoalAdd from "../components/button/GoalAdd";

const HomePage = ({ goalData, loadGoals, navigation }) => {
    // useEffect(() => {
    //     loadGoals();
    // }, [loadGoals]);
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
});
const mapStateToProps = (state) => ({ goalData: state.goals });

const mapDispatchToProps = { loadGoals };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

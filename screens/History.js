import React, { Component, useEffect } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchHistoryForGoal, clearHistory } from "../state/actions/history";
import SplashScreen from "../components/SplashScreen";
import { ScrollView } from "react-native-gesture-handler";
import goals from "../state/reducers/goals";
import CustomButton from "../components/button/CustomButton";
import BackIcon from "../components/icons/BackIcon";
import HistoryEl from "../components/history/HistoryEl";

export const History = ({
    fetchHistoryForGoal,
    clearHistory,
    history,
    currentGoal,
    navigation,
}) => {
    useEffect(() => {
        fetchHistoryForGoal(currentGoal.id);
        return () => {
            clearHistory();
        };
    }, [fetchHistoryForGoal]);
    if (
        !history.history ||
        !history.history[currentGoal.id] ||
        history.history.length == 0
    ) {
        return (
            <View>
                <SplashScreen></SplashScreen>
                <CustomButton
                    ChildComponent={BackIcon}
                    onPress={() => {
                        navigation.pop();
                    }}
                ></CustomButton>
            </View>
        );
    }
    return (
        <View>
            <CustomButton
                ChildComponent={BackIcon}
                onPress={() => {
                    navigation.pop();
                }}
            ></CustomButton>
            <ScrollView>
                {history.history[currentGoal.id].map((h) => (
                    <HistoryEl key={h} historyItem={h}></HistoryEl>
                ))}
            </ScrollView>
        </View>
    );
};

const mapStateToProps = (state) => ({
    history: state.history,
    currentGoal: state.goals.currentGoal,
});

const mapDispatchToProps = {
    fetchHistoryForGoal,
    clearHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);

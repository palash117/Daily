import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import DailyGoal from "../components/dailyGoal/DailyGoal";
import EditIcon from "../components/icons/EditIcon";
import CheckIcon from "../components/icons/CheckIcon";
import TrashIcon from "../components/icons/TrashIcon";
import BackIcon from "../components/icons/BackIcon";
import CustomButton from "../components/button/CustomButton";
import { deleteGoal } from "../state/actions/goals";

const GoalOptions = ({ currentGoal, deleteGoal, editGoal, navigation }) => {
    return (
        <View style={styles.main}>
            <Text style={styles.goalLabel}>Goal</Text>
            <Text style={styles.goal}>{currentGoal.goalStr}</Text>
            <View style={styles.options}>
                <CustomButton
                    ChildComponent={EditIcon}
                    onPress={() => {
                        navigation.navigate("EditGoal");
                    }}
                ></CustomButton>
                <CustomButton
                    ChildComponent={TrashIcon}
                    onPress={() => {
                        deleteGoal(currentGoal.id);
                        navigation.pop();
                    }}
                ></CustomButton>
                <CustomButton
                    ChildComponent={BackIcon}
                    onPress={() => {
                        navigation.pop();
                    }}
                ></CustomButton>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    main: {
        height: "99.99%",
        borderWidth: 1,
        flexDirection: "column",
    },
    goalLabel: {
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        fontSize: 18,
    },
    goal: {
        padding: 10,
        fontSize: 18,
        textAlign: "center",
    },
    options: {
        position: "absolute",
        // height: "90%",
        width: "100%",
        bottom: 50,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-around",
        // paddingBottom: 50,
    },
    optionsForGaol: {
        flexDirection: "row",
    },
});
const mapStateToProps = (state) => ({ currentGoal: state.goals.currentGoal });

const mapDispatchToProps = { deleteGoal };

export default connect(mapStateToProps, mapDispatchToProps)(GoalOptions);

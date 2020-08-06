import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, Alert } from "react-native";
import DailyGoal from "../components/dailyGoal/DailyGoal";
import EditIcon from "../components/icons/EditIcon";
import OptionsIcon from "../components/icons/OptionsIcon";
import TrashIcon from "../components/icons/TrashIcon";
import BackIcon from "../components/icons/BackIcon";
import CustomButton from "../components/button/CustomButton";
import GoalUnchecked from "../components/button/GoalUnchecked";
import GoalChecked from "../components/button/GoalChecked";
import { deleteGoal, checkYesterdayGoal } from "../state/actions/goals";
import { checkGoalMarkedForYesterday } from "../state/actions/history";

const GoalOptions = ({
    checkGoalMarkedForYesterday,
    clearHistory,
    currentGoal,
    deleteGoal,
    editGoal,
    navigation,
    checkYesterdayGoal,
}) => {
    useEffect(() => {
        checkGoalMarkedForYesterday(currentGoal.id);
    }, [checkGoalMarkedForYesterday]);
    const [showCriticalOptions, setshowCriticalOptions] = useState(false);
    const [markedForYesterday, setmarkedForYesterday] = useState(false);
    useEffect(() => {
        setmarkedForYesterday(currentGoal.isMarkedForYesterday);
    }, [currentGoal.isMarkedForYesterday]);
    const check = () => {
        if (markedForYesterday) {
            return;
        }
        checkYesterdayGoal(currentGoal.id, true);
        setmarkedForYesterday(true);
    };
    const unCheck = () => {
        if (!markedForYesterday) {
            return;
        }
        checkYesterdayGoal(currentGoal.id, false);
        setmarkedForYesterday(false);
    };

    return (
        <View style={styles.main}>
            <Text style={styles.goalLabel}>Goal</Text>

            <Text style={styles.goal}>{currentGoal.goalStr}</Text>
            <Text style={styles.goal}>
                Added on :
                {new Date(currentGoal.goalAddedDate).toLocaleDateString()}
            </Text>
            <View style={styles.goalContainer}>
                <CustomButton
                    ChildComponent={
                        markedForYesterday ? GoalChecked : GoalUnchecked
                    }
                    style={styles.button}
                    onPress={check}
                    onLongPress={unCheck}
                ></CustomButton>
                <Text style={styles.message}>{"Mark for yesterday?"}</Text>
            </View>
            <View style={styles.options}>
                <View style={styles.basicOptions}>
                    <CustomButton
                        ChildComponent={OptionsIcon}
                        onPress={() => {
                            setshowCriticalOptions(!showCriticalOptions);
                        }}
                        onLongPress={() => {
                            navigation.navigate("History");
                        }}
                    ></CustomButton>
                    <CustomButton
                        ChildComponent={BackIcon}
                        onPress={() => {
                            navigation.pop();
                        }}
                    ></CustomButton>
                </View>
                {showCriticalOptions && (
                    <View style={styles.criticalOptions}>
                        <CustomButton
                            ChildComponent={EditIcon}
                            onPress={() => {
                                navigation.navigate("EditGoal");
                            }}
                        ></CustomButton>
                        <CustomButton
                            ChildComponent={TrashIcon}
                            onPress={() => {
                                Alert.alert(
                                    "Delete goal?",
                                    "Are you sure you want to delete this goal?",
                                    [
                                        {
                                            text: "Delete",
                                            onPress: () => {
                                                deleteGoal(currentGoal.id);
                                                navigation.pop();
                                            },
                                        },
                                    ]
                                );
                            }}
                        ></CustomButton>
                    </View>
                )}
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
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-around",
        // paddingBottom: 50,
    },
    optionsForGaol: {
        flexDirection: "row",
    },
    criticalOptions: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    basicOptions: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        // width: "20%",
        backgroundColor: null,
        // marginRight: 10,
    },
    message: {
        width: 200,
        textAlign: "center",
        fontSize: 18,
        // padding: 10,
        // paddingRight: 30,
        // backgroundColor: "red",
    },
    goalContainer: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
});
const mapStateToProps = (state) => ({
    currentGoal: state.goals.currentGoal,
    history: state.history,
});

const mapDispatchToProps = {
    deleteGoal,
    checkGoalMarkedForYesterday,
    checkYesterdayGoal,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalOptions);

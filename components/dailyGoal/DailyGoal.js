import React, { useState } from "react";
import { StyleSheet, Text, View, Vibration } from "react-native";
import { connect } from "react-redux";
import CustomButton from "../button/CustomButton";
import GoalUnchecked from "../button/GoalUnchecked";
import GoalChecked from "../button/GoalChecked";
import { checkGoal } from "../../state/actions/goals";

const DailyGoal = ({
    goal,
    checkGoal,
    navigation,
    updateGoalList,
    dummy,
    dummyPress,
}) => {
    const [state, setstate] = useState(goal);
    let message = state.goalStr;
    let check = () => {
        if (state.completed) {
            return;
        }
        setstate({ ...state, completed: true });
        checkGoal(goal.id);
        updateGoalList(state);
        navigation.push("Encourage");
    };
    let unCheck = () => {
        setstate({ ...state, completed: false });
        checkGoal(goal.id, false);
        updateGoalList(state);
    };
    // tutorial code
    if (dummy) {
        check = () => {
            setstate({ ...state, completed: true });
        };
        unCheck = () => {
            setstate({ ...state, completed: false });
        };
    }
    if (dummyPress) {
        check = dummyPress;
        unCheck = dummyPress;
    }
    // tutorial code over
    return (
        <View style={styles.goalContainer}>
            <CustomButton
                ChildComponent={state.completed ? GoalChecked : GoalUnchecked}
                style={styles.button}
                onPress={check}
                onLongPress={unCheck}
            ></CustomButton>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

export default connect(null, { checkGoal })(DailyGoal);

const styles = StyleSheet.create({
    button: {
        // width: "20%",
        backgroundColor: null,
        // marginRight: 10,
    },
    message: {
        width: 200,
        // padding: 10,
        // paddingRight: 30,
        // backgroundColor: "red",
    },
    goalContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        // paddingLeft: "10%",
        marginVertical: 10,
        // backgroundColor: "blue",
    },
});

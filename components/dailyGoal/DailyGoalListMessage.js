import React from "react";
import { View, Text } from "react-native";

const DailyGoalListMessage = ({ goals, style }) => {
    console.log("dailyGoalmessge rendered");
    let completed = goals
        .filter((g) => g.completed)
        .map((g) => 1)
        .reduce((a, b) => a + b, 0);
    let message = "";
    if (completed == 0) {
        message =
            "You have yet to complete a goal today,\n Come on! Bring your A game!";
    } else if (completed < goals.length) {
        message = `Hmm, ${completed} out of ${goals.length} completed, carry on!`;
    } else {
        message = "Nice!\n You have completed all of your daily goals today!";
    }
    return <Text style={style}>{message}</Text>;
};

export default DailyGoalListMessage;

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DailyGoal from "./DailyGoal";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import CustomButton from "../button/CustomButton";
import { setCurrentGoal } from "../../state/actions/goals";
import DailyGoalListMessage from "./DailyGoalListMessage";

const DailyGoalList = ({ dailyGoalList, navigation, setCurrentGoal }) => {
    // const [goalsState, setstate] = useState(dailyGoalList);
    let goalsState = dailyGoalList;
    const updateGoalList = (goal) => {
        // console.log("goalsUpdated");
        // setstate(
        //     goalsState.map((g) => {
        //         if (g.id == goal.id) {
        //             return goal;
        //         }
        //         return g;
        //     })
        // );
    };
    return (
        <View style={styles.main}>
            <DailyGoalListMessage
                goals={goalsState}
                style={styles.message}
            ></DailyGoalListMessage>
            <FlatList
                data={goalsState}
                renderItem={(item) => {
                    return (
                        <CustomButton
                            goal={item.item}
                            navigation={navigation}
                            ChildComponent={DailyGoal}
                            updateGoalList={updateGoalList}
                            onLongPress={() => {
                                setCurrentGoal(item.item);
                                navigation.navigate("GoalOptions");
                            }}
                        />
                    );
                }}
                keyExtractor={(item) => item.id + item.changeKey}
            ></FlatList>
        </View>
    );
};

export default connect(null, { setCurrentGoal })(DailyGoalList);

const styles = StyleSheet.create({
    main: {
        height: "99.99%",
    },
    message: {
        fontSize: 18,
        textAlign: "center",
        padding: 15,
        backgroundColor: "rgba(0,0,0,0.2)",
        shadowColor: "rgba(0,0,0,0.9)",
    },
});

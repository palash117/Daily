import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomButton from "./button/CustomButton";
import GoalAdd from "./button/GoalAdd";

const NoGoals = ({ navigation }) => {
    let addGoal = () => {
        navigation.navigate("AddGoal");
    };
    return (
        <View style={styles.nogoal}>
            <Text style={styles.message}>
                No goals yet?{"\n"} Press the button at bottom of screen to add
                a daily goal to your list.
            </Text>
            <CustomButton
                title={"AddGoal"}
                onPress={() => {
                    addGoal();
                }}
                ChildComponent={GoalAdd}
                style={styles.addGoal}
            ></CustomButton>
        </View>
    );
};
const styles = StyleSheet.create({
    nogoal: {
        // flex: 1,
        height: "99.99%",
        // borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    message: {
        padding: 10,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
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
export default NoGoals;

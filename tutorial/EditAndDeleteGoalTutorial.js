import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DailyGoal from "../components/dailyGoal/DailyGoal";
import CustomButton from "../components/button/CustomButton";
import EditIcon from "../components/icons/EditIcon";
import CheckIcon from "../components/icons/CheckIcon";
import TrashIcon from "../components/icons/TrashIcon";

const EditAndDeleteGoalTutorial = () => {
    const [state, setstate] = useState(false);
    const [wrongButton, setWrongButton] = useState(false);
    return (
        <View style={styles.main}>
            <Text>EditAndDelete</Text>
            <View style={styles.goalBox}>
                <CustomButton
                    ChildComponent={DailyGoal}
                    goal={{ goalStr: "Excercise Today for 30 min" }}
                    dummy={true}
                    dummyPress={() => {
                        setWrongButton(true);
                    }}
                    onLongPress={() => {
                        setstate(true);
                    }}
                ></CustomButton>
            </View>
            <Text
                style={styles.message}
            >{`On long pressing the goal text \nyou bring out the menu to edit or delete it.\n Try above `}</Text>
            {wrongButton && (
                <Text
                    style={styles.message}
                >{`Try long pressing the text part of the goal!`}</Text>
            )}
            {state && (
                <View style={styles.actions}>
                    <CustomButton ChildComponent={EditIcon}></CustomButton>
                    <CustomButton ChildComponent={TrashIcon}></CustomButton>
                </View>
            )}
            {state && (
                <Text
                    style={styles.message}
                >{`Great! You can proceed ahead`}</Text>
            )}
        </View>
    );
};

export default EditAndDeleteGoalTutorial;

const styles = StyleSheet.create({
    main: {
        height: "99.99%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    message: {
        marginTop: 20,
        textAlign: "center",
        margin: 10,
        fontSize: 15,
    },

    goalBox: {
        // padding: 100,
        // margin: 100,
        borderWidth: 1,
        width: "70%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    actions: {
        marginTop: 20,
        flexDirection: "row",
    },
});

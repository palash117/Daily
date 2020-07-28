import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DailyGoal from "../components/dailyGoal/DailyGoal";
import CustomButton from "../components/button/CustomButton";
import GoalUnchecked from "../components/button/GoalUnchecked";
import GoalChecked from "../components/button/GoalChecked";

const CheckUncheckTutorial = () => {
    const [state, setstate] = useState(false);
    const [showPressMessage, setshowPressMessage] = useState(false);
    const [showLongPress, setLongPressState] = useState(false);
    const press = () => {
        setshowPressMessage(true);
        setstate(true);
    };
    const longPress = () => {
        setLongPressState(true);
        setstate(false);
    };
    const message = "Read for 30 minutes.";
    return (
        <View style={styles.main}>
            <View style={styles.goalBox}>
                <View style={styles.goalContainer}>
                    <CustomButton
                        ChildComponent={state ? GoalChecked : GoalUnchecked}
                        style={styles.button}
                        onPress={press}
                        onLongPress={longPress}
                    ></CustomButton>
                    <Text style={styles.message}>{message}</Text>
                </View>
            </View>
            {!showPressMessage && !showLongPress && (
                <Text
                    style={styles.message}
                >{`Once you have achieved your goal,\nYou can press the check box to mark it done!\n Try above!\n\n`}</Text>
            )}
            {showPressMessage && !showLongPress && (
                <View>
                    <Text style={styles.message}>{`Great!\n`}</Text>
                    <Text
                        style={styles.messageWithTransition}
                    >{`Now if you have marked your goal by mistake,\n you can uncheck it by \nlong pressing the checkbox\n\nTry it above`}</Text>
                </View>
            )}
            {showLongPress && (
                <View>
                    <Text
                        style={styles.messageWithShortTransition}
                    >{`Great!\nYou can proceed ahead`}</Text>
                </View>
            )}
        </View>
    );
};

export default CheckUncheckTutorial;

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
    messageWithTransition: {
        marginTop: 20,
        textAlign: "center",
        margin: 10,
        fontSize: 15,
    },
    messageWithShortTransition: {
        marginTop: 20,
        textAlign: "center",
        margin: 10,
        fontSize: 15,
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
    goalBox: {
        // padding: 100,
        // margin: 100,
        borderWidth: 1,
        width: "70%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
});

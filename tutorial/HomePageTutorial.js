import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import image from "../public/tutorial/goalOptionsTutorial.png";
import DailyGoal from "../components/dailyGoal/DailyGoal";

const HomePageTutorial = () => {
    return (
        <View style={styles.main}>
            <Text>HomePageTutorial</Text>
            <Text
                style={styles.message}
            >{`Once you have achieved your goal,\nYou can press the check box to mark it done!\n Try above!\n\nIf you have marked your goal by mistake\n you can uncheck it by long pressing it\n`}</Text>
        </View>
    );
};

export default HomePageTutorial;

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
});

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/button/CustomButton";
import GoalAdd from "../components/button/GoalAdd";

const AddGoalTutorial = () => {
    const [state, setstate] = useState(false);
    return (
        <View>
            <CustomButton
                title={"Add goal"}
                onPress={() => {
                    setstate(true);
                }}
                ChildComponent={GoalAdd}
                // style={styles.addGoal}
            ></CustomButton>

            <Text
                style={styles.message}
            >{`When in home page\n press above button to add a goal`}</Text>
            {state && (
                <Text
                    style={styles.message}
                >{`Great! you can proceed to next tutorial`}</Text>
            )}
        </View>
    );
};

export default AddGoalTutorial;

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

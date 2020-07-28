import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import createTutorialSm from "./tutorialSm";
import WelcomeToTutorial from "./WelcomeToTutorial";
import CustomButton from "../components/button/CustomButton";
import HomePageTutorial from "./HomePageTutorial";
import AddGoalTutorial from "./AddGoalTutorial";
import CheckUncheckTutorial from "./CheckUncheckTutorial";
import EditAndDeleteGoalTutorial from "./EditAndDeleteGoalTutorial";
import TutorialWrapper from "./TutorialWrapper";
import { setFirstUse } from "../state/actions/firstUse";
import { connect } from "react-redux";

let sm = createTutorialSm();
let tutorials = [
    WelcomeToTutorial,
    HomePageTutorial,
    AddGoalTutorial,
    CheckUncheckTutorial,
    EditAndDeleteGoalTutorial,
];
let index = 0;
const Tutorial = (props) => {
    const { navigation, setFirstUse } = props ? props : {};
    const [state, setState] = useState(0);
    // const State = WelcomeToTutorial;
    const prev = () => {
        if (state > 0) {
            setState(state - 1);
        }
    };
    const next = () => {
        setState(state + 1);
    };
    const skip = () => {
        // navigation.push("Home");
        setFirstUse();
    };
    // <Text>hi{state}</Text>;
    return (
        <View style={styles.main}>
            <TutorialWrapper {...props} state={state} />
            <View style={styles.actions}>
                <View style={styles.navigation}>
                    {state > 0 && state < 5 && (
                        <CustomButton
                            title={"PREV"}
                            onPress={prev}
                            style={styles.button}
                        />
                    )}

                    {state < 4 && (
                        <CustomButton
                            title={"SKIP"}
                            onPress={skip}
                            style={styles.button}
                        />
                    )}
                    {state < 4 && (
                        <CustomButton
                            title={"NEXT"}
                            onPress={next}
                            style={styles.button}
                        />
                    )}
                    {state == 4 && (
                        <CustomButton
                            title={"FINISH"}
                            onPress={skip}
                            style={styles.button}
                        />
                    )}
                </View>
            </View>
        </View>
    );
};

export default connect(null, { setFirstUse })(Tutorial);

const styles = StyleSheet.create({
    main: {
        height: "99.99%",
        width: "100%",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    navigation: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-evenly",
    },
    actions: {
        position: "absolute",
        flexDirection: "column",
        bottom: 50,
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
    },
    button: {
        width: 80,
        height: 30,
        backgroundColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
    },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import { addGoal } from "../state/actions/goals";
import CustomButton from "../components/button/CustomButton";
import CheckIcon from "../components/icons/CheckIcon";
import UncheckedIcon from "../components/icons/UncheckedIcon";
import BackIcon from "../components/icons/BackIcon";

const AddGoal = ({ navigation, addGoal }) => {
    const [inputText, setInputText] = useState("");
    const updateText = (inputText) => {
        setInputText(inputText);
        // updateGoalText(inputText);
    };
    const submit = () => {
        addGoal(inputText);
        navigation.pop();
    };
    return (
        <View style={styles.main}>
            <TextInput
                style={styles.textInput}
                onChangeText={updateText}
                value={inputText}
                placeholder={"Add your new daily goal here..."}
                multiline={true}
                autoFocus={true}
            />
            <View style={styles.buttons}>
                <CustomButton
                    title={"add goal"}
                    onPress={() => {
                        navigation.pop();
                    }}
                    ChildComponent={BackIcon}
                    style={styles.button}
                ></CustomButton>
                <CustomButton
                    title={"add goal"}
                    onPress={() => {
                        submit();
                    }}
                    ChildComponent={CheckIcon}
                    style={styles.button}
                ></CustomButton>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    main: {
        height: "99.99%",
        alignItems: "center",
    },
    textInput: {
        // borderColor: "black",
        // borderWidth: 1,
        height: "80%",
        width: "100%",
        margin: 20,
        paddingHorizontal: 20,
        width: "60%",
        fontSize: 18,
    },
    buttons: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button: {
        backgroundColor: null,
        width: 50,
        height: 50,
    },
});
export default connect(null, { addGoal })(AddGoal);

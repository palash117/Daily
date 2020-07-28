import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import { editGoal } from "../state/actions/goals";
import CustomButton from "../components/button/CustomButton";
import CheckIcon from "../components/icons/CheckIcon";
import UncheckedIcon from "../components/icons/UncheckedIcon";
import BackIcon from "../components/icons/BackIcon";

const EditGoal = ({ navigation, editGoal, currentGoal }) => {
    const [inputText, setInputText] = useState(currentGoal.goalStr);
    const updateText = (inputText) => {
        setInputText(inputText);
    };
    const submit = () => {
        editGoal(currentGoal.id, inputText);
        currentGoal.goalStr = inputText;
        navigation.pop(2);
    };
    return (
        <View style={styles.main}>
            <Text style={styles.message}>Edit your goal below</Text>
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
    message: {
        fontWeight: "bold",
        fontSize: 19,
        marginTop: 10,
    },
    textInput: {
        // borderColor: "black",
        // borderWidth: 1,
        height: "80%",
        width: "100%",
        margin: 20,
        paddingHorizontal: 20,
        fontSize: 19,
        width: "60%",
    },
    buttons: {
        position: "absolute",
        width: "100%",
        // height: "100%",
        bottom: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button: {
        backgroundColor: null,
        width: 50,
        height: 50,
    },
});
const mapStateToProps = (state) => ({ currentGoal: state.goals.currentGoal });
export default connect(mapStateToProps, { editGoal })(EditGoal);

import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Vibration,
} from "react-native";
function CustomButton(props) {
    const {
        style,
        title,
        onPress,
        ChildComponent,
        onLongPress,
        options,
    } = props ? props : {};
    const {
        pressVibrationTime,
        longPressVibrationTime,
        disableVibration,
        disablePressVibration,
        disableLongPressVibration,
    } = options ? options : {};
    let finalStyle = { ...preStyle.goalButton };
    if (style) {
        finalStyle = { ...finalStyle, ...style };
    }

    const press = () => {
        if (!disableVibration && !disablePressVibration) {
            if (pressVibrationTime) {
                Vibration.vibrate(pressVibrationTime);
            } else {
                //default vibration
                Vibration.vibrate(10);
            }
        }
        if (onPress) {
            onPress();
        }
    };

    const longPress = () => {
        if (!disableVibration && !disableLongPressVibration) {
            if (longPressVibrationTime) {
                Vibration.vibrate(longPressVibrationTime);
            } else {
                //default vibration
                Vibration.vibrate(10);
            }
        }
        if (onLongPress) {
            onLongPress();
        }
    };
    if (ChildComponent) {
        return (
            <TouchableOpacity
                activeOpacity={0.2}
                onPress={press}
                style={finalStyle}
                onLongPress={onLongPress ? longPress : () => {}}
            >
                <View>
                    <ChildComponent {...props}></ChildComponent>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity
            activeOpacity={0.2}
            onPress={press}
            style={finalStyle}
        >
            <View>
                <Text> {title}</Text>
            </View>
        </TouchableOpacity>
    );
}
const preStyle = StyleSheet.create({
    goalButton: {
        alignContent: "center",
        justifyContent: "center",
        // backgroundColor: "#1ecbe1",
        padding: 5,
        borderRadius: 5,
        // textAlign: "center",
        alignItems: "center",
    },
});
export default CustomButton;

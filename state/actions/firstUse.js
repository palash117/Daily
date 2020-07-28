import { CHECK_FIRST_TIME, SET_FIRST_TIME } from "./actionTypes";
import { AsyncStorage } from "react-native";

const NOT_FIRST_USE = "NOT_FIRST_USE";
const createAction = (type, payload) => {
    if (payload) {
        return { type: type, payload };
    } else return { type };
};
export const checkFirstUse = () => async (dispatch) => {
    try {
        // console.log("CONST CHECK_FIRST_TIME", CHECK_FIRST_TIME);
        let data = await AsyncStorage.getItem(NOT_FIRST_USE);
        if (!data) {
            // dispatch(createAction(CHECK_FIRST_TIME, data));
            dispatch({ type: CHECK_FIRST_TIME, payload: true });
        } else {
            // dispatch(createAction(CHECK_FIRST_TIME, false));

            dispatch({ type: CHECK_FIRST_TIME, payload: false });
        }
    } catch (err) {
        console.error(err);
    }
};

export const setFirstUse = () => async (dispatch) => {
    try {
        await AsyncStorage.setItem(NOT_FIRST_USE, "false");
        dispatch({ type: CHECK_FIRST_TIME, payload: false });
    } catch (err) {
        console.error(err);
    }
};

export const resetAsyncStorage = () => async (dispatch) => {
    try {
        await AsyncStorage.removeItem(NOT_FIRST_USE);
        // await AsyncStorage.removeItem("GOAL_IDS");
    } catch (error) {}
};

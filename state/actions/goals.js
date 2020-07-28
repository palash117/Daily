import {
    LOAD_GOALS,
    ADD_GOAL,
    DELETE_GOAL,
    EDIT_GOAL,
    CHECK_GOAL,
    SET_CURRENT_GOAL,
} from "../actions/actionTypes";
import { AsyncStorage } from "react-native";
import { nanoid } from "nanoid/async/index.native";

export const GOALS = "GOALS";
export const GOAL_IDS = "GOAL_IDS";
export const GOAL_KEY = "GOAL_KEY";
export const GOAL_HISTORY_PREFIX = "H";

const createAction = (type, payload) => {
    if (payload) {
        return { type, payload };
    } else return { type };
};

export const loadGoals = () => async (dispatch) => {
    try {
        let allIds = JSON.parse(await AsyncStorage.getItem(GOAL_IDS));
        if (!allIds) {
            allIds = [];
        }
        let data = [];
        for (let id of allIds) {
            console.log("querying for id ", id);
            let value = JSON.parse(await AsyncStorage.getItem(GOAL_KEY + id));
            // console.log("goal, ", value, value.goalStr.length);
            data.push(value);
        }

        if (data) {
            data = data.map((goal) => {
                if (goal.completed && goal.completedTime) {
                    let completionDate = new Date(goal.completedTime);
                    if (completionDate && !isToday(completionDate)) {
                        goal.completed = false;
                    }
                }
                return goal;
            });
            dispatch({ type: LOAD_GOALS, payload: data });
        } else {
            dispatch({ type: LOAD_GOALS, payload: [] });
        }
    } catch (err) {
        console.log("error unable to find goals", err);
    }
};
export const addGoal = (goalString) => async (dispatch) => {
    try {
        console.log("starting to add goal");
        let key = await nanoid();
        console.log("generated key ", key);
        let goal = {
            id: key,
            goalStr: goalString,
            changeKey: key,
            goalAddedDate: new Date().toISOString(),
        };
        let allIds = JSON.parse(await AsyncStorage.getItem(GOAL_IDS));
        if (!allIds) {
            allIds = [];
        }

        allIds.push(goal.id);
        await AsyncStorage.setItem(GOAL_IDS, JSON.stringify(allIds));
        await AsyncStorage.setItem(GOAL_KEY + goal.id, JSON.stringify(goal));
        initHistoryForGoal(key);
        console.log(goal);
        dispatch(createAction(ADD_GOAL, goal));
    } catch (err) {
        console.log("error unable to add goals", err);
    }
};
export const checkGoal = (goalId, type = true) => async (dispatch) => {
    try {
        let goal = JSON.parse(await AsyncStorage.getItem(GOAL_KEY + goalId));
        switch (type) {
            case true:
            default:
                goal.completed = true;
                goal.completed = true;
                goal.completedTime = new Date().toISOString();
                // goal.completedTime = "2020-07-27T18:29:10.206Z";
                break;
            case false:
                goal.completed = false;
                goal.completedTime = null;
        }
        let changeKey = await nanoid();
        goal.changeKey = changeKey;
        updateHistory(goalId, type);
        await AsyncStorage.setItem(GOAL_KEY + goalId, JSON.stringify(goal));
        dispatch(createAction(CHECK_GOAL, { goalId, type }));
    } catch (err) {
        console.log("error unable to add goals", err);
    }
};
export const setCurrentGoal = (goal) => (dispatch) => {
    dispatch(createAction(SET_CURRENT_GOAL, goal));
};

export const deleteGoal = (goalId) => async (dispatch) => {
    try {
        let allIds = JSON.parse(await AsyncStorage.getItem(GOAL_IDS));
        allIds = allIds.filter((id) => id !== goalId);
        await AsyncStorage.setItem(GOAL_IDS, JSON.stringify(allIds));
        await AsyncStorage.removeItem(GOAL_KEY + goalId);

        dispatch(createAction(DELETE_GOAL, goalId));
    } catch (error) {
        console.log("error unable to delete goals", err);
    }
};

export const editGoal = (goalId, goalsStr) => async (dispatch) => {
    try {
        let goal = JSON.parse(await AsyncStorage.getItem(GOAL_KEY + goalId));
        goal.goalStr = goalsStr;
        let changeKey = await nanoid();
        goal.changeKey = changeKey;
        await AsyncStorage.setItem(GOAL_KEY + goalId, JSON.stringify(goal));
        dispatch(createAction(EDIT_GOAL, goal));
    } catch (err) {
        console.log("error unable to edit goals", err);
    }
};

const updateHistory = async (goalId, type) => {
    let historyKey = GOAL_HISTORY_PREFIX + goalId;
    let history = JSON.parse(await AsyncStorage.getItem(historyKey));

    try {
        switch (type) {
            case true:
                history.push(new Date().toISOString());
                break;
            case false:
                let lastEntry = history[history.length - 1];
                if (isToday(new Date(lastEntry))) {
                    history.splice(-1);
                }
                break;
            default:
                break;
        }

        await AsyncStorage.setItem(historyKey, JSON.stringify(history));
    } catch (err) {
        console.log(
            "error unable to update goal history for goalId ",
            goalId,
            err
        );
    }
};

const initHistoryForGoal = async (goalId) => {
    let historyKey = GOAL_HISTORY_PREFIX + goalId;
    try {
        let randomDates = [];
        // for (let i = 60; i > 1; i--) {
        //     let possible = Math.floor(Math.random() * 2) == 0 ? true : false;
        //     if (possible) {
        //         let date = new Date();
        //         date.setDate(date.getDate() - i);
        //         randomDates.push(date.toISOString());
        //     }
        // }
        await AsyncStorage.setItem(historyKey, JSON.stringify(randomDates));
    } catch (err) {
        console.log(
            "error unable to init goal history for goalId ",
            goalId,
            err
        );
    }
};

const isToday = (someDate) => {
    const today = new Date();
    return (
        someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
    );
};

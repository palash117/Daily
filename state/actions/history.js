import {
    FETCH_HISTORY,
    CLEAR_HISTORY,
    CURRENT_GOAL_PREV_HISTORY,
} from "./actionTypes";
import { GOAL_IDS, GOAL_KEY, GOAL_HISTORY_PREFIX } from "./goals";
import { AsyncStorage } from "react-native";
import { isToday, isYesterday, ISOToDDMMYY } from "./utils";

export const fetchHistory = () => async (dispatch) => {
    try {
        let allIds = JSON.parse(await AsyncStorage.getItem(GOAL_IDS));
        if (!allIds) {
            console.log("no ids present");
            return;
        }
        console.log("ids found ", allIds);
        await fetchHistoryForIds(allIds, dispatch);
    } catch (err) {
        console.error("unable to fetch history", err);
    }
};

export const fetchHistoryForGoal = (goalId) => async (dispatch) => {
    fetchHistoryForIds([goalId], dispatch);
};
export const clearHistory = () => (dispatch) => {
    dispatch({ type: CLEAR_HISTORY });
};

export const checkGoalMarkedForYesterday = (goalId) => async (dispatch) => {
    let key = GOAL_HISTORY_PREFIX + goalId;
    let goalHistory = JSON.parse(await AsyncStorage.getItem(key));
    for (let dateStr of goalHistory) {
        let date = new Date(dateStr);
        if (isYesterday(date)) {
            dispatch({ type: CURRENT_GOAL_PREV_HISTORY, payload: true });
            break;
        }
    }
};

async function fetchHistoryForIds(allIds, dispatch) {
    let historyMap = {};

    // fetch all history fo goals and put them in a map
    for (let id of allIds) {
        let key = GOAL_HISTORY_PREFIX + id;
        let goalHistory = JSON.parse(await AsyncStorage.getItem(key));
        // goalHistory = removeDuplicateHistories(goalHistory);
        historyMap[id] = goalHistory;
    }

    // convert the map into a array of {date count}
    let minDate = new Date();
    let maxDate = new Date();
    let dateMap = {};
    for (let goalId in historyMap) {
        for (let historyDate of historyMap[goalId]) {
            let date = new Date(historyDate);
            // udating min date
            if (date.getTime() < minDate.getTime()) {
                minDate = date;
            }

            let dateStr = `${date.getFullYear()}-${
                date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1
            }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
            if (!(dateStr in dateMap)) {
                dateMap[dateStr] = 0;
            }
            dateMap[dateStr] = dateMap[dateStr] + 1;
        }
    }
    // fill value for dates with no goal acomplished
    const totalDays =
        (maxDate.getTime() - minDate.getTime()) / (1000 * 3600 * 24);
    for (var i = 0; i < totalDays; i++) {
        let date = new Date();
        date.setDate(minDate + i);

        let dateStr = `${date.getFullYear()}-${
            date.getMonth() + 1 < 10
                ? "0" + (date.getMonth() + 1)
                : date.getMonth() + 1
        }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
        if (!(dateStr in dateMap)) {
            dateMap[dateStr] = 0;
        }
    }

    let dateCountArr = [];
    for (let date in dateMap) {
        dateCountArr.push({
            date: date,
            count: dateMap[date],
        });
    }

    dispatch({
        type: FETCH_HISTORY,
        payload: {
            history: historyMap,
            fulldateMap: dateCountArr,
            minDate: minDate,
            totalDays: totalDays,
        },
    });
}

export const validateHistory = () => async (dispatch) => {
    let allIds = JSON.parse(await AsyncStorage.getItem(GOAL_IDS));
    if (!allIds) {
        console.log("no ids present");
        return;
    }
    for (let id of allIds) {
        let key = GOAL_HISTORY_PREFIX + id;
        let goalHistory = JSON.parse(await AsyncStorage.getItem(key));
        goalHistory = removeDuplicateHistories(goalHistory);
        await AsyncStorage.setItem(key, JSON.stringify(goalHistory));
    }
};

const removeDuplicateHistories = (goalHistory) => {
    let set = new Set();
    let uniqueDates = [];
    for (let isoDate of goalHistory) {
        if (!set.has(ISOToDDMMYY(isoDate))) {
            set.add(ISOToDDMMYY(isoDate));
            uniqueDates.push(isoDate);
        }
    }
    return uniqueDates;
};

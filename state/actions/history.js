import { FETCH_HISTORY } from "./actionTypes";
import { GOAL_IDS, GOAL_KEY, GOAL_HISTORY_PREFIX } from "./goals";
import { AsyncStorage } from "react-native";

export const fetchHistory = () => async (dispatch) => {
    try {
        let allIds = JSON.parse(await AsyncStorage.getItem(GOAL_IDS));
        if (!allIds) {
            console.log("no ids present");
            return;
        }
        console.log("ids found ", allIds);
        let historyMap = {};

        // fetch all history fo goals and put them in a map
        for (let id of allIds) {
            let key = GOAL_HISTORY_PREFIX + id;
            let goalHistory = JSON.parse(await AsyncStorage.getItem(key));
            historyMap[id] = goalHistory;
        }

        console.log("history map generated ", historyMap);

        // convert the map into a array of {date count}

        let minDate = new Date();
        let maxDate = new Date();
        let dateMap = {};
        for (let goalId in historyMap) {
            for (historyDate of historyMap[goalId]) {
                let date = new Date(historyDate);
                // udating min date
                if (date.getTime() < minDate.getTime()) {
                    minDate = date;
                }

                let dateStr = `${date.getFullYear()}-${
                    date.getMonth() + 1 < 10
                        ? "0" + (date.getMonth() + 1)
                        : date.getMonth() + 1
                }-${
                    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
                }`;
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
        console.log("datemap generated", dateMap);

        let dateCountArr = [];
        for (date in dateMap) {
            dateCountArr.push({
                date: date,
                count: dateMap[date],
            });
        }

        console.log("dateCount arr generated ", dateCountArr);
        dispatch({
            type: FETCH_HISTORY,
            payload: {
                history: historyMap,
                fulldateMap: dateCountArr,
                minDate: minDate,
                totalDays: totalDays,
            },
        });
    } catch (err) {
        console.error("unable to fetch history", err);
    }
};

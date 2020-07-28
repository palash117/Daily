import { FETCH_HISTORY } from "../actions/actionTypes";

const initialState = {
    history: {},
    fulldateMap: [],
    minDate: null,
    totalDays: 0,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case FETCH_HISTORY:
            return { ...state, ...payload };
        default:
            return state;
    }
}

import { FETCH_HISTORY, CLEAR_HISTORY } from "../actions/actionTypes";

const initialState = {
    history: {},
    fulldateMap: [],
    minDate: null,
    totalDays: 0,
    loading: true,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case FETCH_HISTORY:
            return { ...state, ...payload, loading: false };
        case CLEAR_HISTORY:
            return { ...initialState };
        default:
            return state;
    }
}

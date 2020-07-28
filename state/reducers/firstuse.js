import { CHECK_FIRST_TIME, SET_FIRST_TIME } from "../actions/actionTypes";

const initialState = {
    isFirstTime: true,
    loading: true,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CHECK_FIRST_TIME:
        case SET_FIRST_TIME:
            return { ...state, isFirstTime: payload, loading: false };
        default:
            return state;
    }
}

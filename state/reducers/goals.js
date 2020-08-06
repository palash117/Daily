import {
    LOAD_GOALS,
    ADD_GOAL,
    DELETE_GOAL,
    EDIT_GOAL,
    CHECK_GOAL,
    SET_CURRENT_GOAL,
    CURRENT_GOAL_PREV_HISTORY,
} from "../actions/actionTypes";

const initialState = {
    loading: true,
    goals: [],
    currentGoal: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOAD_GOALS:
            return { ...state, loading: false, goals: payload };
        case ADD_GOAL:
            return { ...state, goals: [...state.goals, payload] };
        case CHECK_GOAL:
            return {
                ...state,
                goals: state.goals.map((g) => {
                    if (g.id === payload.goalId) {
                        g.completed = payload.type;
                    }
                    return g;
                }),
            };
        case SET_CURRENT_GOAL: {
            return {
                ...state,
                currentGoal: payload,
            };
        }
        case DELETE_GOAL: {
            return {
                ...state,
                goals: state.goals.filter((g) => g.id !== payload),
            };
        }
        case EDIT_GOAL: {
            return {
                ...state,
                goals: state.goals.map((g) => {
                    if (g.id === payload.id) {
                        g.goalStr = payload.goalStr;
                        g.changeKey = payload.changeKey;
                    }
                    return g;
                }),
            };
        }
        case CURRENT_GOAL_PREV_HISTORY:
            return {
                ...state,
                currentGoal: {
                    ...state.currentGoal,
                    isMarkedForYesterday: payload,
                },
            };
        default:
            return state;
    }
}

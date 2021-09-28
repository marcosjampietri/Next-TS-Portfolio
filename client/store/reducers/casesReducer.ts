import { casesState } from "../../types/states";

const initState = {
    caseIndex: 0,

};

export const casesReducer = (state: casesState = initState, action: any) => {
    switch (action.type) {
        case "NEXT_CASE":
            return {
                ...state,
                caseIndex: (state.caseIndex + 1) % 4,
            };
        case "PREV_CASE":
            return {
                ...state,
                caseIndex: (state.caseIndex - 1) % 4,
            };
        default:
            return {
                ...state,
            };
    }

    console.log(state);
};

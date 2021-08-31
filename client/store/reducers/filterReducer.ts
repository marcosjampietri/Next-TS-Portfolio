import { filterState } from "../../types/states";

const initState = {
    activeSkill: "FRONT",
};

export const filterReducer = (state: filterState = initState, action: any) => {
    switch (action.type) {
        case "CHANGE_FILTER":
            return {
                ...state,
                activeSkill: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

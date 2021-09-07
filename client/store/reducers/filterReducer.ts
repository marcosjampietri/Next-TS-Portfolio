import { filterState } from "../../types/states";

const initState = {
    activeSkill: "FRONT",
    index: 0,
};

export const filterReducer = (state: filterState = initState, action: any) => {
    switch (action.type) {
        case "CHANGE_FILTER":
            return {
                ...state,
                activeSkill: action.payload,
            };
        case "LOADING":
            return {
                ...state,
                activeSkill: "",
            };
        case "FRONT":
            return {
                ...state,
                activeSkill: "FRONT",
                index: 0,
            };
        case "BACK":
            return {
                ...state,
                activeSkill: "BACK",
                index: 1,
            };
        case "DEVOPS":
            return {
                ...state,
                activeSkill: "DEVOPS",
                index: 2,
            };
        case "GENERAL":
            return {
                ...state,
                activeSkill: "GENERAL",
                index: 3,
            };
        default:
            return {
                ...state,
            };
    }
};

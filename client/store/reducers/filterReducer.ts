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
        case "LOADING":
            return {
                ...state,
                activeSkill: "",
            };
        case "FRONT":
            return {
                ...state,
                activeSkill: "FRONT",
            };
        case "BACK":
            return {
                ...state,
                activeSkill: "BACK",
            };
        case "DEVOPS":
            return {
                ...state,
                activeSkill: "DEVOPS",
            };
        case "GENERAL":
            return {
                ...state,
                activeSkill: "GENERAL",
            };
        default:
            return {
                ...state,
            };
    }
};

import { actionCreator } from "../../types/states";

export const filterAction0: actionCreator<any> =
    () => async (dispatch, getState) => {
        dispatch({
            type: "CHANGE_FILTER",
            payload: "",
        });
    };

export const filterAction = (activeSkill: string) => ({
    type: "CHANGE_FILTER",
    payload: activeSkill,
});

export const fltFrontAction = (activeSkill: string) => ({
    type: "FRONT",
    payload: activeSkill,
});

export const fltBackAction = (activeSkill: string) => ({
    type: "BACK",
    payload: activeSkill,
});

export const fltDevAction = (activeSkill: string) => ({
    type: "DEVOPS",
    payload: activeSkill,
});

export const fltGenAction = (activeSkill: string) => ({
    type: "GENERAL",
    payload: activeSkill,
});


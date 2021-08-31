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
export const nextAction = () => ({
    type: "NEXT_CASE",


});

export const prevAction = () => ({
    type: "PREV_CASE",


});

export const setCasesAction = (cases: object[]) => ({
    type: "SET_CASES",
    payload: cases,


});


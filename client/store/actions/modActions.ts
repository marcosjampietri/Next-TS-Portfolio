export const vidAction = (modComponent: JSX.Element) => ({
    type: "TOGGLE_MOD_VIDEO",
    payload: modComponent,
});

export const picAction = (modComponent: JSX.Element) => ({
    type: "TOGGLE_MOD_PIC",
    payload: modComponent,
});

export const modAction = () => ({
    type: "TOGGLE_MOD_OFF",

});



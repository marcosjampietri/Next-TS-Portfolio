import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

import { AppState } from "../../store/reducers/rootReducer";
import { navAction } from "../../store/actions/navActions";

const Burger = () => {
    const dispatch = useDispatch();
    //access rootReducer
    const { NavOn } = useSelector((state: AppState) => state.nav);

    //dispatch buttons
    const toggleNav = () => {
        dispatch(navAction());
    };

    useEffect(() => {
        if (NavOn) {
            dispatch(navAction());
        }
    }, [dispatch]);

    const first = useSpring({
        position: "absolute",
        transform: NavOn
            ? "translate(15px, 35px) rotate(-45deg)"
            : "translate(10px, 8px) rotate(0deg)",
    });
    const second = useSpring({
        position: "absolute",
        transform: NavOn
            ? "translate(20px, 7px) rotate(45deg)"
            : "translate(10px, 20px) rotate(0deg)",
    });
    const third = useSpring({
        position: "absolute",
        transform: NavOn
            ? "translate(15px, 35px) rotate(-45deg)"
            : "translate(10px, 32px) rotate(0deg)",
    });
    const bg = useSpring({
        backgroundColor: NavOn
            ? "hsla(350, 0%, 90%, 0.7)"
            : "hsla(350, 0%, 90%, 0.05)",
    });

    return (
        <Box onClick={toggleNav} style={bg}>
            <Lines>
                <OneLine style={first} />
                <OneLine style={second} />
                <OneLine style={third} />
            </Lines>
        </Box>
    );
};

export default Burger;

const Box = styled(animated.div)`
    position: relative;
    width: 62px;
    height: 47px;
    margin: 0 5px;

    border: 1px inset hsla(340, 80%, 50%, 1);
    cursor: pointer;

    :hover {
        border: 1px inset hsla(340, 80%, 70%, 1);
        svg {
            transition: 0.01s;
            fill: hsla(350, 80%, 80%, 1);
        }
    }
`;
const Lines = styled.svg`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    transition: 0.8s;
    fill: hsla(340, 80%, 50%, 1);

    viewbox: 0 0 44 44;
`;

const OneLine = styled(animated.rect)`
    width: 40px;
    height: 4px;

    transform: translate(0px, 0px) rotate(0deg);
`;

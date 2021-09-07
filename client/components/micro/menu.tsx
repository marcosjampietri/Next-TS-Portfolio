import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { animated, useSpring, useTrail, config } from "react-spring";
import styled from "styled-components";

import { AppState } from "../../store/reducers/rootReducer";
import { navAction } from "../../store/actions/navActions";

import { below } from "../../styles/breakpoints";

const Menu = () => {
    const dispatch = useDispatch();
    const { NavOn } = useSelector((state: AppState) => state.nav);
    const toggleNav = () => {
        dispatch(navAction());
    };

    const menuIt = [
        {
            name: "HOME",
            color: "hsla(240, 10%, 40%, 0.8)",
            path: "/",
            target: null,
        },
        {
            name: "EXPERIENCE",
            color: "hsla(240, 10%, 30%, 0.8)",
            path: "/skillset",
            target: null,
        },
        {
            name: "CONTACT",
            color: "hsla(240, 10%, 20%, 0.8)",
            path: "/contact",
            target: null,
        },
        {
            name: "RESUME",
            color: "hsla(240, 10%, 20%, 0.8)",
            path: "https://drive.google.com/file/d/1-qoZn9OoQ0J8_Xd3C7otJBa7-4CeoW1K/preview",
            target: "_blank",
        },
    ];

    const textSwipe = useSpring({
        config: config.slow,
        delay: 800,
        opacity: NavOn ? 1 : 0,
        position: "absolute",
    });

    const trail = useTrail(menuIt.length, {
        config: config.slow,
        from: { opacity: 0, x: 0 },
        to: { opacity: NavOn ? 1 : 0, x: NavOn ? -30 : -100 },
    });

    return (
        <MenuST>
            {trail.map(({ x, ...otherProps }, i) => (
                <MenuItem
                    key={i}
                    style={{
                        ...otherProps,
                        background: `${menuIt[i].color}`,
                        transform: x.to((x) => `translate3d(${x}vw, 0, 0)`),
                    }}
                >
                    <Link href={menuIt[i].path}>
                        <Aaa
                            style={textSwipe}
                            href={menuIt[i].path}
                            target={menuIt[i].target}
                            rel="noreferrer"
                        >
                            {menuIt[i].name}
                        </Aaa>
                    </Link>
                </MenuItem>
            ))}
        </MenuST>
    );
};

export default Menu;

//style------------------------------------------------------------------

const MenuST = styled(animated.div)`
    position: fixed;
    top: 0px;

    z-index: 8;
    width: 100vw;
    height: 100vh;
    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 120px repeat(4, 1fr) 100px;
    div:nth-of-type(1) {
        grid-row: span 2;
        a {
            padding-top: 120px;
        }
    }
    div:nth-of-type(4) {
        grid: 4;
        grid-row: span 2;
        a {
            padding-bottom: 120px;
        }
    }

    pointer-events: none;
`;
const MenuItem = styled(animated.div)`
    height: 100%;

    display: flex;

    font-size: clamp(1rem, 2.5vw, 2rem);
    font-weight: 900;
    pointer-events: all;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: white;
        cursor: pointer;

        font-size: 30px;

        :hover {
            background: hsla(340, 100%, 50%, 1);
            text-shadow: 0px 0px 10px white;
        }
    }
`;

const Aaa = styled(animated.a)``;

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
            color: "hsla(263, 12%, 40%, 0.8)",
            path: "/",
            target: undefined,
        },
        {
            name: "EXPERIENCE",
            color: "hsla(263, 12%, 30%, 0.8)",
            path: "/skillset",
            target: undefined,
        },
        {
            name: "CONTACT",
            color: "hsla(263, 12%, 20%, 0.8)",
            path: "/contact",
            target: undefined,
        },
        {
            name: "RESUME",
            color: "hsla(263, 12%, 10%, 0.8)",
            path: "https://drive.google.com/file/d/1-qoZn9OoQ0J8_Xd3C7otJBa7-4CeoW1K/preview",
            target: "_blank",
        },
    ];

    interface springProps {
        opacity?: number;
        position?: number;
    }
    const textSwipe = useSpring<springProps>({
        config: config.slow,
        delay: 1000,
        opacity: NavOn ? 1 : 0,
        position: "absolute",
    });

    interface trailProps {
        position?: number;
    }
    const trail = useTrail<trailProps>(menuIt.length, {
        config: config.slow,
        from: { opacity: 0, x: 0 },
        to: { opacity: NavOn ? 1 : 0, x: NavOn ? 0 : -100 },
    });

    return (
        <MenuST>
            {trail.map(({ x, ...otherProps }, i) => (
                <MenuItem
                    key={i}
                    style={{
                        ...otherProps,
                        background: `${menuIt[i].color}`,
                        transform: x.to(
                            (x: any) => `translate3d(${x}vw, 0, 0)`
                        ),
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
    width: 70vw;
    height: 100vh;
    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 80px repeat(4, 1fr) 10vh;
    div:nth-of-type(1) {
        grid-row: 2;
    }
    div:nth-of-type(2) {
        grid-row: 3;
    }
    div:nth-of-type(3) {
        grid-row: 4;
    }
    div:nth-of-type(4) {
        grid-row: 5;
    }

    pointer-events: none;
`;
const MenuItem = styled(animated.div)`
    height: 100%;

    display: flex;

    pointer-events: all;
`;

const Aaa = styled(animated.a)`
    width: 100%;
    height: 100%;
    font-size: clamp(1rem, 3.5vw, 2.5rem);

    font-weight: 700;
    color: hsla(0, 0%, 80%, 1);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background: hsla(340, 100%, 50%, 1);
        text-shadow: 0px 0px 10px white;
        color: hsla(0, 0%, 100%, 1);
    }
`;

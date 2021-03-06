import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { animated, useSpring, useTrail, config } from "react-spring";
import styled from "styled-components";

import { AppState, useTypedSelector } from "../../store/reducers/rootReducer";
import { navOffAction } from "../../store/actions/navActions";

{
    /* import { below } from "../../styles/breakpoints"; */
}

const useOutsideAlerter = (ref: React.RefObject<HTMLElement>) => {
    const dispatch = useDispatch();

    const { NavOn } = useTypedSelector((state: AppState) => state.nav);
    useEffect(() => {
        if (NavOn) {
            const handleClickOutside = (event: any) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    dispatch(navOffAction());
                }
            };
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [ref, NavOn]);
};

const Menu = () => {
    const dispatch = useDispatch();

    const { NavOn } = useTypedSelector((state: AppState) => state.nav);

    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef);

    const menuIt = [
        {
            name: "HOME",
            color: "hsla(263, 12%, 40%, 0.8)",
            path: "/",
            target: undefined,
        },
        {
            name: "PORTFOLIO",
            color: "hsla(263, 12%, 30%, 0.8)",
            path: "/portfolio",
            target: undefined,
        },
        {
            name: "ABOUT",
            color: "hsla(263, 12%, 20%, 0.8)",
            path: "/about",
            target: undefined,
        },
        {
            name: "CONTACT",
            color: "hsla(263, 12%, 10%, 0.8)",
            path: "/contact",
            target: undefined,
        },
        {
            name: "RESUME",
            color: "hsla(263, 12%, 5%, 0.8)",
            path: "https://drive.google.com/file/d/18f67RSgf7y2Rv_JoYuWwyCMauJO40tnu/view?usp=sharing",
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
        <MenuST ref={wrapperRef} onClick={() => dispatch(navOffAction())}>
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
    grid-template-rows: 80px repeat(5, 1fr) 15vh;
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
    div:nth-of-type(5) {
        grid-row: 6;
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

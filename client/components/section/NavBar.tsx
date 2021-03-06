import React from "react";
import { animated } from "react-spring";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { navAction } from "../../store/actions/navActions";

import { below } from "../../styles/breakpoints";
import styled from "styled-components";

import { AppState } from "../../store/reducers/rootReducer";
import Burguer from "../micro/hamburguer";

const NavBar = () => {
    const { NavOn } = useSelector((state: AppState) => state.nav);
    const dispatch = useDispatch();
    const toggleNav = () => {
        if (NavOn) {
            dispatch(navAction());
        }
    };

    return (
        <Nav>
            <Margin>
                <Link href="/">
                    <Logo src="/MJ(LOGO).svg" onClick={toggleNav} />
                </Link>

                <Burguer />
            </Margin>
        </Nav>
    );
};

export default NavBar;

const Nav = styled(animated.nav)`
    position: fixed;
    width: 100vw;
    height: 80px;

    padding: 0px 20px;

    background: hsla(220, 10%, 85%, 0.01);
    z-index: 100;
    transition: 0.5s;

    :hover {
        transition: 0.2s;
        background: hsla(220, 10%, 85%, 0.05);
    }
`;

const Logo = styled.img`
    width: 50px;
    height: 100%;
    margin-top: -5px;

    background: transparent;
    border: none;
    cursor: pointer;
    filter: drop-shadow(0px 0px 50px hsla(340, 100%, 70%, 0.3));
`;

const Margin = styled.div`
    max-width: 1000px;
    width: 100%;

    margin: 10px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${below.med`
        
    `};
`;

const Options = styled.div`
    width: 100%;
    height: 20px;

    display: flex;
    justify-content: space-between;

    ${below.small`
        justify-content: space-between;
       
    `};

    div {
        position: relative;
        width: 100px;
        height: 20px;

        cursor: pointer;
        transition: all 0.6s;
        transition-timing-function: cubic-bezier(0.98, 0, 0, 0.99);

        div {
            height: 1.6em;
            position: absolute;
            top: -5px;
            left: -5px;
            width: fit-content;
            padding: 4px;

            transform: scaleX(0);
            transform-origin: left;
            color: transparent;
            background: hsla(342, 90%, 50%, 1);
        }

        a {
            transition: all 0.8s;
            position: absolute;
            font-size: clamp(1em, 1vw, 2em);
        }
        :hover {
            transition: all 0.8s;
            transition-timing-function: cubic-bezier(0.98, 0, 0, 0.99);
            div {
                transform: scaleX(1);
            }
            a {
                transition: all 0.8s;
                color: white;
            }
        }
    }
`;

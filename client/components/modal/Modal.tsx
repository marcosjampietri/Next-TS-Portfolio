import React, { useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { animated, config, useTransition } from "react-spring";
import styled from "styled-components";

import { AppState } from "../../store/reducers/rootReducer";
import { modAction } from "../../store/actions/modActions";

import { FiX } from "react-icons/fi";

const useOutsideAlerter = (ref: React.RefObject<HTMLElement>) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                dispatch(modAction());
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};

type Props = {
    children: JSX.Element;
};

const Modal = ({ children }: Props) => {
    const dispatch = useDispatch();
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef);

    //access rootReducer
    const { ModOn } = useSelector((state: AppState) => state.mod);
    const ModOff = () => {
        if (ModOn) {
            dispatch(modAction());
        }
    };

    const transitions = useTransition(ModOn, {
        from: { opacity: 0, y: 50 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0 },
        reverse: ModOn,
        delay: 0,
        config: config.slow,
    });

    return transitions((styles, item) =>
        item ? (
            <ModalSt style={styles}>
                <Box ref={wrapperRef}>
                    <Cross onClick={ModOff}>
                        <FiX />
                    </Cross>
                    <Content>{children}</Content>
                </Box>
            </ModalSt>
        ) : null
    );
};

export default Modal;

const ModalSt = styled(animated.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;

    opacity: 1;
    diplay: block;

    z-index: 9999999;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    position: relative;
    width: 100%;

    margin: 0px 10vw;
    \

    border-radius: 5px;
    border: 2px solid hsla(341, 100%, 50%, 1);
    background: white;
    box-shadow: 2px 2px 20px hsla(0, 0%, 0%, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;
`;
const Content = styled.div`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;
const Cross = styled.div`
    position: absolute;
    top: -25px;
    right: -25px;
    width: 50px;
    height: 50px;

    cursor: pointer;
    background: #e5e5e5ff;
    border-radius: 50%;
    box-shadow: 2px 2px 10px hsla(0, 0%, 0%, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 2em;
        stroke: purple;
    }
`;

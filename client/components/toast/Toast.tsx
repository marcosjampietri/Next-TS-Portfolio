import React, { useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { animated, config, useTransition } from "react-spring";
import styled from "styled-components";

import { AppState } from "../../store/reducers/rootReducer";
import { toastOFFAction } from "../../store/actions/toastActions";

import { FiX } from "react-icons/fi";

const useOutsideAlerter = (ref: React.RefObject<HTMLElement>) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                dispatch(toastOFFAction());
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

const Toast = ({ children }: Props) => {
    const { ToastOn } = useSelector((state: AppState) => state.toast);

    const toggleToast = () => {
        dispatch(toastOFFAction());
    };

    const dispatch = useDispatch();
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef);

    const transitions = useTransition(ToastOn, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: ToastOn,
        delay: 100,
        config: config.slow,
    });

    return (
        <>
            {transitions((styles, item) =>
                item ? (
                    <ToastSt style={styles}>
                        <Box ref={wrapperRef}>
                            <Content>
                                {children}
                                <Cross onClick={toggleToast}>
                                    <FiX />
                                </Cross>
                            </Content>
                        </Box>
                    </ToastSt>
                ) : null
            )}
        </>
    );
};

export default Toast;

const ToastSt = styled(animated.div)`
    position: absolute;
    width: 100vw;
    max-width: 1200px;
    height: 100vh;
    z-index: 99;
`;

const Box = styled.div`
    position: relative;

    margin: 20vh 30px;
    padding: 15px;

    box-shadow: 2px 2px 20px hsla(0, 0%, 0%, 0.5);
    background: hsla(0, 0%, 100%, 0.7);
    border-radius: 5px;
    backdrop-filter: blur(10px);
`;
const Content = styled.div``;
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

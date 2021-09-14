import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { NextPage } from "next";

import styled from "styled-components";
import { animated, useTransition, config } from "react-spring";
import { GrNext, GrPrevious } from "react-icons/gr";

import { AppState } from "../store/reducers/rootReducer";
import Layout from "../components/Layout";
import { Case1, Case2, Case3 } from "../components/section/Cases";

import Toast from "../components/toast/Toast";

const Works: NextPage = () => {
    const [index, setIndex] = useState(0);
    const [disable, setDisable] = useState(false);
    const cases = [
        <Case1 key={index} />,
        <Case2 key={index} />,
        <Case3 key={index} />,
    ];

    const { ToastOn, toastComponent } = useSelector(
        (state: AppState) => state.toast
    );

    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.slow,
    });

    const prev = () => {
        if (index > 0) {
            setIndex((state) => (state - 1) % cases.length);
        }
    };
    const next = () => {
        setIndex((state) => (state + 1) % cases.length);
    };

    if (disable == true) {
        setTimeout(setDisable, 2000);
    }

    return (
        <Layout>
            <Page>
                <Toast>{toastComponent}</Toast>
                <TH1>PORTFOLIO</TH1>
                <Controls>
                    <ButtonP
                        onClick={() => {
                            prev();
                            setDisable(true);
                        }}
                        disabled={disable}
                    >
                        <GrPrevious />
                    </ButtonP>
                    <ButtonN
                        onClick={() => {
                            next();
                            setDisable(true);
                        }}
                        disabled={disable}
                    >
                        <GrNext />
                    </ButtonN>
                </Controls>
                {transitions((style, i) => (
                    <CaseWrap style={style} key={index}>
                        {cases[i]}
                    </CaseWrap>
                ))}
            </Page>
        </Layout>
    );
};

export default Works;

const Page = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
    min-height: 700px;
`;

const TH1 = styled.h1`
    margin: 0px 0px 0px;
    padding: 100px 20px 30px;
    font-size: clamp(1.2em, 7vw, 5em);

    box-shadow: 1px 4px 20px black;

    background: -webkit-linear-gradient(
        120deg,
        hsl(340, 100%, 50%) 50%,
        hsl(263, 50%, 20%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    color: black;
`;

const CaseWrap = styled(animated.div)`
    position: absolute;

    width: 100%;
    height: 100%;
`;

const Controls = styled.div`
    position: fixed;
    top: 50vh;
    width: 100%;
    pointer-events: none;

    height: 70px;
    margin: 0 auto;
    z-index: 100;

    display: flex;
    justify-content: space-between;
`;

const Button = styled(animated.button)`
    background: hsla(0, 10%, 25%, 0.2);
    width: 70px;
    height: 70px;
    cursor: pointer;
    pointer-events: all;

    border: none;
    border-radius: 5px;
    font-size: 2em;
    svg {
        fill: white;
    }
`;
const ButtonN = styled(Button)`
    right: 0px;
`;
const ButtonP = styled(Button)`
    left: 0px;
`;

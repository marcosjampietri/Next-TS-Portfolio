import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import { animated, useTransition, config } from "react-spring";
import { GrNext, GrPrevious } from "react-icons/gr";

import Layout from "../../components/Layout";
import Case1 from "../../components/section/Case1";
import Case2 from "../../components/section/Case2";

const Works: NextPage = () => {
    const cases = [<Case1 />, <Case2 />];

    const [index, setIndex] = useState(0);
    const [disable, setDisable] = useState(false);

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
                <Controls>
                    <ButtonN
                        onClick={() => {
                            next();
                            setDisable(true);
                        }}
                        disabled={disable}
                    >
                        <GrNext />
                    </ButtonN>
                    <ButtonP
                        onClick={() => {
                            prev();
                            setDisable(true);
                        }}
                        disabled={disable}
                    >
                        <GrPrevious />
                    </ButtonP>
                </Controls>
                {transitions((style, i) => (
                    <CaseWrap style={style}>{cases[i]}</CaseWrap>
                ))}
            </Page>
        </Layout>
    );
};

export default Works;

const Page = styled.div`
    width: 100vw;
    height: 100vh;
`;

const CaseWrap = styled(animated.div)`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Controls = styled.div`
    position: relative;
    top: 50vh;
    width: 100%;
    max-width: 1000px;
    height: 70px;
    margin: 0 auto;
    z-index: 100;
`;

const Button = styled(animated.button)`
    position: absolute;
    top: 0px;
    background: hsla(0, 10%, 25%, 0.2);
    width: 70px;
    height: 70px;
    cursor: pointer;

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

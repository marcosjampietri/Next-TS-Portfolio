import { useDispatch } from "react-redux";
import type { NextPage } from "next";

import styled from "styled-components";

import { AppState, useTypedSelector } from "../store/reducers/rootReducer";
import Layout from "../components/Layout";
import CasesAll from "../components/section/Cases";

import Toast from "../components/toast/Toast";

const Works: NextPage = () => {
    const { toastComponent } = useTypedSelector(
        (state: AppState) => state.toast
    );

    return (
        <Layout>
            <Page>
                <Toast>{toastComponent}</Toast>
                <TH1>
                    <h1>PORTFOLIO</h1>
                </TH1>
                <CasesAll />
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

const TH1 = styled.div`
    width: 100%;
    box-shadow: 1px 4px 20px black;

    h1 {
        max-width: 1000px;
        margin: 0px auto;

        padding: 100px calc(-40vw + 100px) 30px;
        font-size: clamp(1.2em, 7vw, 5em);

        background: -webkit-linear-gradient(
            120deg,
            hsl(340, 100%, 50%) 50%,
            hsl(263, 50%, 20%)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
        color: black;
    }
`;

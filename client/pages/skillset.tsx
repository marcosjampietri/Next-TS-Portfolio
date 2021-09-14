import type { NextPage } from "next";
import styled from "styled-components";

import Layout from "../components/Layout";
import Skillset from "../components/section/Skills";

const Skills: NextPage = () => {
    return (
        <Layout>
            <Page>
                <Wrap>
                    <TH1>SKILLS</TH1>
                </Wrap>
                <Skillset />
            </Page>
        </Layout>
    );
};

export default Skills;

const Page = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Wrap = styled.div`
    background: white;
    box-shadow: 1px 4px 20px black;
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

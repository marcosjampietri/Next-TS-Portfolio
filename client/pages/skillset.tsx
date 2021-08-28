import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/Layout";
import Skillset from "../components/section/Skills";

const Skills: NextPage = () => {
    return (
        <Layout>
            <Page>
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
const Bar = styled.div`
    width: 100vw;
    display: flex;

    a {
        margin: 0px 20px;
        color: black;
    }
`;

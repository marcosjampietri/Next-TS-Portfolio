import type { NextPage } from "next";
import styled from "styled-components";

import Layout from "../components/Layout";
import Contacts from "../components/section/Contact";

const Contact: NextPage = () => {
    return (
        <Layout>
            <Page>
                <Wrap>
                    <TH1>CONTACT</TH1>
                </Wrap>
                <Contacts />
            </Page>
        </Layout>
    );
};

export default Contact;

const Page = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: hsla(263, 39%, 10%, 1);
`;

const Wrap = styled.div`
    background: white;
    box-shadow: 1px 4px 20px black;
`;

const TH1 = styled.h1`
    margin: 0px 0px 0px;
    padding: 100px 20px 30px;
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
`;

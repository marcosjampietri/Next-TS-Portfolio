import type { NextPage } from "next";
import styled from "styled-components";

import Layout from "../components/Layout";
import Contacts from "../components/section/Contact";

const Contact: NextPage = () => {
    return (
        <Layout>
            <Page>
                <TH1>
                    <h1>CONTACT</h1>
                </TH1>
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

const TH1 = styled.div`
    width: 100%;
    box-shadow: 1px 4px 20px black;

    background: white;

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

import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/Layout";
import Contacts from "../components/section/Contact";

const Contact: NextPage = () => {
    return (
        <Layout>
            <Page>
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

    display: flex;
    justify-content: center;
`;

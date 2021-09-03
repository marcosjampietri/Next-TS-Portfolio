import type { NextPage } from "next";
{
    /* import Link from "next/link"; */
}
import styled from "styled-components";

import Layout from "../components/Layout";
import Hero from "../components/section/Hero";

const Home: NextPage = () => {
    return (
        <Layout>
            <Page>
                <Hero />
            </Page>
        </Layout>
    );
};

export default Home;

const Page = styled.div`
    width: 100vw;
    height: 100vh;
`;

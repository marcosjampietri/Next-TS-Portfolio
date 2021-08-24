import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/Layout";
import Hero from "../components/section/Hero";

const Home: NextPage = () => {
    return (
        <Layout>
            <Page>
                <Bar>
                    <Link href="/works">
                        <a>WORKS</a>
                    </Link>
                    <Link href="/contact">
                        <a>CONTACT</a>
                    </Link>
                </Bar>
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
const Bar = styled.div`
    width: 100vw;
    display: flex;

    a {
        margin: 0px 20px;
        color: black;
    }
`;

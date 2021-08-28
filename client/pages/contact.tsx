import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <Page>
                <Text>
                    <h3>NUMBER</h3>
                    <h3>SOCIAL</h3>
                    <h3>ADDRESS</h3>
                </Text>
            </Page>
        </Layout>
    );
};

export default Home;

const Page = styled.div`
    width: 100vw;
    height: 100vh;
`;
const Text = styled.div`
    h3 {
        color: black;
    }
`;

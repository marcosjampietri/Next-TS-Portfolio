import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../../components/Layout";
import Case1 from "../../components/section/Case1";

const Works: NextPage = () => {
    return (
        <Layout>
            <Page>
                <Link href="/">
                    <a style={{ color: "black" }}>HOME</a>
                </Link>
                <Case1 />
            </Page>
        </Layout>
    );
};

export default Works;

const Page = styled.div`
    width: 100vw;
    height: 100vh;
`;

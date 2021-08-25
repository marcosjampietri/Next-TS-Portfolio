import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";

{
    /* import { loadAction } from "../store/actions/loadActions"; */
}

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    //Spring
    {
        /* const dispatch = useDispatch(); */
    }

    {
        /* const { isLoading } = useSelector((state) => state.load); */
    }

    {
        /* useEffect(() => {
        if (isLoading) {
            dispatch(loadAction());
        }
    }, [isLoading]); */
    }

    return (
        <>
            <Head>
                <title>MARCOS JAMPIETRI S PORTFOLIO</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div>{children}</div>
        </>
    );
};

export default Layout;

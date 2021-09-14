import React, { useState, useEffect } from "react";
import { animated, useTransition, config } from "react-spring";
import { useDispatch, useSelector } from "react-redux";

import { RiPlayMiniLine } from "react-icons/ri";
import { AppState } from "../../store/reducers/rootReducer";
import {
    toastONAction,
    toastOFFAction,
} from "../../store/actions/toastActions";
import { Skill1 } from "../toast/sklToast";
import styled from "styled-components";

type Props = {
    data: {
        name: string;
        image: string;
        catg: string;
        desc: string;
        tech: string;
    }[];
};

const CasesAll = ({ data }: Props) => {
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, [mount]);

    const dispatch = useDispatch();

    const { ToastOn } = useSelector((state: AppState) => state.toast);

    const toggleToast = () => {
        dispatch(toastONAction(<Skill1 />));
    };

    if (ToastOn) {
        setTimeout(() => {
            toastOFFAction();
        }, 10000);
    }

    const pgRight = useTransition(mount, {
        from: {
            transform: "translate3d(30vw,0vh,0) rotateY(15deg)",
            opacity: 0,
        },
        enter: {
            transform: "translate3d(0,0vh,0) rotateY(0deg)",
            transformStyle: "preserve-3d",
            opacity: 1,
        },
        leave: {
            transform: "translate3d(30,0vh,0) rotateY(0deg)",
            transformStyle: "preserve-3d",
            opacity: 0,
        },
        reverse: mount,
        delay: 1200,
        config: config.molasses,
    });

    const revUP = useTransition(mount, {
        from: {
            transform: "translate3d(0vw,10vh,0)",
            opacity: 0,
        },
        enter: {
            transform: "translate3d(0,0vh,0)",
            opacity: 1,
        },
        leave: {
            transform: "translate3d(0,10vh,0)",
            opacity: 0,
        },
        reverse: mount,
        delay: 700,
        config: config.molasses,
    });
    const revDOWN = useTransition(mount, {
        from: {
            transform: "translate3d(0vw,-10vh,0)",
            opacity: 0,
        },
        enter: {
            transform: "translate3d(0,0vh,0)",
            opacity: 1,
        },
        leave: {
            transform: "translate3d(0,-10vh,0)",
            opacity: 0,
        },
        reverse: mount,
        delay: 200,
        config: config.molasses,
    });

    return (
        <Section>
            <Margin>
                {revDOWN((styles, item) =>
                    item ? (
                        <Description style={styles}>
                            <TTL> {data[0].name} </TTL>
                            <Line />
                        </Description>
                    ) : null
                )}
                {pgRight((styles, item) =>
                    item ? (
                        <Flex style={styles}>
                            <Pair>
                                <TH2B>CATEGORIES:</TH2B>
                                <TH2>{data[0].catg}</TH2>
                            </Pair>
                            <Pair>
                                <TH2B>TECHNOLOGIES:</TH2B>
                                <TH2>{data[0].tech}</TH2>
                            </Pair>
                            <Pair>
                                <TH2B>SKILLS APPLIED:</TH2B>
                                <BTNskl onClick={toggleToast}>
                                    <RiPlayMiniLine />
                                </BTNskl>
                            </Pair>
                        </Flex>
                    ) : null
                )}
                {revUP((styles, item) =>
                    item ? (
                        <Image src={data[0].image} style={styles}></Image>
                    ) : null
                )}
            </Margin>
        </Section>
    );
};

export const Case1 = () => {
    const case1Data = [
        {
            name: "ANDREA MANGIACAVALLO'S WEBSITE",
            image: "/Pics/andrea.jpg",
            catg: "Web Design",
            desc: "this case was very nice",
            tech: "Next.js, React, Redux",
        },
    ];

    return <CasesAll data={case1Data} />;
};

export const Case2 = () => {
    const case1Data = [
        {
            name: "DEVOPS APP INTEGRATION",
            image: "/Pics/devO.jpg",
            catg: "DevOps",
            desc: "this case was very nice",
            tech: "Typescript, MongoDB, Docker, Jenkins, Terraform, Ansible, AWS, Digital Ocean",
        },
    ];

    return <CasesAll data={case1Data} />;
};

export const Case3 = () => {
    const case1Data = [
        {
            name: "LORD MUSIC ACADEMY E-LEARNING PLATFORM",
            image: "/Pics/lmaWS.jpg",
            catg: "Back-End",
            desc: "this case was very nice",
            tech: "Typescript, MongoDB, Docker, AWS, Digital Ocean",
        },
    ];

    return <CasesAll data={case1Data} />;
};

const Section = styled.section`
    position: relative;
    width: 100vw;
    height: 100%;

    overflow: hidden;

    :after {
        position: absolute;
        bottom: 0px;
        left: 50vw;
        content: "";
        height: 25vh;
        width: 1px;
        background: hsl(340, 100%, 50%);
    }
`;

const Margin = styled.div`
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 0px auto;

    perspective: 800px;
    h4,
    h2,
    h1 {
        color: black;
    }
`;

const Description = styled(animated.div)``;

const Flex = styled(animated.div)`
    display: flex: 
    // flex-direction: column;
`;

const TTL = styled(animated.h1)`
    color: black;
    font-size: clamp(1em, 5vw, 3em);
    font-weight: 700;
    margin: 50px 10px 10px 10px;
`;

const Line = styled.div`
    width: 80%;
    height: 1px;
    margin: 20px 10px 40px;
    background: red;
`;

const TH2B = styled(animated.h2)`
    color: black;
    font-size: clamp(0.6em, 1.5vw, 2em);
    font-weight: 700;
    margin: 10px;
`;

const TH2 = styled(animated.h2)`
    color: black;
    font-size: clamp(0.8em, 2vw, 2em);
    font-weight: 300;
    margin: 10px;
`;

const BTNskl = styled(animated.button)`
    width: 70px;
    height: 70px;
    font-size: 50px;
    font-weight: 300;
    margin: 10px;
    padding: 10px;

    border-radius: 50%;
    background-color: purple;
    color: white;
    cursor: pointer;
`;

const Pair = styled(animated.div)`
    h3,
    h4 {
        color: black;
    }

    display: flex;
    align-items: center;
`;

const Image = styled(animated.img)`
    width: 100%;
    height: 45vh;
    margin: 30px 0px;
    box-shadow: 2px 2px 20px black;

    object-fit: cover;
    object-position: 0% 20%;
`;

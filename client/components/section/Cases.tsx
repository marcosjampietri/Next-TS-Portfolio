import React, { useState } from "react";
import Link from "next/link";
import { animated, useTransition, config } from "react-spring";
import { useDispatch } from "react-redux";

import { prevAction, nextAction } from "../../store/actions/casesActions";

import { GrNext, GrPrevious } from "react-icons/gr";

import { AppState, useTypedSelector } from "../../store/reducers/rootReducer";
import { toastONAction } from "../../store/actions/toastActions";
import { Skill1, Skill2, Skill3, Skill4 } from "../toast/sklToast";
import styled from "styled-components";

const CasesAll = () => {
    const { caseIndex } = useTypedSelector((state: AppState) => state.cases);

    const cases = [
        {
            name: "SUPER SECRET CODE GAME",
            id: 0,
            update: "27/09/2021",
            client: "EduMe",
            image: "/Pics/SSC-Game.jpg",
            catg: "Software Development, DevOps",
            desc: "this case was very nice",
            tech: "Next.js, Typescript, Redux, AWS",
            path: "https://edu-me-git-main-marcosjampietri.vercel.app",
            usedskl: <Skill4 />,
        },
        {
            name: "E-COMMERCE",
            id: 1,
            update: "24/12/2021",
            client: "Classified",
            image: "/Pics/e-shop.jpg",
            catg: "Software Development, DevOps",
            desc: "this case was very nice",
            tech: "Next.js, Typescript, Redux, Stripe, JWT, Mongo",

            path: "https://mg-shop-marcosjampietri.vercel.app",
            usedskl: <Skill1 />,
        },
        {
            name: "PROFESSIONAL PHOTOGRAPHER WEBSITE",
            id: 2,
            update: "01/07/2021",
            client: "Andrea Mangiacavallo",
            image: "/Pics/andrea.jpg",
            catg: "Web Design",
            desc: "this case was very nice",
            tech: "Next.js, React, Redux",
            path: "https://andreamangiacavallo.com/",
            usedskl: <Skill1 />,
        },
        {
            name: "DEVOPS APP INTEGRATION",
            id: 3,
            update: "27/09/2021",
            client: "Self-Employed",
            image: "/Pics/devO.jpg",
            catg: "DevOps",
            desc: "this case was very nice",
            tech: "Typescript, MongoDB, Docker, Jenkins, Terraform, Ansible, AWS, Digital Ocean",
            path: "http://35.178.244.70:5150/",
            usedskl: <Skill2 />,
        },
        {
            name: "E-LEARNING PLATFORM",
            id: 4,
            update: "12/03/2020",
            client: "Lord Music Academy",
            image: "/Pics/lmaWS.jpg",
            catg: "Back-End",
            desc: "this case was very nice",
            tech: "Typescript, MongoDB, Docker, AWS, Digital Ocean",
            path: "https://lordmusicacademy.com/?lang=en&noredirect=true",
            usedskl: <Skill3 />,
        },
    ];

    const dispatch = useDispatch();

    {
        /* const { ToastOn } = useSelector((state: AppState) => state.toast); */
    }

    const toggleToast = () => {
        dispatch(toastONAction(cases[caseIndex].usedskl));
    };

    const revDOWN = useTransition(cases[caseIndex], {
        key: (item: any) => item.id,
        from: {
            transform: "translate3d(0vw,-20vh,0)",
            opacity: 0,
        },
        enter: {
            transform: "translate3d(0vw,0vh,0)",
            opacity: 1,
        },
        leave: {
            transform: "translate3d(-50vw,0vh,0)",
            opacity: 0,
        },

        config: config.slow,
    });

    const revDOWN2 = useTransition(cases[caseIndex], {
        key: (item: any) => item.id,
        from: {
            transform: "translate3d(20vw,0vh,0)",
            opacity: 0,
        },
        enter: {
            transform: "translate3d(0,0vh,0)",
            opacity: 1,
        },
        leave: {
            transform: "translate3d(0,50vh,0)",
            opacity: 0,
        },
        delay: 300,
        config: config.molasses,
    });
    const revDOWN3 = useTransition(cases[caseIndex], {
        key: (item: any) => item.id,
        from: {
            transform: "translate3d(0vw,0vh,0) rotateX(90deg)",
            opacity: 0,
        },
        enter: {
            transform: "translate3d(0,0vh,0) rotateX(0deg)",
            opacity: 1,
        },
        leave: {
            transform: "translate3d(0,0vh,0) rotateX(-90deg)",
            opacity: 0,
        },
        delay: 80,
        config: config.molasses,
    });

    const [disable, setDisable] = useState(false);

    const prev = () => {
        if (caseIndex > 0) {
            dispatch(prevAction());
        }
    };
    const next = () => {
        dispatch(nextAction());
    };

    if (disable == true) {
        setTimeout(setDisable, 1200);
    }

    console.log(caseIndex);

    return (
        <Section>
            <Controls>
                <div>
                    <ButtonP
                        onClick={() => {
                            prev();
                            setDisable(true);
                        }}
                        disabled={disable}
                    >
                        <GrPrevious />
                    </ButtonP>
                    <ButtonN
                        onClick={() => {
                            next();
                            setDisable(true);
                        }}
                        disabled={disable}
                    >
                        <GrNext />
                    </ButtonN>
                </div>
            </Controls>
            <Margin>
                <Name>
                    {revDOWN(
                        (styles, item) =>
                            item && (
                                <TTL key={item.id} style={styles}>
                                    {item.name}
                                </TTL>
                            )
                    )}
                </Name>
                <Line />
                <Details>
                    <Grid1>
                        <TH2B>CATEGORIES:</TH2B>
                        <TH2B>TECHNOLOGIES:</TH2B>
                        <TH2B>SKILLS APPLIED:</TH2B>
                        <TH2B>LAST UPDATED:</TH2B>
                        <TH2B>CLIENT:</TH2B>
                    </Grid1>
                    {revDOWN2(
                        (styles, item) =>
                            item && (
                                <Grid2 key={item.id} style={styles}>
                                    <TH2>{item.catg}</TH2>
                                    <TH2>{item.tech}</TH2>
                                    <BTNskl onClick={toggleToast}>SHOW</BTNskl>
                                    <TH2>{item.update}</TH2>
                                    <TH2>{item.client}</TH2>
                                </Grid2>
                            )
                    )}
                </Details>
                {revDOWN3(
                    (styles, item) =>
                        item && (
                            <Image key={item.id} style={styles}>
                                <Link href={item.path}>
                                    <a target="_blank" rel="noreferrer">
                                        <img src={item.image}></img>
                                    </a>
                                </Link>
                            </Image>
                        )
                )}
            </Margin>
        </Section>
    );
};

export default CasesAll;

const Section = styled.section`
    position: relative;
    width: 100vw;
    height: 100%;

    overflowx: hidden;
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

const Name = styled(animated.div)`
    display: grid;
    height: 15vh;

    overflow: hidden;
`;

const TTL = styled(animated.h1)`
    grid-column: 1;
    grid-row: 1;

    height: 2em;
    color: black;
    font-size: clamp(1em, 5vw, 3em);
    font-weight: 700;
    margin: 50px 10px 10px 10px;
`;

const Details = styled(animated.div)`
    display: grid;
    grid-template-columns: 1fr 3fr;

    margin: 20px 0px;
`;
const Grid = styled(animated.div)`
    display: grid;

    grid-template-rows: repeat(5, 50px);
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: start;
`;
const Grid1 = styled(Grid)`
    grid-column: 1;
`;
const Grid2 = styled(Grid)`
    grid-column: 2;
    grid-row: 1;
`;

const Line = styled.div`
    width: 80%;
    height: 1px;
    margin: 1.5vh 10px 3vh;
    background: red;
`;

const TH = styled.div`
    font-size: clamp(0.8em, 2vw, 1.8em);

    margin: 10px;
    padding: 10px 0px;

    color: black;
`;

const TH2B = styled(TH)`
    font-weight: 700;
    letter-spacing: -0.05em;
`;

const TH2 = styled(TH)`
    font-weight: 300;
    margin: 10px;
`;

const BTNskl = styled(animated.button)`
    max-width: 200px;
    height: 35px;
    font-size: 22px;
    font-weight: 300;
    margin: 10px;
    padding: 6px 10px;

    border-radius: 5px;
    border: none;
    background-color: hsla(340, 100%, 50%, 1);
    color: white;
    cursor: pointer;
    box-shadow: 5px 5px 8px hsla(0, 0%, 0%, 0.51);
`;

const Image = styled(animated.div)`
    a > img {
        position: absolute;
        width: 100%;
        height: 45vh;

        box-shadow: 2px 2px 20px black;

        object-fit: cover;
        object-position: center 0%;
    }
`;

const Controls = styled.div`
    position: fixed;
    top: 50vh;
    width: 100vw;
    height: 70px;
    z-index: 100;

    pointer-events: none;

    div {
        max-width: 1144px;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
    }
`;

const Button = styled(animated.button)`
    background: hsla(0, 10%, 25%, 0.2);
    width: 70px;
    height: 70px;
    cursor: pointer;
    pointer-events: all;

    border: none;
    border-radius: 5px;
    font-size: 2em;
    svg {
        fill: white;
    }
`;
const ButtonN = styled(Button)`
    right: 0px;
`;
const ButtonP = styled(Button)`
    left: 0px;
`;

import React, { useState, useEffect } from "react";
import { animated, useTransition, config } from "react-spring";
{
    /* import Link from "next/link"; */
}

{
    /* import { below } from "../../styles/breakpoints"; */
}
import styled from "styled-components";

const Case1 = () => {
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, [mount]);

    const cases = [
        {
            name: "PROFESSIONAL POTOGRAPHER PORTFOLIO",
            image: "/Pics/andrea.jpg",
            desc: "this case was very nice",
            tech: [
                "Next.js",
                "Typescript",
                "MongoDB",
                "Docker",
                "Jenkins",
                "Terraform",
                "Ansible",
                "AWS",
                "Digital Ocean",
            ],
        },
    ];

    const transitions = useTransition(mount, {
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
            transform: "translate3d(0,0vh,0) rotateY(0deg)",
            transformStyle: "preserve-3d",
            opacity: 1,
        },
        reverse: mount,
        delay: 700,
        config: config.molasses,
    });

    const transitions2 = useTransition(mount, {
        from: {
            transform: "translate3d(0vw,10vh,0)",
            opacity: 0,
        },
        enter: {
            transform: "translate3d(0,0vh,0)",
            opacity: 1,
        },
        leave: {
            transform: "translate3d(0,0vh,0)",
            opacity: 1,
        },
        reverse: mount,
        delay: 200,
        config: config.molasses,
    });

    return (
        <Section>
            <Margin>
                {/* {cases.map((item, index) => (
                    <Pair key={index}>
                        <div>
                            <h3>name: </h3>
                            <h4>{item.name}</h4>
                        </div>
                        <div>
                            <h3>description: </h3>
                            <h4>{item.desc}</h4>
                        </div>
                    </Pair>
                ))} */}

                {transitions2((styles, item) =>
                    item ? (
                        <Description style={styles}>
                            <TTL> {cases[0].name} </TTL>
                            <Line />
                            <TH2>WEB DESIGN</TH2>
                        </Description>
                    ) : null
                )}
                {transitions((styles, item) =>
                    item ? (
                        <Image src={cases[0].image} style={styles}></Image>
                    ) : null
                )}
            </Margin>
        </Section>
    );
};

export default Case1;

const Section = styled.section`
    position: relative;
    width: 100vw;
    height: 100%;

    overflow: hidden;
    background-color: hsla(263, 39%, 100%, 1);

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

    border: 1px solid black;

    perspective: 800px;
    h4,
    h2,
    h1 {
        color: black;
    }
`;

const Description = styled(animated.div)`
    border: 1px solid black;
`;

const Line = styled.div`
    width: 80%;
    height: 1px;
    margin: 0 auto;
    background: red;
`;

const TTL = styled(animated.h1)`
    color: black;
    font-size: clamp(1em, 2.3vw, 3em);
    font-weight: 500;
    margin: 10px;
`;
const TH2 = styled(animated.h2)`
    color: black;
    font-size: clamp(1em, 1.3vw, 2em);
    font-weight: 300;
    margin: 20px;
`;

const Pair = styled(animated.div)`
    h3,
    h4 {
        color: black;
    }
    border: 1px solid red;
    display: flex;
`;

const Image = styled(animated.img)`
    border: 1px solid black;
    width: 55vw;
    height: 35vh;
    background-color: blue;

    object-fit: cover;
    object-position: 0% 20%;
`;

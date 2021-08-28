import React from "react";
import { useTrail, animated, config } from "react-spring";
import Link from "next/link";

import { below } from "../../styles/breakpoints";
import styled from "styled-components";

const Skillset = () => {
    const skillFront = [
        {
            def: "Setup of all the technologies with Vanilla React, Next.js and Typescript",
            icon: "nxt",
            color: "",
        },
        {
            def: "Fluid Responsiveness without Bootstrap/Tailwind/Material UI",
            icon: "brn",
            color: "",
        },
        {
            def: "Use of Styled-Components ",
            icon: "stc",
            color: "",
        },
        {
            def: "Smooth and organic animations using React-Spring",
            icon: "skt",
            color: "",
        },
        {
            def: "Complex state management with Redux",
            icon: "rdx",
            color: "",
        },
        {
            def: "Use of persistent data with Local Storage",
            icon: "dkr",
            color: "",
        },
        {
            def: "Flipping cards, Scroll Effects, Parallax, Carousel, Neo-Morphism, 3D Elements, Modal Elements, Page Transitions, KeyFrames ",
            icon: "css",
            color: "",
        },
    ];

    const typeList = [
        { typ: "GENERAL", pos: 4 },
        { typ: "DEVOPS", pos: 3 },
        { typ: "BACK", pos: 2 },
        { typ: "FRONT", pos: 1 },
    ];

    const [trail, api] = useTrail(skillFront.length, (i) => ({
        from: { opacity: 0, x: 30 },
        to: { opacity: 1, x: 0 },
        config: {
            tension: 500,
            friction: 80,
        },
    }));

    return (
        <Section>
            <Margin>
                <Writes>
                    <Name>
                        <h2>SKILLS</h2>
                    </Name>
                    <Type>
                        {typeList.map((item, index) => (
                            <div key={index}>{item.typ}</div>
                        ))}
                    </Type>
                    {trail.map(({ x, ...otherProps }, i) => (
                        <Skill
                            key={i}
                            style={{
                                ...otherProps,
                                background: `${skillFront[i].color}`,
                                transform: x.to(
                                    (x) => `translate3d(${x}vw, 0, 0)`
                                ),
                            }}
                        >
                            <Icon
                                src={`/Icons/${skillFront[i].icon}.svg`}
                                alt="icon"
                                width="60px"
                            ></Icon>
                            <h4>{skillFront[i].def}</h4>
                        </Skill>
                    ))}
                </Writes>
            </Margin>
        </Section>
    );
};

export default Skillset;

const Section = styled(animated.section)`
    position: relative;
    width: 100vw;
    height: 100%;
    min-height: 500px;

    overflow: hidden;
    background-color: hsla(263, 0%, 95%, 1);

    border: 1px solid black;

    :after {
        position: absolute;
        bottom: 0px;
        left: 50vw;
        content: "";
        height: 25vh;
        width: 1px;
        background: hsl(340, 100%, 50%);
    }

    display: flex;
    justify-content: start;
    align-items: center;
`;

const Margin = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0px auto;

    // border: 1px solid black;
`;

const Writes = styled(animated.div)`
    position: relative;
    min-height: 480px;
    padding: 20px 20px 20px 50px;
    margin: 0px 20px;
    z-index: 2;

    h4 {
        color: black;
        // margin-bottom: 1em;
    }

    border: 1px solid hsla(340, 80%, 50%, 1);
    background-color: hsla(263, 0%, 95%, 1);
`;

const Name = styled.div`
    position: absolute;
    top: 0px;
    padding: 0px 30px;

    transform: translateY(-50%);
    background: hsla(263, 0%, 95%, 1);

    h2 {
        font-size: clamp(2em, 4vw, 6em);
        background: -webkit-linear-gradient(
            120deg,
            hsl(340, 100%, 50%),
            hsl(350, 100%, 50%)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 500;
        z-index: 2;
    }
`;

const Skill = styled(animated.div)`
    margin: 20px 0px;
    transform: translate3d(0, 0vh, 0);

    display: flex;
    justify-content: start;
    align-items: center;

    // border: 1px solid blue;
`;
const Icon = styled.img`
    flex: 0 0 35px;
    width: 35px;
    height: 35px;
    margin-right: 20px;
`;
const Type = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    margin: 10px 0px;

    transform: rotate(-90deg) translateY(-50%) translateX(-100%);
    transform-origin: top left;

    // border: 1px solid hsla(140, 80%, 40%, 1);

    display: flex;

    div {
        flex-basis: 0 0;
        width: 100px;
        height: 30px;

        margin: 0px 5px;

        text-align: center;
        color: black;
        background: hsla(263, 0%, 95%, 1);
        border: 1px solid hsla(340, 80%, 50%, 1);

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

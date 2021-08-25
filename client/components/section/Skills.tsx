import React from "react";
import { animated } from "react-spring";
import Link from "next/link";

import { below } from "../../styles/breakpoints";
import styled from "styled-components";

const Skillset = () => {
    const skillFront = [
        {
            def: "Setup of all the technologies with Vanilla React, Next.js and Typescript",
            icon: "",
            another: "",
        },
        {
            def: "Fluid Responsiveness without Bootstrap/Tailwind/Material UI",
            icon: "",
            another: "",
        },
        {
            def: "Use of Styled-Components ",
            icon: "",
            another: "",
        },
        {
            def: "Smooth and organic animations using React-Spring",
            icon: "",
            another: "",
        },
        {
            def: "Complex state management with Redux",
            icon: "",
            another: "",
        },
        {
            def: "Use of persistent data with Local Storage",
            icon: "",
            another: "",
        },
        {
            def: "Flipping cards, Scroll Effects, Parallax, Carousel, Neo-Morphism, 3D Elements, Modal Elements, Page Transitions, KeyFrames ",
            icon: "",
            another: "",
        },
    ];

    const typeList = [
        { typ: "FRONT END", pos: 1 },
        {
            /* { typ: "BACK_END", pos: 2 },
        { typ: "DEVOPS", pos: 3 },
        { typ: "GENERAL", pos: 4 }, */
        },
    ];

    return (
        <Section>
            <Margin>
                <Writes>
                    <Name>
                        <h2>SKILLS</h2>
                    </Name>

                    {typeList.map((item, index) => (
                        <Type key={index}>{item.typ}</Type>
                    ))}
                    {skillFront.map((skill, index) => (
                        <Skill key={index}>
                            <Icon></Icon>
                            <h4>{skill.def}</h4>
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
    padding: 20px 30px;
    margin: 0px 20px;

    h4 {
        color: black;
        // margin-bottom: 1em;
    }

    border: 1px solid hsla(340, 80%, 50%, 1);
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
const Skill = styled.div`
    margin: 20px 0px;

    display: flex;
    justify-content: start;
    align-items: center;

    // border: 1px solid blue;
`;
const Icon = styled.div`
    flex: 0 0 35px;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    clip-path: polygon(
        30% 0,
        100% 0,
        100% 0,
        100% 70%,
        70% 100%,
        0 100%,
        0 100%,
        0 30%
    );

    background: darkgreen;
`;
const Type = styled.div`
    position: absolute;
    top: 70px;
    left: 0px;
    width: fit-content;
    padding: 10px;

    color: black;
    transform: rotate(270deg) translateY(-170%);
    background: hsla(263, 0%, 95%, 1);
    border: 1px solid hsla(340, 80%, 50%, 1);
`;

import React from "react";
import { animated } from "react-spring";
import Link from "next/link";

import { below } from "../../styles/breakpoints";
import styled from "styled-components";

const Skillset = () => {
    return (
        <Section>
            <Margin>
                <Writes>
                    <Name>
                        <h2>SKILLS</h2>
                    </Name>
                    <Type>FRONT END</Type>
                    <Skill>
                        <Icon></Icon>
                        <h4>
                            Setup of all the technologies with Vanilla React,
                            Next.js and Typescript.
                        </h4>
                    </Skill>
                    <Skill>
                        <Icon></Icon>
                        <h4>
                            Flipping cards, Scroll Effects, Parallax, Carousel,
                            Neo-Morphism, 3D Elements, Modal Elements, Page
                            Transitions, KeyFrames.{" "}
                        </h4>
                    </Skill>
                    <h4>SOMETHING</h4>
                    <h4>SOMETHING</h4>
                    <h4>SOMETHING</h4>
                    <h4>SOMETHING</h4>
                    <h4>SOMETHING</h4>
                    <h4>SOMETHING</h4>
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
    top: -30px;
    padding: 0px 30px;

    background: hsla(263, 0%, 95%, 1);

    h2 {
        font-size: clamp(3em, 4vw, 6em);
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
    width: 30px;
    height: 30px;
    margin-right: 10px;

    flex: 0 0 30px;

    background: darkgreen;
`;
const Type = styled.div`
    position: absolute;
    top: 70px;
    left: -64px;
    width: fit-content;
    padding: 10px;

    color: black;
    transform: rotate(270deg);
    background: hsla(263, 0%, 95%, 1);
    border: 1px solid hsla(340, 80%, 50%, 1);
`;

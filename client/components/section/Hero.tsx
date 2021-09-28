import React, { useState, useEffect } from "react";
import Link from "next/link";
import { animated, useTransition, config } from "react-spring";
import styled from "styled-components";

import { below } from "../../styles/breakpoints";
import Btn3D from "../micro/button3D";

const Hero = () => {
    const roles = [
        "DEVOPS ENGINEER",
        "REACT DEVELOPER",
        "UX/UI DESIGNER",
        "BACK-END BUILDER",
    ];

    const [index, set] = useState(0);
    const loop = useTransition(index, {
        key: index,
        from: { opacity: 0, transform: "translate3d(0, -5vh, 0)" },
        enter: { opacity: 1, transform: "translate3d(0, 0em, 0)" },
        leave: { opacity: 0, transform: "translate3d(0, 50vh, 0)" },
        config: {
            tension: 280,
            friction: 9,
        },
    });
    useEffect(() => {
        const t = setInterval(
            () => set((state) => (state + 1) % roles.length),
            2500
        );
        return () => clearTimeout(t);
    }, []);

    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

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
        delay: 50,
        config: config.molasses,
    });

    const revME = useTransition(mount, {
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
        delay: 50,
        config: config.molasses,
    });

    return (
        <Section>
            <Margin>
                {revUP((styles, item) =>
                    item ? (
                        <Writes style={styles}>
                            <h4>I AM</h4>
                            <Name>MARCOS JAMPIETRI</Name>
                            <Role>
                                {loop((style, i) => (
                                    <animated.div
                                        style={{
                                            ...style,
                                            position: "absolute",
                                        }}
                                    >
                                        <h2>{roles[i]}</h2>
                                    </animated.div>
                                ))}
                            </Role>
                            <City>
                                <h3>BASED IN LONDON</h3>
                            </City>
                            <Link href="/portfolio">
                                <Button>Know My Work</Button>
                            </Link>
                        </Writes>
                    ) : null
                )}
                {revME((styles, item) =>
                    item ? (
                        <Me style={styles}>
                            <img src="/Pics/Hero-Me.jpg" />
                        </Me>
                    ) : null
                )}
            </Margin>
        </Section>
    );
};

export default Hero;

const Section = styled(animated.section)`
    position: relative;
    width: 100vw;
    height: 100%;
    min-height: 370px;
    z-index: 0;

    overflow: hidden;
    background-color: hsla(263, 39%, 10%, 1);

    :after {
        position: absolute;
        bottom: 0px;
        left: 50vw;
        content: "";
        height: 25vh;
        width: 1px;
        background: hsla(340, 100%, 50%, 1);
    }

    display: flex;
    justify-content: start;
    align-items: center;
`;

const Margin = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 20px auto;
`;

const Me = styled(animated.div)`
    position: absolute;
    bottom: 0px;
    max-width: 1000px;
    width: 100vw;
    height: 100vh;
    z-index: -1;

    pointer-events: none;

    ${below.med`
        
    `}

    img {
        position: absolute;
        bottom: 0px;
        right: 0vh;
        height: 100%;
        width: 100%;
        max-width: 500px;
        object-fit: cover;
        object-position: 100% 0%;

        mix-blend-mode: luminosity;

        ${below.small`

            
        `}
    }
`;

const Writes = styled(animated.div)`
    max-width: 500px;
    padding: 0px 20px;

    z-index: 100;

    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;

    h4,
    h5,
    h2,
    div {
        z-index: 3;
    }
    h5 {
        position: relative;
        left: 60px;
        max-width: 300px;
        text-align: justify;

        color: white;
        font-size: clamp(1em, 1vw, 2em);

        :before {
            position: absolute;
            top: 2px;
            left: -60px;
            content: "";
            height: 6px;
            width: 50px;
            background: hsl(340, 100%, 50%);
        }
    }
`;

const Name = styled.h2`
    font-size: clamp(1.5em, 10vw, 5em);
    background: -webkit-linear-gradient(
        120deg,
        hsl(340, 100%, 50%),
        hsl(350, 100%, 60%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    z-index: 2;
`;

const Role = styled.div`
    position: relative;
    width: 100vw;
    margin: 20px auto;

    h2 {
        font-size: clamp(1.5em, 2.5vw, 2.5em);
        font-weight: 900;
        text-shadow: 0px 0px 10px white;
    }
`;
const City = styled.div`
    position: relative;
    width: 100vw;
    margin: 5vh auto;

    h3 {
        font-size: clamp(1em, 2.5vw, 3em);
        font-weight: 500;
    }
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    background-color: hsla(340, 100%, 50%, 1);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
`;

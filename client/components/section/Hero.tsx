import React from "react";
import { animated } from "react-spring";
import Link from "next/link";

import { below } from "../../styles/breakpoints";
import styled from "styled-components";

const Hero = () => {
    return (
        <Section>
            <Margin>
                <Writes>
                    <h4>I AM</h4>
                    <Name>MARCOS JAMPIETRI</Name>
                    <h5>
                        I`&#39;`m a Full Stack Javascript Developer professional
                        based in London, UK; skilled in building and designing
                        exceptional websites, servers, and complete Multi-Cloud
                        DevOps infrastructures.
                    </h5>
                </Writes>
                <Me>
                    <img src="/Pics/Hero-Me.jpg" />
                </Me>
            </Margin>
        </Section>
    );
};

export default Hero;

const Section = styled(animated.section)`
    position: relative;
    width: 100vw;
    height: 100%;
    min-height: 500px;

    overflow: hidden;
    background-color: hsla(263, 39%, 10%, 1);

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
    margin: 20px auto;
`;

const Me = styled(animated.div)`
    position: absolute;
    bottom: 0px;
    max-width: 1000px;
    width: 100vw;
    height: 100vh;

    ${below.med`
    `}

    img {
        position: absolute;
        bottom: 0px;
        right: 0vh;
        height: 100%;
        object-fit: cover;
        object-position: 100% 0%;

        mix-blend-mode: luminosity;

        ${below.small`
            // top: 12vw;
            left: -25vw;
            
        `}
    }
`;

const Writes = styled(animated.div)`
    max-width: 500px;
    padding: 0px 20px;
    height: 35vh;
    z-index: 2;

    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;

    h4,
    h5 {
        z-index: 2;
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
        hsl(350, 100%, 50%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    z-index: 2;
`;

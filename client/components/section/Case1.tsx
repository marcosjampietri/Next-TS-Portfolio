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
            name: "Andrea Site",
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
                <div>
                    <h2>TITLE</h2>
                    {cases.map((item, index) => (
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
                    ))}
                </div>
                {transitions2((styles, item) =>
                    item ? (
                        <Writes style={styles}>
                            <h4>CASE_1 </h4>
                        </Writes>
                    ) : null
                )}
                {transitions((styles, item) =>
                    item ? <Box style={styles}></Box> : null
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
    min-height: 500px;

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

    display: flex;
    justify-content: center;
    align-items: center;

    perspective: 800px;
    h4,
    h2 {
        color: black;
    }
`;

const Writes = styled(animated.div)`
    border: 1px solid black;
`;

const Pair = styled(animated.div)`
    h3,
    h4 {
        color: black;
    }
    border: 1px solid red;
    display: flex;
`;

const Box = styled(animated.div)`
    background-color: red;
    border: 1px solid black;
    width: 70vw;
    height: 50vh;
`;

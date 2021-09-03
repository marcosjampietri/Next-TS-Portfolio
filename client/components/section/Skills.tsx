import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/reducers/rootReducer";
import { filterAction } from "../../store/actions/filterActions";
import { useTrail, useTransition, animated, config } from "react-spring";
import Link from "next/link";

import { below } from "../../styles/breakpoints";
import styled from "styled-components";

const Skillset = () => {
    const dispatch = useDispatch();

    const allSkills = [
        {
            typ: "FRONT",
            def: "Setup of all the technologies with Vanilla React, Next.js and Typescript",
            icon: "nxt",
            color: "",
        },
        {
            typ: "FRONT",
            def: "Fluid Responsiveness without Bootstrap/Tailwind/Material UI",
            icon: "brn",
            color: "",
        },
        {
            typ: "FRONT",
            def: "Use of Styled-Components ",
            icon: "stc",
            color: "",
        },
        {
            typ: "FRONT",
            def: "Smooth and organic animations using React-Spring",
            icon: "skt",
            color: "",
        },
        {
            typ: "FRONT",
            def: "Complex state management with Redux",
            icon: "rdx",
            color: "",
        },
        {
            typ: "FRONT",
            def: "Use of persistent data with Local Storage",
            icon: "dkr",
            color: "",
        },
        {
            typ: "FRONT",
            def: "Flipping cards, Scroll Effects, Parallax, Carousel, Neo-Morphism, 3D Elements, Modal Elements, Page Transitions, KeyFrames ",
            icon: "css",
            color: "",
        },
        {
            typ: "BACK",
            def: "Stripe customised payment form with server integration",
            icon: "stp",
            color: "",
        },
        {
            typ: "BACK",
            def: "JWT user authentication system with encrypted data saving",
            icon: "jwt",
            color: "",
        },
        {
            typ: "BACK",
            def: "Robust Validation and user input",
            icon: "unr",
            color: "",
        },
        {
            typ: "BACK",
            def: "MongoDB operations and query system with mongoose",
            icon: "mdb",
            color: "",
        },
        {
            typ: "DEVOPS",
            def: "Multi-Cloud: Project built on multiple cloud services and integration with AWS and Digital Ocean",
            icon: "dto",
            color: "",
        },
        {
            typ: "DEVOPS",
            def: "Linux virtual machines provisioning of instances with Ansible running on remote server",
            icon: "anb",
            color: "",
        },
        {
            typ: "DEVOPS",
            def: "Infrastructure creation and management via Code with Terraform",
            icon: "tfm",
            color: "",
        },
        {
            typ: "DEVOPS",
            def: "IAM User and Permission configurations",
            icon: "cst",
            color: "",
        },
        {
            typ: "DEVOPS",
            def: "EC2 and Elastic Beanstalk Instance setup for Node, Docker and Python Applications",
            icon: "aws",
            color: "",
        },
        {
            typ: "DEVOPS",
            def: "Docker, Dockerhub, Dockerfile",
            icon: "dkr",
            color: "",
        },
        {
            typ: "DEVOPS",
            def: "Jenkins, groovy script",
            icon: "jks",
            color: "",
        },
        {
            typ: "GENERAL",
            def: "MAC OS",
            icon: "mac",
            color: "",
        },
        {
            typ: "GENERAL",
            def: "NPM, node and Dependencies management",
            icon: "npm",
            color: "",
        },
        {
            typ: "GENERAL",
            def: "AWS CLI and Excellent knowledge of Command Lines",
            icon: "aws",
            color: "",
        },
        {
            typ: "GENERAL",
            def: "Vim Editor",
            icon: "lnx",
            color: "",
        },
        {
            typ: "GENERAL",
            def: "AWS CLI and Excellent knowledge of Command Lines",
            icon: "aws2",
            color: "",
        },
        {
            typ: "GENERAL",
            def: "Ubuntu/Linux Machine Setup / Installations and files and folder structure",
            icon: "ubn",
            color: "",
        },
    ];

    const typeList = [
        { typ: "GENERAL", pos: 4 },
        { typ: "DEVOPS", pos: 3 },
        { typ: "BACK", pos: 2 },
        { typ: "FRONT", pos: 1 },
    ];

    const { activeSkill } = useSelector((state: AppState) => state.filt);

    const filteredSkills = allSkills.filter(
        (item, i) => item.typ === activeSkill
    );

    const [trail, api] = useTrail(filteredSkills.length, (i) => ({
        opacity: 0,
        x: 30,
    }));

    useEffect(() => {
        api.start({ opacity: 1, x: 0 });
    }, [activeSkill]);

    return (
        <Section>
            <Margin>
                <Writes>
                    <Name>
                        <h2>SKILLS</h2>
                    </Name>
                    <Type>
                        {typeList.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    dispatch(filterAction(item.typ));
                                }}
                            >
                                {item.typ}
                            </div>
                        ))}
                    </Type>
                    <List>
                        {trail.map(({ x, ...otherProps }, i) => (
                            <Skill
                                key={i}
                                style={{
                                    ...otherProps,
                                    background: `${filteredSkills[i].color}`,
                                    transform: x.to(
                                        (x) => `translate3d(${x}vw, 0, 0)`
                                    ),
                                }}
                            >
                                <Icon
                                    src={`/Icons/${filteredSkills[i].icon}.svg`}
                                    alt="icon"
                                    width="60px"
                                ></Icon>
                                <h4>{filteredSkills[i].def}</h4>
                            </Skill>
                        ))}
                    </List>
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

const List = styled(animated.div)`
    position: absolute;
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

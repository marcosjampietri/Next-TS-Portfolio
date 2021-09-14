import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/reducers/rootReducer";

import { useTrail, useTransition, animated, config } from "react-spring";

import { below } from "../../styles/breakpoints";
import styled from "styled-components";

type Props = {
    data: {
        typ: string;
        def: string;
        icon: string;
        color: string;
    }[];
};

const Skills = ({ data }: Props) => {
    const backSkills = [
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
    ];

    const devSkills = [
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
    ];

    const genSkills = [
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

    const { activeSkill, index } = useSelector((state: AppState) => state.filt);

    const [trail, api] = useTrail(data.length, (i) => ({
        opacity: 0,
        x: 30,
    }));

    useEffect(() => {
        api.start({ opacity: 1, x: 0 });
    }, [activeSkill, index, data]);

    return (
        <SklList>
            {trail.map(({ x, ...otherProps }, i) => (
                <Skill
                    key={i}
                    style={{
                        ...otherProps,
                        background: `${data[i].color}`,
                        transform: x.to((x) => `translate3d(${x}vw, 0, 0)`),
                    }}
                >
                    <Icon
                        src={`/Icons/${data[i].icon}.svg`}
                        alt="icon"
                        width="60px"
                    ></Icon>
                    <h4>{data[i].def}</h4>
                </Skill>
            ))}
        </SklList>
    );
};

export const Skill1 = () => {
    const frontSkills = [
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
    ];

    return <Skills data={frontSkills} />;
};

const SklList = styled(animated.ul)`
    width: 100%;
    height: 100%;

    z-index: 2;

    h4 {
        color: black;
        // margin-bottom: 1em;
    }

    background: hsla(280, 20%, 50%, 0);

    border-radius: 5px;

    display: flex;
    flex-direction: column;
`;

const Skill = styled(animated.li)`
    height: 35px;
    font-size: clamp(0.5em, 1.5vw, 3em);
    font-weight: 500;
    margin: 0.8em 0px;

    transform: translate3d(0, 0vh, 0);

    display: flex;
    justify-content: start;
    align-items: center;
`;
const Icon = styled.img`
    flex: 0 0 35px;
    width: 35px;
    height: 35px;
    margin-right: 20px;
`;

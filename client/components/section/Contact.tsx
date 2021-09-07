import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import {
    FiMapPin,
    FiMail,
    FiPhone,
    FiInstagram,
    FiLinkedin,
    FiGithub,
} from "react-icons/fi";

import { below } from "../../styles/breakpoints";

const Contacts: NextPage = () => {
    const socials = [
        {
            name: "instagram",
            icon: <FiInstagram />,
            ref: "https://www.instagram.com/marcosjampietri/",
        },
        {
            name: "linkdin",
            icon: <FiLinkedin />,
            ref: "https://www.linkedin.com/in/marcos-jampietri-9942115b/",
        },
        {
            name: "github",
            icon: <FiGithub />,
            ref: "https://github.com/marcosjampietri",
        },
    ];

    const contacts = [
        {
            name: "Camden Town, London, UK",
            icon: <FiMapPin />,
            ref: "https://www.instagram.com/marcosjampietri/",
        },
        {
            name: "mgjampietri@gmail.com",
            icon: <FiMail />,
            ref: "https://www.linkedin.com/in/marcos-jampietri-9942115b/",
        },
        {
            name: "+44 077",
            icon: <FiPhone />,
            ref: "https://github.com/marcosjampietri",
        },
    ];

    return (
        <Section>
            <Margin>
                <Outline>
                    <div>
                        <BoxT>
                            <Text>
                                <h4>
                                    MARCOS
                                    <br /> JAMPIETRI
                                </h4>
                                <p>
                                    Get in touch with me. I&apos;m sure I can be
                                    helpful for your business, company or
                                    project.
                                </p>
                            </Text>
                            <List>
                                {contacts.map((item, index) => (
                                    <Line key={index}>
                                        <div>{item.icon}</div>
                                        <h5>{item.name}</h5>
                                    </Line>
                                ))}
                            </List>

                            <Social>
                                {socials.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.ref}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {item.icon}
                                        <h5>{item.name}</h5>
                                    </a>
                                ))}
                            </Social>
                        </BoxT>
                        <BoxI>
                            <ServImg src="https://images.unsplash.com/flagged/photo-1595543922540-d03c3d5a684a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80" />
                        </BoxI>
                    </div>
                </Outline>
            </Margin>
        </Section>
    );
};

export default Contacts;

const Section = styled.section`
    position: relative;
    width: 100vw;
    height: 100%;
    min-height: 500px;

    overflow: hidden;
    background-color: hsla(263, 39%, 10%, 1);

    display: flex;
    justify-content: start;
    align-items: center;
`;

const Margin = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0px auto;
    .inverted {
        flex-direction: row-reverse;
    }
`;

const Outline = styled.div`
    margin: 75px;
    padding: calc(25px + 2.5vw) 0px;

    outline: 1px solid hsl(340, 100%, 50%);
    outline-offset: -40px;
    div {
        display: flex;

        flex-wrap: wrap;
    }
`;
const BoxT = styled.div`
    flex: 1 1 481px;
    margin: 30px 0;
    padding: 20px;

    backdrop-filter: blur(20px);
    background-color: hsla(220, 10%, 80%, 0.5);
    border-radius: 10px;
`;

const Text = styled.div`
    h4 {
        padding: 0px 0px 25px 0px;
        font-size: 1.5em;
        font-weight: 600;
    }

    p {
        padding: 0px 0px 25px 50px;
        font-size: 0.8em;
        max-width: 450px;
    }
`;
const List = styled.div`
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
    padding: 25px 0px 25px 0px;
`;
const Line = styled.div`
    width: 100%;
    height: 30px;
    padding: 25px 0px;

    svg {
        margin: 0 20px 0px 0px;
        width: 30px;
        height: 100%;
    }

    display: flex;
    align-items: center;
`;
const Social = styled.ul`
    width: 60%;
    margin: 0px auto;
    padding: 20px 0px;

    display: flex;
    justify-content: space-between;

    ${below.med`
 
   `};

    a {
        text-align: center;
        padding: 10px;
        h5 {
        }
    }
`;

const BoxI = styled.div`
    flex: 1 1 480px;
    position: relative;
    height: 500px;
`;

const ServImg = styled.img`
    width: 130%;
    height: 100%;
    transform: translateX(-11.5%);

    object-fit: cover;
    object-position: 50% 20%;
    mix-blend-mode: luminosity;

    box-shadow: 5px 12px 30px hsla(0, 0%, 0%, 0.99);
`;
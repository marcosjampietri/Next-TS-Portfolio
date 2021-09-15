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
            name: "mgjampietri@hotmail.com",
            icon: <FiMail />,
            ref: "https://www.linkedin.com/in/marcos-jampietri-9942115b/",
        },
    ];

    return (
        <Section>
            <Margin>
                <Outline>
                    <BoxT>
                        <Text>
                            <h4>
                                MARCOS
                                <br /> JAMPIETRI
                            </h4>
                            <p>
                                Get in touch with me. I&apos;m sure I can be
                                helpful for your business, company or project.
                            </p>
                        </Text>

                        <List>
                            {contacts.map((item, index) => (
                                <Line key={index}>
                                    <div>{item.icon}</div>
                                    <h5>{item.name}</h5>
                                </Line>
                            ))}
                            <Line>
                                <div>
                                    <FiPhone />
                                </div>
                                <h5>+44 07541 505 202</h5>
                            </Line>
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
                        <ServImg src="/Pics/ipad-my.jpg" />
                    </BoxI>
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

    overflow-x: hidden;
    background-color: hsla(263, 39%, 10%, 1);
`;

const Margin = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0px auto;
`;

const Outline = styled.div`
    padding: calc(25px + 2.5vw) 0px;

    outline: 1px solid hsl(340, 100%, 50%);
    outline-offset: -40px;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
const BoxT = styled.div`
    width: 100%;
    height: 450px;
    flex: 1 1 481px;
    margin: 30px 5px;
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
        padding: 0px 0px 25px 30px;
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
    width: 100%;
    max-width: 400px;
    margin: 0px auto;
    padding: 20px 0px;

    display: flex;
    justify-content: space-between;

    ${below.med`
 
   `};

    a {
        text-align: center;
        padding: 10px;
    }
`;

const BoxI = styled.div`
    flex: 1 1 480px;
    position: relative;

    background-color: hsla(263, 39%, 10%, 1);
`;

const ServImg = styled.img`
    width: 120%;
    height: 70%;
    transform: translateX(-10%);

    object-fit: cover;
    object-position: 50% 20%;
    border-radius: 25px;
    // mix-blend-mode: luminosity;

    box-shadow: 5px 12px 30px hsla(0, 0%, 0%, 0.99);
`;

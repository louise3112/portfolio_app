import { InlineIcon } from "@iconify/react"
import linkedinIcon from '@iconify/icons-logos/linkedin-icon'
import githubIcon from '@iconify/icons-logos/github-icon'

import styled from "styled-components"

const HeaderSection = styled.div`
    background-color: #7d0068;
    color: #fff8fc;
    padding: 0.5em 4em 0.5em 4em;
    display: grid;
    grid-template-columns: 80% 10% 10%;
    grid-template-areas:
        "heading linkedin github"
        "subheading linkedin github"
        "text text text";

    @media only screen and (max-width: 900px) {
        grid-template-columns: 76% 4% 8% 4% 8%;
        grid-template-areas:
            "heading . linkedin . github"
            "subheading . linkedin . github"
            "text text text text text";
    }
`

const Heading = styled.h1`
    font-size: 2em;
    margin: 0.5em 0em 0em 0em;
    grid-area: heading;

    @media only screen and (max-width: 900px) {
        font-size: 1.6em;
    }
`

const SubHeading = styled.h2`
    font-size: 1.5em;
    margin: 0.5em 0em 0em 0em;
    grid-area: subheading;

    @media only screen and (max-width: 900px) {
        font-size: 1.25em;
    }
`

const HeaderLinkedin = styled.a`
    grid-area: linkedin;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderGithub = styled.a`
    grid-area: github;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderText = styled.p`
    font-size: 1.25em;
    grid-area: text;

    @media only screen and (max-width: 900px) {
        font-size: 1.1em;
    }
`

const Header = () => {
    return (
        <HeaderSection>
            <Heading>Louise Cuthbertson </Heading>
            <SubHeading>Software Developer in Edinburgh</SubHeading>
            <HeaderLinkedin href="https://www.linkedin.com/in/louise3112" target="_blank"><InlineIcon icon={linkedinIcon} height="4em" width="4em"/></HeaderLinkedin>
            <HeaderGithub href="https://github.com/louise3112" target="_blank"><InlineIcon icon={githubIcon} height="4em" width="4em"/></HeaderGithub>

            <HeaderText> Strong analytical background with an exceptional eye for detail. I am currently looking for a new challenge that will allow me to combine my love of coding and debugging with my passion for solving logic-based problems. </HeaderText>

        </HeaderSection>
    )
}

export default Header
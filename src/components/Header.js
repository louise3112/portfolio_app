import linkedinIcon from "../images/linkedinIcon.png"
import githubIcon from "../images/githubIcon.png"
// <a target="_blank" href="https://icons8.com/icon/3tC9EQumUAuq/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> 

import styled from "styled-components"

const HeaderSection = styled.div`
    background-color: #7d0068;
    color: #fff8fc;
    padding: 1.75em 4em 1em 4em;
    display: grid;
    grid-template-columns: 1fr 5em 5em;
    grid-template-areas:
        "heading linkedin github"
        "subheading linkedin github"
        "text text text";
    column-gap: 2em;
    
    @media only screen and (max-width: 1000px) {
        padding: 1.25em 1.5em 1em 1.5em;
        column-gap: 1em;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr 3em 3em;
        grid-template-areas:
            "heading linkedin github"
            "subheading subheading subheading"
            "text text text";
    }

    @media only screen and (max-width: 450px) {
        grid-template-columns: 1fr 3em;
        grid-template-areas:
            "heading linkedin"
            "subheading github"
            "text text";
    }
`

const Heading = styled.h1`
    grid-area: heading;
    font-size: 2em;
    margin: 0;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1000px) {
        font-size: 1.6em;
    }
`

const SubHeading = styled.h2`
    font-size: 1.5em;
    margin: 0.5em 0em 0em 0em;
    grid-area: subheading;

    @media only screen and (max-width: 1000px) {
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

const ContactLogo = styled.img`
    width: 5em;

    @media only screen and (max-width: 1000px) {
        width: 4em;
    }

    @media only screen and (max-width: 600px) {
        width: 3em;
    }
`

const HeaderText = styled.p`
    font-size: 1.25em;
    grid-area: text;

    @media only screen and (max-width: 1000px) {
        font-size: 1.1em;
    }
`

const Header = () => {
    return (
        <HeaderSection>
            <Heading>Louise Cuthbertson </Heading>
            <SubHeading>Software Developer &nbsp;&nbsp;|&nbsp;&nbsp; Edinburgh</SubHeading>

            <HeaderLinkedin href="https://www.linkedin.com/in/louise3112" target="_blank"><ContactLogo  src={linkedinIcon} /></HeaderLinkedin>
            <HeaderGithub href="https://github.com/louise3112" target="_blank"><ContactLogo  src={githubIcon}/></HeaderGithub>

            <HeaderText> Strong analytical background with an exceptional eye for detail. I am currently looking for a new challenge that will allow me to combine my love of coding and debugging with my passion for solving logic-based problems. </HeaderText>

        </HeaderSection>
    )
}

export default Header
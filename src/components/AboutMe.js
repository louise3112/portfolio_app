import { InlineIcon } from "@iconify/react"
import linkedinIcon from '@iconify/icons-logos/linkedin-icon'
import githubIcon from '@iconify/icons-logos/github-icon'

import styled from "styled-components"

const AboutMeSection = styled.div`
    background-color: #7d0068;
    color: #feeef7;
    padding: 2em 4em 2em 4em;
    display: grid;
    grid-template-columns: 80% 10% 10%;
    grid-template-areas:
        "heading linkedin github"
        "subheading linkedin github"
        "text text text";
`

const AboutMeHeading = styled.h1`
    font-size: 2em;
    color: #feeef7;
    margin: 0.5em 0em 0em 0em;
    grid-area: heading;
`

const AboutMeSubHeading = styled.h2`
    font-size: 1.5em;
    color: #feeef7;
    margin: 0.5em 0em 0em 0em;
    grid-area: subheading;
`

const AboutMeLinkedin = styled.a`
    grid-area: linkedin;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AboutMeGithub = styled.a`
    grid-area: github;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AboutMeText = styled.p`
    font-size: 1.25em;
    grid-area: text;
`

const AboutMeLink = styled.a`
    color: #FFFFFF;
    cursor: pointer;
`

const AboutMe = () => {
    return (
        <AboutMeSection>
            <AboutMeHeading>Louise Cuthbertson </AboutMeHeading>
            <AboutMeSubHeading>Software Developer in Edinburgh</AboutMeSubHeading>
            <AboutMeLinkedin href="www.linkedin.com/in/lcuthbertson3112" target="_blank"><InlineIcon icon={linkedinIcon} height="4em" width="4em"/></AboutMeLinkedin>
            <AboutMeGithub href="https://github.com/louise3112" target="_blank"><InlineIcon icon={githubIcon} height="4em" width="4em"/></AboutMeGithub>

            <AboutMeText> Having spent almost ten years as a statistician, I decided it was time for a new challenge that allowed me to focus more on my existing passion for coding and solving logic-based problems. At the end of 2022, I started an intensive 16 week Professional Software Development course at <AboutMeLink href="https://codeclan.com/" target="_blank">CodeClan</AboutMeLink> so I could develop the skills needed to refocus my career into the Tech Industry. </AboutMeText>
        </AboutMeSection>
    )
}

export default AboutMe
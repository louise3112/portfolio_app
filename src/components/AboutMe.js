import styled from "styled-components"

const AboutMeSection = styled.div`
    padding: 1.5em 4em 2em 4em;

    @media only screen and (max-width: 1000px) {
        padding: 1em 1.5em 1.5em 1.5em;
    }
`

const AboutMeHeading = styled.h2`
    color: #7d0068;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0em 0em 1em 0em;
`

const AboutMeText = styled.p`
    font-size: 1em;
    margin: 1.5em 0em 0em 0em;
`

const AboutMeLink = styled.a`
    color: black;
    cursor: pointer;
`

const AboutMe = () => {
    return (
        <AboutMeSection>
            <AboutMeHeading>ABOUT ME</AboutMeHeading>
            <AboutMeText>Having spent over 9 years' as a statistician in the public sector, I wanted a new challenge. Reflecting on my varied analytical roles, I had always gained most satisfaction from projects that allowed me significant opportunities to code, including implementing new code to automate processes; updating legacy code to reflect changes in requirements; training colleagues in using analytical coding softwares, including SAS and VBA.</AboutMeText>

            <AboutMeText>This love of coding, combined with a natural passion for solving problems (I'm an escape room fanatic with a 100% escape record!) led me to look into changing careers to software development and at the end of 2022, I started an intensive 16 week Professional Software Development course at <AboutMeLink href="https://codeclan.com/" target="_blank">CodeClan</AboutMeLink>. This portfolio reflects the projects I have completed since starting my software development journey.</AboutMeText>
        </AboutMeSection>
    )
}

export default AboutMe
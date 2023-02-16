import cardGames from '../images/cardGames.png'
import droidWorkshop from '../images/droidWorkshop.png'
import countriesQuiz from '../images/countriesQuiz.png'

import styled from "styled-components"

const ProjectsSection = styled.div`
    padding: 1em 4em 1em 4em;
`

const ProjectsHeading = styled.h2`
    color: #7d0068;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0em 0em 1em 0em;
`

const ProjectsList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    row-gap: 2em;
    color: black;
`

const ProjectBox = styled.li`
    display: grid;
    grid-template-areas: 'info . image .';
    grid-template-columns: 65% 3% 30% 2%;
    align-items: center;

    @media only screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 1em;
    }
`

const ProjectInfo = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;
    padding: 0em 1em 0em 1em;
`

const ProjectLink = styled.a`
    grid-area: image;

    @media only screen and (max-width: 900px) {
        height: auto;
        width: 80%;
    }
`

const NoLink = styled.div`
    grid-area: image;

    @media only screen and (max-width: 900px) {
        height: auto;
        width: 80%;
    }
`

const ProjectHeading = styled.h4`
    color: #7d0068;
    font-size: 1.2em;
    margin: 0em 0em 0.5em 0em;
`

const ProjectText = styled.p`
    font-size: 1em;
    margin: 0em 0em 1em 0em;
`

const TextLinks = styled.a`
    text-decoration: underline;
    color: black;
    cursor: pointer;
`

const GitHubLinks = styled.a`
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    text-align: center;
    background-color: #7d0068;
    color: #fff8fc;
    padding: 0.5em 0em 0.5em 0em;
`

const ProjectImage = styled.img`
    height: auto;
    max-width: 100%;
    border: 0.5px solid grey;
    border-radius: 2%;
`

const LineBreak = styled.hr`
    border-top: 2px solid #7d0068;
    border-left: none;
    margin-top: 0;
    margin-bottom: 0;
    width: 80%;

    @media only screen and (max-width: 900px) {
        width: 85%;
    }
`


const Projects = () => {
    return (
        <ProjectsSection>
            <ProjectsHeading>PROJECTS</ProjectsHeading>
            <ProjectsList>

                <ProjectBox>
                    <ProjectInfo>
                        <ProjectHeading>geograPHUN</ProjectHeading>
                        <ProjectText><b>1 week group project in JavaScript / React, MongoDB & CSS </b></ProjectText>
                        <ProjectText>For my JavaScript group project at CodeClan, we designed an app using the <TextLinks href="https://restcountries.com/#api-endpoints-v3-all" target="_blank">Countries API data</TextLinks> where users could play interactive quiz games, see their results (even if they refreshed the app) and view underlying information for each country so they can improve their scores.</ProjectText>

                        <ProjectText>A video capturing the functionality of this app can be found on linkedin by clicking on the image.</ProjectText>
                        <GitHubLinks href="https://github.com/louise3112/countries_quiz" target="_blank">See full code on GitHub</GitHubLinks>
                    </ProjectInfo>
                    <ProjectLink href="https://www.linkedin.com/feed/update/urn:li:activity:7031994797494005762/" target="_blank">
                        <ProjectImage src={countriesQuiz} alt="Screenshot of geograPHUN app"/>
                    </ProjectLink>
                </ProjectBox>

                <LineBreak />

                <ProjectBox>
                    <ProjectInfo>
                        <ProjectHeading>Card Games</ProjectHeading>
                        <ProjectText><b>1 day solo project in JavaScript / React & CSS </b></ProjectText>
                        <ProjectText>A self-determined solo 1-day project made during the JavaScript module of the CodeClan Professional Software Development course to design an app using JavaScript / React and the <TextLinks href="https://www.deckofcardsapi.com/" target="_blank">Deck of Cards API</TextLinks>.</ProjectText>

                        <ProjectText>The current version of the app contains a single card game based on the "52 card pick-up" idea. The app has been designed in a way to ensure it is fairly adaptable to being expanded for further card games at a later date.</ProjectText>

                        <ProjectText>A live copy of this app can be accessed by clicking on the image. </ProjectText>

                        <GitHubLinks href="https://github.com/louise3112/card_games" target="_blank">See full code on GitHub</GitHubLinks>
                    </ProjectInfo>
                    <ProjectLink href="https://louise3112.github.io/card_games/" target="_blank">
                        <ProjectImage src={cardGames} alt="Screenshot of Card Games app"/>
                    </ProjectLink>
                </ProjectBox>

                <LineBreak />

                <ProjectBox>
                    <ProjectInfo>
                        <ProjectHeading>Droid Repair Workshop</ProjectHeading>
                        <ProjectText><b>1 week solo project using Python / Flask, PostgreSQL & CSS</b></ProjectText>
                        <ProjectText>For my first project at CodeClan, I developed a full stack Python app. The initial brief was to ensure the app could manage CRUD actions for technicians, droids and droid owners at a droid repair workshop.</ProjectText>

                        <ProjectText>Within the timeframe, I was able to further extend this to incorporate CRUD actions for services available at the workshop as well.</ProjectText>
                        <GitHubLinks href="https://github.com/louise3112/droid_workshop" target="_blank">See full code on GitHub</GitHubLinks>
                    </ProjectInfo>
                    <NoLink>
                        <ProjectImage src={droidWorkshop} alt="Screenshot of Droid Repair Workshop app"/>
                    </NoLink>
                </ProjectBox>


            </ProjectsList>

        </ProjectsSection>
    )
}

export default Projects
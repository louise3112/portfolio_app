import cardGames from '../images/cardGames.png'
// import droidWorkshop from '../images/droidWorkshop.png'
import countriesQuiz from '../images/countriesQuiz.png'
import testingTunes from '../images/testingTunes.png'

import droidWorkshopVid from '../videos/droidWorkshop.mov'
// import geographunVid from '../videos/geographun.mov'

import styled from "styled-components"

const ProjectsSection = styled.div`
    padding: 1em 4em 1em 4em;

    @media only screen and (max-width: 1000px) {
        padding: 1em 1.5em 1em 1.5em;
    }
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
    grid-template-columns: 60% 3% 35% 2%;
    align-items: center;

    @media only screen and (max-width: 900px) {
        grid-template-areas: 
            'info info info'
            '. image .';
        grid-template-columns: 10% 80% 10%;
        row-gap: 1em;
    }
`

const ProjectInfo = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;
    padding: 0em 1em 0em 1em;
`

const ProjectHeading = styled.h4`
    color: #7d0068;
    font-size: 1.25em;
    margin: 0em 0em 0.5em 0em;
`

const ProjectText = styled.p`
    font-size: 1.15em;
    margin: 0em 0em 1em 0em;

    @media only screen and (max-width: 1000px) {
        font-size: 1em;
    }
`

const TextLinks = styled.a`
    text-decoration: underline;
    color: black;
    cursor: pointer;
`

const ProjectLinksDiv = styled.div`
    display: flex;
    column-gap: 2em;

    @media only screen and (max-width: 900px) {
        justify-content: center;
    }

    @media only screen and (max-width: 535px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 0.5em;
    }
`

const ProjectLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    width: 14em;
    text-align: center;
    background-color: #7d0068;
    color: #fff8fc;
    border-radius: 5px;
    padding: 0.6em 1em 0.6em 1em;

    @media only screen and (max-width: 1000px) {
        font-size: 0.8em;
    }
`

const ProjectImage = styled.img`
    grid-area: image;
    height: auto;
    max-width: 100%;
    border: 1px solid lightgrey;
    border-radius: 2%;
`

const ProjectVideo = styled.video`
    grid-area: image;
    height: auto;
    max-width: 100%;
    border: 1px solid lightgrey;
    border-radius: 2%;
`

const LineBreak = styled.hr`
    border-top: 2px solid #7d0068;
    border-left: none;
    margin-top: 0;
    margin-bottom: 0;
    width: 80%;

    @media only screen and (max-width: 1000px) {
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
                        <ProjectText>Our second project at CodeClan was an app using the <TextLinks href="https://restcountries.com/#api-endpoints-v3-all" target="_blank">Countries API data</TextLinks> where users could play interactive quiz games, see their results (even if they refreshed the app) and view underlying information for each country so they can improve their scores.</ProjectText>

                        <ProjectText>I completed a personal extension to refactor the front-end code for this project to ensure it was DRY, more reusable and to allow me to host a demo version of the app via Github pages. I found this really useful to consolidate my learning from the project.</ProjectText>

                        <ProjectLinksDiv>
                            <ProjectLink href="https://github.com/louise3112/countries_quiz" target="_blank">See full code on GitHub</ProjectLink>
                            <ProjectLink href="https://louise3112.github.io/geographun-demo" target="_blank">Go to front end demo</ProjectLink>
                        </ProjectLinksDiv>
                    </ProjectInfo>
                    {/* <ProjectVideo src={geographunVid} alt="Short video of the geograPHUN app" controls="controls"/> */}
                    <ProjectImage src={countriesQuiz} alt="Screenshot of geograPHUN app"/>
                </ProjectBox>

                <LineBreak />

                <ProjectBox>
                    <ProjectInfo>
                        <ProjectHeading>Testing Tunes</ProjectHeading>
                        <ProjectText><b>Weekend solo project in JavaScript / React, Jest, Cypress, CircleCI & AWS </b></ProjectText>
                        <ProjectText>This was a personal project I chose to focus on testing and applying CI / CD principles. The testing packages I used were Jest (unit testing) and Cypress (end-to-end testing), alongside CircleCI to support CI / CD. The live app is hosted via AWS using S3.</ProjectText>

                        <ProjectText>The app itself is a front-end JavaScript / React app that uses the iTunes API to display the current top 20. I have also incorporated the ability to listen to a demo of each song, and to view the genre-specific top 20 for all genres that appear in the overall top 20. The design of the app was inspired by an old Top of the Pops logo.</ProjectText>

                        <ProjectLinksDiv>
                            <ProjectLink href="https://github.com/louise3112/Testing_Tunes" target="_blank">See full code on GitHub</ProjectLink>
                            <ProjectLink href="http://testing-tunes-lc.s3-website.eu-west-2.amazonaws.com/" target="_blank">Go to live app</ProjectLink>
                        </ProjectLinksDiv>
                    </ProjectInfo>
                    <ProjectImage src={testingTunes} alt="Screenshot of CircleCI during build"/>
                </ProjectBox>

                <LineBreak />

                <ProjectBox>
                    <ProjectInfo>
                        <ProjectHeading>Card Games</ProjectHeading>
                        <ProjectText><b>1 day solo project in JavaScript / React & CSS </b></ProjectText>
                        <ProjectText>A self-determined solo 1-day project made during the JavaScript module of the CodeClan Professional Software Development course to design an app using JavaScript / React and the <TextLinks href="https://www.deckofcardsapi.com/" target="_blank">Deck of Cards API</TextLinks>.</ProjectText>

                        <ProjectText>The current version of the app contains a single card game based on the "52 card pick-up" idea. The app has been designed in a way to ensure it is fairly adaptable to being expanded for further card games at a later date.</ProjectText>

                        <ProjectLinksDiv>
                            <ProjectLink href="https://github.com/louise3112/card_games" target="_blank">See full code on GitHub</ProjectLink>
                            <ProjectLink href="https://louise3112.github.io/card_games/" target="_blank">Go to live app</ProjectLink>
                        </ProjectLinksDiv>
                    </ProjectInfo>
                    <ProjectImage src={cardGames} alt="Screenshot of Card Games app"/>
                </ProjectBox>

                <LineBreak />

                <ProjectBox>
                    <ProjectInfo>
                        <ProjectHeading>Nuts 'n' Bots Droid Repair Workshop</ProjectHeading>
                        <ProjectText><b>1 week solo project using Python / Flask, PostgreSQL & CSS</b></ProjectText>
                        <ProjectText>For my first project at CodeClan, I developed a full stack Python app. The initial brief was to ensure the app could manage CRUD actions for technicians, droids and droid owners at a droid repair workshop.</ProjectText>

                        <ProjectText>Within the timeframe, I was able to further extend this to incorporate CRUD actions for services available at the workshop as well.</ProjectText>

                        <ProjectLinksDiv>
                            <ProjectLink href="https://github.com/louise3112/droid_workshop" target="_blank">See full code on GitHub</ProjectLink>
                        </ProjectLinksDiv>
                    </ProjectInfo>
                    <ProjectVideo src={droidWorkshopVid} alt="Short video of the droid repair workshop app" controls="controls"/>
                </ProjectBox>


            </ProjectsList>

        </ProjectsSection>
    )
}

export default Projects
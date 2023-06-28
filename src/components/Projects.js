import cardGames from '../images/cardGames.png'
// import droidWorkshop from '../images/droidWorkshop.png'
// import countriesQuiz from '../images/countriesQuiz.png'
import testingTunes from '../images/testingTunes.png'
import ddcElementor from '../images/ddcElementor.png'

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
    column-gap: 1em;

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
    width: 10em;
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
const ProjectVideoBox = styled.div`
    grid-area: image;
    max-width: 100%;
`
const ProjectVideo = styled.iframe`
    height: auto;
    width: 100%;
    aspect-ratio: 25 / 13.5;
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
                        <ProjectHeading>Dunbar Day Centre Website</ProjectHeading>
                        <ProjectText><b>10 week STA project in Wordpress & Elementor</b></ProjectText>
                        <ProjectText>A bespoke website developed in partnership with <TextLinks href="https://www.scottishtecharmy.org/" target="_blank">the STA</TextLinks> and Dunbar Day Centre, with a focus on helping the day centre increase their online reach.</ProjectText>

                        <ProjectText>As this was the first STA project I've been involved in, I took some time to learn the fundamentals of Wordpress and Elementor - the preferred tools for this kind of STA project. I contributed to the design and creation of content, whilst ensuring the site had high readability and SEO scores. </ProjectText>

                        <ProjectText>I really enjoyed the opportunity to build something to meet real-life users' needs and to get real-time feedback from the day centre staff who would be managing the website once it was up and running!</ProjectText>

                        <ProjectLinksDiv>
                            <ProjectLink href="" target="_blank">Live Site</ProjectLink>
                        </ProjectLinksDiv>
                    </ProjectInfo>
                    <ProjectImage src={ddcElementor} alt="Screenshot of Elementor during build"/>
                </ProjectBox>

                <LineBreak />

                <ProjectBox>
                    <ProjectInfo>
                        <ProjectHeading>Particle Explosion Simulation</ProjectHeading>
                        <ProjectText><b>1 day solo project in C++</b></ProjectText>
                        <ProjectText>A simulation of a particle fire explosion developed in C++ using the SDL2 library as a GUI.</ProjectText>

                        <ProjectText>This project was completed following the final tutorial of an <TextLinks href="https://www.udemy.com/course/free-learn-c-tutorial-beginners/learn/lecture/1747908#overview" target="_blank">Introduction to C++ course on Udemy</TextLinks> which I was completing in preparation for a job interview. I found working through this project was a great way to consolidate my learning whilst producing something that looks pretty cool! </ProjectText>

                        <ProjectText>I really enjoyed the incremental approach which helped me to visualise what was being acheived at each stage - so much so I collated videos of each key stage and compiled them into a progress video!</ProjectText>

                        <ProjectLinksDiv>
                            <ProjectLink href="https://github.com/louise3112/particle_explosion" target="_blank">GitHub Repo</ProjectLink>
                            <ProjectLink href="https://youtu.be/Lp6_RpcIj0E" target="_blank">Progress Video</ProjectLink>
                        </ProjectLinksDiv>
                    </ProjectInfo>
                    <ProjectVideoBox>
                        <ProjectVideo src="https://www.youtube.com/embed/mRh2EBO_zow?rel=0" title="Short video of the particle explosion simulation" allow="fullscreen"/>
                    </ProjectVideoBox>
                </ProjectBox>

                <LineBreak />

                <ProjectBox>
                    <ProjectInfo>
                        <ProjectHeading>Children of the Bookcase</ProjectHeading>
                        <ProjectText><b>2 week group project in C# & Unity </b></ProjectText>
                        <ProjectText>A 3D, first-person escape room style puzzle game built for our CodeClan Capstone project. I chose this project as I was keen to build and design the type of game that I felt really enthusiastic about playing. </ProjectText>

                        <ProjectText>It was also an excellent opportunity to continue to expand on the skills I had been learning throughout the course, including rapidly learning a new language and using git / github to ensure smooth collaboration throughout. As this was a completely different type of project to those worked on previously, we applied SCRUM principles and a mix of mob, pair and solo programming to ensure continual progress throughout. We also had to adapt our testing and debugging approaches to reflect the nature of the project. </ProjectText>

                        <ProjectText>Myself and <TextLinks href="https://www.linkedin.com/in/charbroadley/" target="_blank">Charlotte Broadley</TextLinks> presented the project as part of a Project Showcase during CodeClan's Open Week. We are so proud of this project and were more than happy to talk about our experience to prospective students and partners.</ProjectText>

                        <ProjectLinksDiv>
                            <ProjectLink href="https://github.com/samuel-williams-ed/Escape_Game" target="_blank">GitHub Repo</ProjectLink>
                            <ProjectLink href="https://play.unity.com/mg/other/children-of-the-bookcase" target="_blank">Play Game</ProjectLink>
                            <ProjectLink href="https://youtu.be/edcQ3XGXLEk" target="_blank">Watch Presentation</ProjectLink>
                        </ProjectLinksDiv>
                    </ProjectInfo>
                    <ProjectVideoBox>
                        <ProjectVideo src="https://www.youtube.com/embed/B4evUBahNI4?rel=0" title="Short video of the Children of the Bookcase game" allow="fullscreen"/>
                    </ProjectVideoBox>
                </ProjectBox>

                <LineBreak />

                <ProjectBox>
                    <ProjectInfo>
                        <ProjectHeading>geograPHUN</ProjectHeading>
                        <ProjectText><b>1 week group project in JavaScript / React, MongoDB & CSS </b></ProjectText>
                        <ProjectText>Our second project at CodeClan was an app using the <TextLinks href="https://restcountries.com/#api-endpoints-v3-all" target="_blank">Countries API data</TextLinks> where users could play interactive quiz games, see their results (even if they refreshed the app) and view underlying information for each country so they can improve their scores.</ProjectText>

                        <ProjectText>I completed a personal extension to refactor the front-end code for this project to ensure it was DRY, more reusable and to allow me to host a demo version of the app via Github pages. I found this really useful to consolidate my learning from the project.</ProjectText>

                        <ProjectLinksDiv>
                            <ProjectLink href="https://github.com/louise3112/countries_quiz" target="_blank">GitHub Repo</ProjectLink>
                            <ProjectLink href="https://louise3112.github.io/geographun-demo" target="_blank">Front End Demo</ProjectLink>
                        </ProjectLinksDiv>
                    </ProjectInfo>
                    <ProjectVideoBox>
                        <ProjectVideo src="https://www.youtube.com/embed/-Et6zwGKV5o?rel=0" title="Short video of the geograPHUN app" allow="fullscreen"/>
                    </ProjectVideoBox>
                </ProjectBox>

                <LineBreak />

                <ProjectBox>
                    <ProjectInfo>
                        <ProjectHeading>Testing Tunes</ProjectHeading>
                        <ProjectText><b>Weekend solo project in JavaScript / React, Jest, Cypress, CircleCI & AWS </b></ProjectText>
                        <ProjectText>This was a personal project I chose to focus on testing and applying CI / CD principles. The testing packages I used were Jest (unit testing) and Cypress (end-to-end testing), alongside CircleCI to support CI / CD. The live app is hosted via AWS using S3.</ProjectText>

                        <ProjectText>The app itself is a front-end JavaScript / React app that uses the iTunes API to display the current top 20. I have also incorporated the ability to listen to a demo of each song, and to view the genre-specific top 20 for all genres that appear in the overall top 20. The design of the app was inspired by an old Top of the Pops logo.</ProjectText>

                        <ProjectLinksDiv>
                            <ProjectLink href="https://github.com/louise3112/Testing_Tunes" target="_blank">GitHub Repo</ProjectLink>
                            <ProjectLink href="http://testing-tunes-lc.s3-website.eu-west-2.amazonaws.com/" target="_blank">Live App</ProjectLink>
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
                            <ProjectLink href="https://github.com/louise3112/card_games" target="_blank">GitHub Repo</ProjectLink>
                            <ProjectLink href="https://louise3112.github.io/card_games/" target="_blank">Live App</ProjectLink>
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
                            <ProjectLink href="https://github.com/louise3112/droid_workshop" target="_blank">GitHub Repo</ProjectLink>
                        </ProjectLinksDiv>
                    </ProjectInfo>
                    <ProjectVideoBox>
                        <ProjectVideo src="https://www.youtube.com/embed/_cgO-DRaQaw?rel=0" title="Short video of the droid repair workshop app" allow="fullscreen"/>
                    </ProjectVideoBox>
                </ProjectBox>


            </ProjectsList>

        </ProjectsSection>
    )
}

export default Projects
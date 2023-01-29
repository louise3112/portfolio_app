import cardGames from '../images/cardGames.png'
import droidWorkshop from '../images/droidWorkshop.png'

import styled from "styled-components"

const ProjectsSection = styled.div`
    padding: 1.75em 4em 1em 4em;
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
    justify-content: space-evenly;
    flex-wrap: wrap;
    column-gap: 3em;
    row-gap: 1em;
    color: black;
`

const ProjectBox = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    border: 1px solid #7d0068;
`

const ProjectsLinks = styled.a`
    text-decoration: none;
    color: black;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: space-evenly;
`

const ProjectHeading = styled.h4`
    color: #7d0068;
    font-size: 1.2em;
    text-align: center;
    margin: 0.5em 0em 0.5em 0em;
    padding: 0em 1em 0em 1em;
`

const ProjectInfo = styled.p`
    font-size: 1em;
    text-align: center;
    margin: 0;
    padding: 0em 1em 1em 1em;
`

const ProjectImage = styled.img`
    height: auto;
    max-width: 90%;
    margin: 0em 0em 1em 0em;
    border: 0.5px solid black;
`

const GitHubLinks = styled.a`
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    text-align: center;
    background-color: #7d0068;
    color: #feeef7;
    margin: 0;
    padding: 0.5em 0em 0.5em 0em;
`


const Projects = () => {
    return (
        <ProjectsSection>
            <ProjectsHeading>Projects</ProjectsHeading>
            <ProjectsList>

                <ProjectBox>
                    {/* <ProjectsLinks href="" target="_blank"> */}
                        <ProjectHeading>Droid Repair Workshop</ProjectHeading>
                        <ProjectInfo>1 week solo project using <b>Python / Flask, PostgreSQL & CSS</b></ProjectInfo>
                        <ProjectImage src={droidWorkshop} alt="Screenshot of Droid Repair Workshop app"/>
                        <ProjectInfo><b>Brief: </b> Build an app to manage CRUD actions for technicians, droids & droid owners at a droid repair workshop.</ProjectInfo>
                    {/* </ ProjectsLinks> */}
                    <GitHubLinks href="https://github.com/louise3112/droid_workshop" target="_blank">See full code on GitHub</GitHubLinks>
                </ProjectBox>

                <ProjectBox>
                    <ProjectsLinks href="https://louise3112.github.io/card_games/" target="_blank">
                        <ProjectHeading>Card Games</ProjectHeading>
                        <ProjectInfo>1 day solo project in <b>JavaScript / React & CSS </b></ProjectInfo>
                        <ProjectImage src={cardGames} alt="Screenshot of Card Games app"/>
                        <ProjectInfo><b>Brief: </b> Build a card game app utilising the Deck of Cards API.</ProjectInfo>
                    </ ProjectsLinks>
                    <GitHubLinks href="https://github.com/louise3112/card_games" target="_blank">See full code on GitHub</GitHubLinks>
                </ProjectBox>


            </ProjectsList>

        </ProjectsSection>
    )
}

export default Projects
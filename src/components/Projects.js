import styled from "styled-components"

const ProjectsSection = styled.div`
    padding: 2em 4em 1em 4em;
    color: #370D32;
    font-weight: bold;
`

const ProjectsHeading = styled.h2`
    color: #370D32;
    font-size: 1.5em;
    margin: 0em 0em 1em 0em;
`

const ProjectsList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    column-gap: 5%;
`


const Projects = () => {
    return (
        <ProjectsSection>
            <ProjectsHeading>Projects</ProjectsHeading>
            <ProjectsList>


            </ProjectsList>

        </ProjectsSection>
    )
}

export default Projects
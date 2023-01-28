// Ran the following two terminal commands to install required iconify packages:
//      npm install @iconify/react
//      npm install @iconify/icons-logos

import { InlineIcon } from "@iconify/react"

import javascriptIcon from "@iconify/icons-logos/javascript"
import nodejsIcon from '@iconify/icons-logos/nodejs'
import mochaIcon from '@iconify/icons-logos/mocha'
import jestIcon from '@iconify/icons-logos/jest'
import cypressIcon from '@iconify/icons-logos/cypress'
import reactIcon from '@iconify/icons-logos/react'
// import mongodbIcon from '@iconify/icons-logos/mongodb'

import pythonIcon from '@iconify/icons-logos/python'
import flaskIcon from '@iconify/icons-logos/flask'
import postgresqlIcon from '@iconify/icons-logos/postgresql'

import html5 from '@iconify/icons-logos/html-5'
import css3 from '@iconify/icons-logos/css-3'
import gitIcon from '@iconify/icons-logos/git'
import vsCodeIcon from '@iconify/icons-logos/visual-studio-code'
import microsoftIcon from '@iconify/icons-logos/microsoft'
import tableauIcon from '@iconify/icons-logos/tableau'
import vbaIcon from '../images/vbaIcon.svg'
import sasIcon from '../images/sasIcon.svg'

// import javaIcon from '@iconify/icons-logos/java'


import styled from "styled-components"
const TechStackSection = styled.div`
    padding: 2em 4em 1em 4em;
    color: #370D32;
    font-weight: bold;
`

const TechStackHeading = styled.h2`
    color: #370D32;
    font-size: 1.5em;
    margin: 0em 0em 1em 0em;
`

const TechStackList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    column-gap: 5%;
`

const TechStackItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items:center;
`

const TechStackName = styled.p`
    font-size: 1.2em;
    margin: 0.5em 0em 1em 0em;
`


const TechStack = () => {
    return (
        <TechStackSection>
            <TechStackHeading>Tech Stack</TechStackHeading>
            <TechStackList>
                <TechStackItem>
                    <InlineIcon icon={javascriptIcon} height={80} width={80}/>
                    <TechStackName>JavaScript</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={nodejsIcon} height={80} width={80}/>
                    <TechStackName>Node JS</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={mochaIcon} height={80} width={80}/>
                    <TechStackName>Mocha</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={jestIcon} height={80} width={80}/>
                    <TechStackName>Jest</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={cypressIcon} height={80} width={80}/>
                    <TechStackName>Cypress</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={reactIcon} height={80} width={80}/>
                    <TechStackName>React</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={pythonIcon} height={80} width={80}/>
                    <TechStackName>Python</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={flaskIcon} height={80} width={80}/>
                    <TechStackName>Flask</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={postgresqlIcon} height={80} width={80}/>
                    <TechStackName>PostgreSQL</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={html5} height={80} width={80}/>
                    <TechStackName>HTML</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={css3} height={80} width={80}/>
                    <TechStackName>CSS</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={gitIcon} height={80} width={80}/>
                    <TechStackName>Git</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={vsCodeIcon} height={80} width={80}/>
                    <TechStackName>VS Code</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={microsoftIcon} height={80} width={80}/>
                    <TechStackName>Microsoft</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={tableauIcon} height={80} width={80}/>
                    <TechStackName>Tableau</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <img icon={vbaIcon} height={80} width={80}/>
                    <TechStackName>VBA</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <img icon={sasIcon} height={80} width={80}/>
                    <TechStackName>SAS</TechStackName>
                </TechStackItem>

            </TechStackList>

        </TechStackSection>
    )
}

export default TechStack
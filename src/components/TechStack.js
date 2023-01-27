// Ran the following two terminal commands to install required iconify packages:
//      npm install @iconify/react
//      npm install @iconify/icons-logos

import { InlineIcon } from "@iconify/react"

import javascriptIcon from "@iconify/icons-logos/javascript"
import nodejsIcon from '@iconify/icons-logos/nodejs'
import reactIcon from '@iconify/icons-logos/react'
// import mongodbIcon from '@iconify/icons-logos/mongodb'

import pythonIcon from '@iconify/icons-logos/python'
import flaskIcon from '@iconify/icons-logos/flask'
import postgresqlIcon from '@iconify/icons-logos/postgresql'

import html5 from '@iconify/icons-logos/html-5'
import css3 from '@iconify/icons-logos/css-3'
import gitIcon from '@iconify/icons-logos/git'

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
    font-size: 1.25em;
    margin: 0.5em 0em 1em 0em;
`


const TechStack = () => {
    return (
        <TechStackSection>
            <TechStackHeading>Tech Stack</TechStackHeading>
            <TechStackList>
                <TechStackItem>
                    <InlineIcon icon={javascriptIcon} height={100} width={100}/>
                    <TechStackName>JavaScript</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={nodejsIcon} height={100} width={100}/>
                    <TechStackName>Node JS</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={reactIcon} height={100} width={100}/>
                    <TechStackName>React</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={pythonIcon} height={100} width={100}/>
                    <TechStackName>Python</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={flaskIcon} height={100} width={100}/>
                    <TechStackName>Flask</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={postgresqlIcon} height={100} width={100}/>
                    <TechStackName>PostgreSQL</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={html5} height={100} width={100}/>
                    <TechStackName>HTML</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={css3} height={100} width={100}/>
                    <TechStackName>CSS</TechStackName>
                </TechStackItem>

                <TechStackItem>
                    <InlineIcon icon={gitIcon} height={100} width={100}/>
                    <TechStackName>GitHub</TechStackName>
                </TechStackItem>

            </TechStackList>

        </TechStackSection>
    )
}

export default TechStack
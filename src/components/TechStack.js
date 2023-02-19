// Ran the following two terminal commands to install required iconify packages:
//      npm install @iconify/react
//      npm install @iconify/icons-logos

import { Icon } from "@iconify/react"

import javascriptIcon from "@iconify/icons-logos/javascript"
import nodejsIcon from '@iconify/icons-logos/nodejs'
import mochaIcon from '@iconify/icons-logos/mocha'
import jestIcon from '@iconify/icons-logos/jest'
import cypressIcon from '@iconify/icons-logos/cypress'
import reactIcon from '@iconify/icons-logos/react'
import mongodbIcon from '@iconify/icons-logos/mongodb'
import insomniaIcon from '@iconify/icons-logos/insomnia'
import expressIcon from '@iconify/icons-logos/express'

import pythonIcon from '@iconify/icons-logos/python'
import flaskIcon from '@iconify/icons-logos/flask'
import postgresqlIcon from '@iconify/icons-logos/postgresql'

import javaIcon from '@iconify/icons-logos/java'
import intelliJIcon from '@iconify/icons-logos/intellij-idea'

import html5 from '@iconify/icons-logos/html-5'
import css3 from '@iconify/icons-logos/css-3'
import gitIcon from '@iconify/icons-logos/git'
import vsCodeIcon from '@iconify/icons-logos/visual-studio-code'
import microsoftIcon from '@iconify/icons-logos/microsoft'
import tableauIcon from '@iconify/icons-logos/tableau'
import vbaIcon from '../images/vbaIcon.svg'
import sasIcon from '../images/sasIcon.svg'


import styled from "styled-components"
const TechStackSection = styled.div`
    padding: 1em 4em 1em 4em;
    font-weight: bold;

    @media only screen and (max-width: 1000px) {
        padding: 1em 1.5em 1em 1.5em;
    }
`

const TechStackHeading = styled.h2`
    color: #7d0068;
    font-size: 1.5em;
    margin: 0em 0em 1em 0em;
`

const TechStackList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    column-gap: 3em;
    row-gap: 1em;
`

const TechStackItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const TechStack = () => {
    return (
        <TechStackSection>
            <TechStackHeading>TECH STACK</TechStackHeading>
            <TechStackList>

                <TechStackItem title="Java">
                    <Icon icon={javaIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="IntelliJ">
                    <Icon icon={intelliJIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="JavaScript">
                    <Icon icon={javascriptIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="Node JS">
                    <Icon icon={nodejsIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="Mocha">
                    <Icon icon={mochaIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="Jest">
                    <Icon icon={jestIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="Cypress">
                    <Icon icon={cypressIcon} height="5em" width="5em"/>
                </TechStackItem>

                <TechStackItem title="React">
                    <Icon icon={reactIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="MongoDB">
                    <Icon icon={mongodbIcon} height="5em" width="5em"/>
                </TechStackItem>

                <TechStackItem title="Insomnia">
                    <Icon icon={insomniaIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="Express">
                    <Icon icon={expressIcon} height="5em" width="5em"/>
                </TechStackItem>

                <TechStackItem title="Python">
                    <Icon icon={pythonIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="Flask">
                    <Icon icon={flaskIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="PostgreSQL">
                    <Icon icon={postgresqlIcon} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="HTML">
                    <Icon icon={html5} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="CSS">
                    <Icon icon={css3} height="4em" width="4em"/>
                </TechStackItem>

                <TechStackItem title="Git">
                    <Icon icon={gitIcon} height="5em" width="5em"/>
                </TechStackItem>

                <TechStackItem title="VSCode">
                    <Icon icon={vsCodeIcon} height="3em" width="3em"/>
                </TechStackItem>

                <TechStackItem title="Microsoft">
                    <Icon icon={microsoftIcon} height="6em" width="6em"/>
                </TechStackItem>

                <TechStackItem title="Tableau">
                    <Icon icon={tableauIcon} height="6em" width="6em"/>
                </TechStackItem>

                <TechStackItem title="Microsoft VBA">
                    <img src={vbaIcon} height="60em" width="60em" alt="VBA"/>
                </TechStackItem>

                <TechStackItem title="SAS Analytics Software">
                    <img src={sasIcon} height="50em" width="50em" alt="SAS"/>
                </TechStackItem>

            </TechStackList>

        </TechStackSection>
    )
}

export default TechStack
import styled from 'styled-components'

import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'

const AppContent = styled.div`
    min-height: 100vh;
    display: grid;
`

const LineBreak = styled.hr`
    border-top: 1px solid #7d0068;
    border-left: none;
    margin-top: 0;
    margin-bottom: 0;
    width: 90%;
`

function App() {
    return (
        <AppContent>
            <AboutMe />
            <Projects/>
            <LineBreak align="center"/>
            <TechStack />
            <Footer />
        </AppContent>

    )
}

export default App;

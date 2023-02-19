import styled from 'styled-components'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

const AppContent = styled.div`
    min-height: 100vh;
    max-width: 100wh;
    display: grid;
`

const LineBreak = styled.hr`
    border-top: 2px solid #7d0068;
    border-left: none;
    margin-top: 0;
    margin-bottom: 0;
    width: 90%;
`

function App() {
    return (
        <AppContent>
            <Header />
            <AboutMe />
            <LineBreak align="center"/>
            <Projects/>
            <LineBreak align="center"/>
            <TechStack />
            <Footer />
        </AppContent>

    )
}

export default App;

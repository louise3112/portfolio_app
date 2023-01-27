import styled from 'styled-components'

import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'

const LineBreak = styled.hr`
    border-top: 1px solid #370D32;
    width: 90%;
`

function App() {
    return (
        <>
            <AboutMe />
            <Projects/>
            <LineBreak/>
            <TechStack />
            <Footer />
        </>

    )
}

export default App;

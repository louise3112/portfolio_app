import styled from "styled-components"

const FooterSection = styled.div`
    background-color: #7d0068;
    padding: 0.8em 0em 0.8em 0em;
    display: grid;
    margin-top: auto;
`

const FooterText = styled.p`
    font-size: 1em;
    color: #fff8fc;
    text-align: center;
    margin: 0;
`

const Footer = () => {
    return (
        <FooterSection>
            <FooterText>&copy; Louise Cuthbertson, March 2023</FooterText>
        </FooterSection>
    )
}

export default Footer
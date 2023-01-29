import styled from "styled-components"

const FooterSection = styled.div`
    background-color: #7d0068;
    padding: 1em 0em 1em 0em;
    display: grid;
    margin-top: auto;
`

const FooterText = styled.p`
    font-size: 1.25em;
    color: #feeef7;
    text-align: center;
    margin: 0;
`

const Footer = () => {
    return (
        <FooterSection>
            <FooterText>&copy; Louise Cuthbertson, January 2023</FooterText>
        </FooterSection>
    )
}

export default Footer
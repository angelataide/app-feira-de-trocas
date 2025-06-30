import React from 'react'
import styled from 'styled-components'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import StatsSection from './components/StatsSection.jsx' // Importação adicionada
import HighlightSection from './components/HighlightSection.jsx'
import HowItWorksSection from './components/HowItWorksSection.jsx'
import GlobalStyles from './GlobalStyles.jsx'
import Footer from './components/Footer.tsx'

const MainContainer = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <MainContainer>
                <HeroSection />
                {/* <StatsSection /> <-- Removido, conforme sua solicitação */}
                <HighlightSection />
                <HowItWorksSection />
            </MainContainer>
            <Footer />
        </>
    )
}

export default App

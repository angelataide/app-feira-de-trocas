import React from 'react'
import styled from 'styled-components' //
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import StatsSection from './components/StatsSection.jsx'
import HighlightSection from './components/HighlightSection.jsx'
import HowItWorksSection from './components/HowItWorksSection.jsx'
import GlobalStyles from './GlobalStyles.jsx'

const MainContainer = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza todo o conteúdo horizontalmente */
    justify-content: center; /* Centraliza verticalmente, se necessário */
    text-align: center;
    padding: 40px 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto; /* Centraliza o contêiner na tela */
`

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <MainContainer>
                <HeroSection />
                <StatsSection />
                <HighlightSection />
                <HowItWorksSection />
            </MainContainer>
        </>
    )
}

export default App

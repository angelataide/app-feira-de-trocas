import Header from '../../components/Header/Header.jsx'
import HeroSection from '../../components/HeroSection.jsx'
import StatsSection from '../../components/StatsSection.jsx'
import HighlightSection from '../../components/HighlightSection.jsx'
import HowItWorksSection from '../../components/HowItWorksSection.jsx'
import { MainContainer } from './styles.js'

function HomePage() {
    return (
        <>
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

export default HomePage

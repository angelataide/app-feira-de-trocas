import styled from 'styled-components'

// Header
export const HeaderWrapper = styled.header`
    width: 100%;
    max-width: 1200px;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
        padding: 20px;
    }
`

export const HeaderLogo = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: var(--main-blue);
`

export const Nav = styled.nav`
    flex-grow: 1;
    text-align: center;

    @media (max-width: 768px) {
        margin: 10px 0;
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    color: var(--text-medium);
    font-weight: 600;
    font-size: 16px;
    padding: 0 15px;
    transition: color 0.3s;

    &:hover {
        color: var(--main-blue);
    }
`

export const HeaderActions = styled.div`
    display: flex;
    gap: 10px;
`

// Main Content
export const MainContentWrapper = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
    width: 100%;
    max-width: 1200px;
`

// Hero Section
export const HeroSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
`

export const HeroIcon = styled.div`
    font-size: 60px;
    color: var(--main-blue);
    margin-bottom: 20px;
`

export const HeroTitle = styled.h1`
    font-size: 56px;
    font-weight: 800;
    color: var(--text-dark);
    line-height: 1.2;
    margin-bottom: 20px;

    span {
        color: var(--main-blue);
    }

    @media (max-width: 768px) {
        font-size: 40px;
    }
`

export const HeroSubtitle = styled.p`
    font-size: 20px;
    color: var(--text-medium);
    max-width: 700px;
    line-height: 1.5;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`

export const HeroButtons = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        max-width: 300px;
    }
`

// Stats Section
export const StatsSectionWrapper = styled.section`
    width: 100%;
    max-width: 900px;
    padding: 60px 20px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    background-color: var(--light-gray);
    border-radius: 12px;
    margin: 40px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
        padding: 40px 20px;
    }
`

export const StatItem = styled.div`
    /* Estilos para cada item de estatística */
`

export const StatValue = styled.h2`
    font-size: 48px;
    font-weight: 800;
    color: var(--main-blue);
    margin-bottom: 5px;
`

export const StatNumber = styled.h2`
    font-size: 48px;
    font-weight: 800;
    color: var(--main-blue);
    margin-bottom: 5px;
`

export const StatText = styled.p`
    font-size: 16px;
    color: var(--text-medium);
`

export const StatLabel = styled.p`
    font-size: 16px;
    color: var(--text-medium);
`

// Highlight Section
export const HighlightSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
    background-color: #f8f9fa;
    border-radius: 12px;
    margin: 40px 0;
`

export const SectionTitle = styled.h2`
    font-size: 48px;
    font-weight: 800;
    color: var(--text-dark);
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 36px;
    }
`

export const Sparkle = styled.span`
    margin-right: 10px;
`

export const SectionDescription = styled.p`
    font-size: 20px;
    color: var(--text-medium);
    max-width: 800px;
    line-height: 1.5;
    margin-bottom: 30px;
`

export const HighlightStatsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`

export const HighlightStatItem = styled.div`
    text-align: center;
`

export const HighlightStatNumber = styled.h3`
    font-size: 48px;
    font-weight: 800;
    color: ${(props) => props.$color || 'var(--main-blue)'};
    margin-bottom: 5px;
`

export const HighlightStatText = styled.p`
    font-size: 16px;
    color: var(--text-medium);
`

export const CallToAction = styled.div`
    margin-top: 40px;
    padding: 40px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const CallToActionTitle = styled.h3`
    font-size: 32px;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 10px;
`

export const CallToActionDescription = styled.p`
    font-size: 18px;
    color: var(--text-medium);
    max-width: 600px;
    line-height: 1.5;
    margin-bottom: 30px;
`

export const CallToActionButtons = styled.div`
    display: flex;
    gap: 15px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        max-width: 300px;
    }
`

export const PrimaryAltButton = styled.a`
    text-decoration: none;
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 10px;
    font-weight: 600;
    transition:
        background-color 0.3s ease,
        transform 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-color: var(--main-green);
    color: #fff;
    border: 2px solid var(--main-green);

    &:hover {
        background-color: var(--darker-green);
        border-color: var(--darker-green);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const SecondaryAltButton = styled.a`
    text-decoration: none;
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 10px;
    font-weight: 600;
    transition:
        background-color 0.3s ease,
        transform 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-color: transparent;
    color: var(--main-green);
    border: 2px solid var(--main-green);

    &:hover {
        background-color: var(--lighter-green);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Icon = styled.span`
    margin-right: 8px;
    font-size: 18px;
`

// How It Works Section
export const HowItWorksSectionWrapper = styled.section`
    padding: 80px 20px;
    text-align: center;
    background-color: var(--light-gray);
`

export const StepsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 50px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`

export const StepCard = styled.div`
    background-color: #fff;
    padding: 40px 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    width: 250px;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }
`

export const StepIcon = styled.div`
    font-size: 50px;
    color: var(--main-blue);
    margin-bottom: 20px;
`

export const StepTitle = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 15px;
`

export const StepDescription = styled.p`
    font-size: 16px;
    color: var(--text-medium);
    line-height: 1.6;
`

// Buttons
export const Button = styled.a`
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    transition:
        background-color 0.3s ease,
        transform 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
    }
`

export const PrimaryButton = styled(Button)`
    background-color: var(--main-blue);
    color: #fff;
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    margin-right: 15px;

    &:hover {
        background-color: var(--darker-blue);
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
        margin-right: 0;
        margin-bottom: 15px;
    }
`

export const SecondaryButton = styled(Button)`
    background-color: transparent;
    color: var(--text-medium);
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 10px;
    border: 2px solid #ccc;

    &:hover {
        border-color: #999;
        background-color: #f0f0f0;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
    }
`

export const OutlineButton = styled(Button)`
    color: var(--main-blue);
    background-color: transparent;
    border: 2px solid var(--main-blue);
    padding: 10px 20px;
    border-radius: 8px;

    &:hover {
        background-color: var(--lighter-blue);
    }
`

export const FilledButton = styled(Button)`
    color: #fff;
    background-color: var(--main-blue);
    border: 2px solid var(--main-blue);
    padding: 10px 20px;
    border-radius: 8px;

    &:hover {
        background-color: var(--darker-blue);
    }
`

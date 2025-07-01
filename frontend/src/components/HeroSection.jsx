// Em src/components/HeroSection.jsx
import React from 'react'
import ArrowRight from './ArrowRight.jsx'
import {
    HeroSectionWrapper,
    HeroTitle,
    HeroSubtitle,
    HeroIcon,
    HeroButtons,
    PrimaryButton,
    SecondaryButton,
} from './styles'
import ExchangeIcon from './ExchangeIcon.jsx'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <HeroSectionWrapper>
            <HeroIcon>
                <ExchangeIcon />
            </HeroIcon>
            <HeroTitle>
                Troque, Reutilize, <br />
                <span>Conecte-se</span>
            </HeroTitle>
            <HeroSubtitle>
                Transforme itens que você não usa mais em oportunidades de troca
                com seus <br />
                vizinhos. Promova o consumo consciente e fortaleça os laços da
                sua comunidade.
            </HeroSubtitle>
            <HeroButtons>
                <PrimaryButton as={Link} to="/itens">
                    Ver Itens Disponíveis <ArrowRight />
                </PrimaryButton>
                <SecondaryButton as={Link} to="/itens">
                    Começar a Trocar
                </SecondaryButton>
            </HeroButtons>
        </HeroSectionWrapper>
    )
}

export default HeroSection

import React from 'react'
import {
    HighlightSectionWrapper,
    SectionTitle,
    Sparkle,
    SectionDescription,
    HighlightStatsContainer,
    HighlightStatItem,
    HighlightStatNumber,
    HighlightStatText,
    CallToAction,
    CallToActionTitle,
    CallToActionDescription,
    CallToActionButtons,
    PrimaryAltButton,
    SecondaryAltButton,
    Icon,
} from './styles'

const HighlightSection = () => {
    return (
        <HighlightSectionWrapper>
            <SectionTitle>
                <Sparkle>✨</Sparkle> Itens em Destaque
            </SectionTitle>
            <SectionDescription>
                Descubra tesouros incríveis que seus vizinhos estão oferecendo
                para troca. Cada <br />
                item tem uma história e está esperando por um novo lar!
            </SectionDescription>
            <HighlightStatsContainer>
                <HighlightStatItem>
                    <HighlightStatNumber $color="#007BFF">
                        0+
                    </HighlightStatNumber>
                    <HighlightStatText>Itens Disponíveis</HighlightStatText>
                </HighlightStatItem>
                <HighlightStatItem>
                    <HighlightStatNumber $color="#00BCD4">
                        150+
                    </HighlightStatNumber>
                    <HighlightStatText>Trocas Realizadas</HighlightStatText>
                </HighlightStatItem>
                <HighlightStatItem>
                    <HighlightStatNumber $color="#1E90FF">
                        80+
                    </HighlightStatNumber>
                    <HighlightStatText>Usuários Ativos</HighlightStatText>
                </HighlightStatItem>
                <HighlightStatItem>
                    <HighlightStatNumber $color="#6A5ACD">
                        25+
                    </HighlightStatNumber>
                    <HighlightStatText>Bairros Conectados</HighlightStatText>
                </HighlightStatItem>
            </HighlightStatsContainer>

            <CallToAction>
                <CallToActionTitle>
                    Encontrou algo interessante?
                </CallToActionTitle>
                <CallToActionDescription>
                    Explore todos os itens disponíveis ou adicione os seus para
                    começar a trocar!
                </CallToActionDescription>
                <CallToActionButtons>
                    <PrimaryAltButton href="#">
                        <Icon>✓</Icon> Ver Todos os Itens
                    </PrimaryAltButton>
                    <SecondaryAltButton href="#">
                        <Icon>+</Icon> Adicionar Meu Item
                    </SecondaryAltButton>
                </CallToActionButtons>
            </CallToAction>
        </HighlightSectionWrapper>
    )
}

export default HighlightSection

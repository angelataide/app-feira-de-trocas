import React from 'react';
import {
  HowItWorksSectionWrapper,
  SectionTitle,
  StepsContainer,
  StepCard,
  StepIcon,
  StepTitle,
  StepDescription
} from './styles';

// **CORREÇÃO: Use o caminho de importação correto './'**
import UserPlusIcon from './UserPlusIcon.jsx';
import PackageIcon from './PackageIcon.jsx';
import MessageIcon from './MessageIcon.jsx';
import ShieldIcon from './ShieldIcon.jsx';

const HowItWorksSection = () => {
  return (
    <HowItWorksSectionWrapper>
      <SectionTitle>Como Funciona</SectionTitle>
      <StepsContainer>
        <StepCard>
          <StepIcon><UserPlusIcon /></StepIcon>
          <StepTitle>1. Crie seu perfil</StepTitle>
          <StepDescription>
            Comece criando seu perfil e listando os itens que você gostaria de trocar.
          </StepDescription>
        </StepCard>
        <StepCard>
          <StepIcon><PackageIcon /></StepIcon>
          <StepTitle>2. Encontre itens</StepTitle>
          <StepDescription>
            Navegue por uma variedade de itens disponíveis na sua comunidade.
          </StepDescription>
        </StepCard>
        <StepCard>
          <StepIcon><MessageIcon /></StepIcon>
          <StepTitle>3. Faça Propostas</StepTitle>
          <StepDescription>
            Envie propostas de troca para os itens que te interessam.
          </StepDescription>
        </StepCard>
        <StepCard>
          <StepIcon><ShieldIcon /></StepIcon>
          <StepTitle>4. Troque com segurança</StepTitle>
          <StepDescription>
            Combine os detalhes da troca diretamente com o outro usuário e finalize o processo de forma segura.
          </StepDescription>
        </StepCard>
      </StepsContainer>
    </HowItWorksSectionWrapper>
  );
};

export default HowItWorksSection;
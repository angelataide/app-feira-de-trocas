import React from 'react';
import { StatsSectionWrapper, StatItem, StatNumber, StatText } from './styles';

const StatsSection = () => {
  return (
    <StatsSectionWrapper>
      <StatItem>
        <StatNumber>500+</StatNumber>
        <StatText>Itens Trocados</StatText>
      </StatItem>
      <StatItem>
        <StatNumber>200+</StatNumber>
        <StatText>Usuários Ativos</StatText>
      </StatItem>
      <StatItem>
        <StatNumber>50+</StatNumber>
        <StatText>Comunidades</StatText>
      </StatItem>
    </StatsSectionWrapper>
  );
};

export default StatsSection;


"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    ${(props) => props.theme.colors.primary[50]} 0%, 
    ${(props) => props.theme.colors.secondary[50]} 50%, 
    ${(props) => props.theme.colors.accent[50]} 100%);
  transition: background 0.5s ease;

  .dark & {
    background: linear-gradient(135deg, 
      ${(props) => props.theme.colors.neutral[900]} 0%, 
      ${(props) => props.theme.colors.primary[900]} 50%, 
      ${(props) => props.theme.colors.secondary[900]} 100%);
  }
`

export const FloatingElement = styled(motion.div)`
  position: fixed;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: ${(props) => props.gradient};
  border-radius: 50%;
  opacity: 0.2;
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;

  .dark & {
    opacity: 0.1;
  }
`

export const Header = styled(motion.header)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: ${(props) => props.theme.shadows.lg};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.3s ease;

  .dark & {
    background: rgba(15, 23, 42, 0.8);
    border-color: rgba(51, 65, 85, 0.3);
  }
`

export const HeaderContent = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

export const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.gradients.hero};
  color: white;
  padding: 5rem 0;
`

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.9;

  .dark & {
    opacity: 0.7;
  }
`

export const HeroFloatingElement = styled.div`
  position: absolute;
  ${(props) => props.position}
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  filter: blur(60px);

  .dark & {
    background: rgba(255, 255, 255, 0.05);
  }
`

export const HeroContent = styled.div`
  position: relative;
  text-align: center;
  z-index: 10;
`

export const HeroTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`

export const HeroHighlight = styled.span`
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  .dark & {
    background: linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const HeroDescription = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const HeroBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  padding: 0.75rem 1.5rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  color: white;
  font-weight: 600;

  .dark & {
    background: rgba(255, 255, 255, 0.1);
  }
`

export const FilterSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  padding: 1.5rem;
  box-shadow: ${(props) => props.theme.shadows.xl};
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 2rem;

  .dark & {
    background: rgba(30, 41, 59, 0.7);
    border-color: rgba(51, 65, 85, 0.3);
  }
`

export const FilterGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const SearchInputWrapper = styled.div`
  flex: 1;
  position: relative;
`

export const SelectWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 12rem;
  }
`

export const ResultsText = styled(motion.p)`
  color: ${(props) => props.theme.colors.neutral[700]};
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[300]};
  }
`

export const ItemCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.lg};
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${(props) => props.theme.shadows.blue};
  }

  .dark & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(51, 65, 85, 0.3);
  }
`

export const ItemImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background: ${(props) => props.theme.gradients.card};
  overflow: hidden;

  .dark & {
    background: ${(props) => props.theme.gradients.darkCard};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`

export const ItemImageOverlay = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  gap: 0.5rem;
`

export const HeartButton = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-radius: ${(props) => props.theme.borderRadius.full};
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.shadows.lg};
  cursor: pointer;

  .dark & {
    background: rgba(30, 41, 59, 0.9);
  }
`

export const RatingBadge = styled.div`
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-radius: ${(props) => props.theme.borderRadius.full};
  padding: 0.25rem 0.75rem;

  .dark & {
    background: rgba(30, 41, 59, 0.9);
  }
`

export const ItemContent = styled.div`
  padding: ${(props) => props.theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const BadgeGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`

export const PrimaryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  background: ${(props) => props.theme.gradients.primary};
  color: white;
  box-shadow: ${(props) => props.theme.shadows.sm};
`

export const SuccessBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  background: ${(props) => props.theme.colors.success[50]};
  color: ${(props) => props.theme.colors.success[700]};
  border: 1px solid ${(props) => props.theme.colors.success[200]};

  .dark & {
    background: ${(props) => props.theme.colors.success[900]};
    color: ${(props) => props.theme.colors.success[300]};
    border-color: ${(props) => props.theme.colors.success[700]};
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Avatar = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  border: 2px solid ${(props) => props.theme.colors.primary[200]};

  .dark & {
    border-color: ${(props) => props.theme.colors.primary[700]};
  }
`

export const UserName = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.neutral[700]};
  font-size: 0.875rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[300]};
  }
`

export const LikeCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors.secondary[500]};
`

export const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.colors.neutral[500]};
  font-size: 0.875rem;
  margin-bottom: 1.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 4rem 0;
`

export const EmptyIcon = styled.div`
  width: 6rem;
  height: 6rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
`

export const EmptyTitle = styled.p`
  color: ${(props) => props.theme.colors.neutral[600]};
  font-size: 1.25rem;
  margin-bottom: 1.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

export const Footer = styled.footer`
  background: ${(props) => props.theme.gradients.hero};
  color: white;
  padding: 3rem 0;
  margin-top: 4rem;
`

export const FooterContent = styled(motion.div)`
  text-align: center;
`

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const FooterLogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`

export const FooterDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`

export const FooterSubtext = styled.p`
  color: ${(props) => props.theme.colors.primary[200]};
  font-size: 0.875rem;

  .dark & {
    color: ${(props) => props.theme.colors.primary[300]};
  }
`

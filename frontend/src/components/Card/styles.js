"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.lg};
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${(props) => props.theme.shadows.blue};
  }

  .dark & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(51, 65, 85, 0.3);
  }
`

export const CardHeader = styled.div`
  padding: ${(props) => props.theme.spacing.md};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};

  .dark & {
    border-color: ${(props) => props.theme.colors.neutral[700]};
  }
`

export const CardContent = styled.div`
  padding: ${(props) => props.theme.spacing.md};
`

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.spacing.xs};

  .dark & {
    color: ${(props) => props.theme.colors.neutral[100]};
  }
`

export const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.neutral[600]};
  line-height: 1.5;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

export const ImageContainer = styled.div`
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

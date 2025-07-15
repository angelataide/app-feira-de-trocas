"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

export const PrimaryButton = styled(motion.button)`
  background: ${(props) => props.theme.gradients.primary};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadows.md};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.blue};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

export const SecondaryButton = styled(motion.button)`
  background: ${(props) => props.theme.gradients.secondary};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadows.md};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.xl};
    transform: translateY(-2px);
  }
`

export const OutlineButton = styled(motion.button)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary[600]};
  border: 2px solid ${(props) => props.theme.colors.primary[300]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.colors.primary[50]};
    border-color: ${(props) => props.theme.colors.primary[400]};
    transform: translateY(-2px);
  }

  .dark & {
    color: ${(props) => props.theme.colors.primary[400]};
    border-color: ${(props) => props.theme.colors.primary[700]};

    &:hover {
      background: ${(props) => props.theme.colors.primary[900]};
      border-color: ${(props) => props.theme.colors.primary[600]};
    }
  }
`

export const GhostButton = styled(motion.button)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary[600]};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.colors.primary[50]};
    transform: translateY(-2px);
  }

  .dark & {
    color: ${(props) => props.theme.colors.primary[400]};

    &:hover {
      background: ${(props) => props.theme.colors.primary[900]};
    }
  }
`

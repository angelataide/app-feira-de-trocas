"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

export const ToggleButton = styled(motion.button)`
  position: relative;
  width: 3rem;
  height: 3rem;
  padding: 0;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${(props) => props.theme.shadows.lg};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.xl};
  }

  .dark & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(51, 65, 85, 0.2);
  }
`

export const IconWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GlowEffect = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: ${(props) => props.gradient};
  opacity: 0.5;
`

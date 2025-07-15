"use client"

import styled from "styled-components"
import { motion } from "framer-motion"

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    ${(props) => props.theme.colors.neutral[50]} 0%, 
    ${(props) => props.theme.colors.primary[50]} 100%);
  transition: background 0.5s ease;

  .dark & {
    background: linear-gradient(135deg, 
      ${(props) => props.theme.colors.neutral[900]} 0%, 
      ${(props) => props.theme.colors.primary[900]} 100%);
  }
`

export const Header = styled.header`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: ${(props) => props.theme.shadows.sm};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

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

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const ChatContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  height: calc(100vh - 4rem);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }

  @media (min-width: 640px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 2rem;
  }
`

export const ConversasList = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.lg};
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  height: fit-content;
  max-height: calc(100vh - 8rem);

  .dark & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(51, 65, 85, 0.3);
  }
`

export const ConversasHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};

  .dark & {
    border-color: ${(props) => props.theme.colors.neutral[700]};
  }
`

export const ConversasTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutral[900]};

  .dark & {
    color: ${(props) => props.theme.colors.neutral[100]};
  }
`

export const ConversasContent = styled.div`
  max-height: 400px;
  overflow-y: auto;
`

export const ConversaItem = styled(motion.div)`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral[100]};
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${(props) => (props.active ? props.theme.colors.primary[50] : "transparent")};

  &:hover {
    background: ${(props) => props.theme.colors.primary[50]};
  }

  &:last-child {
    border-bottom: none;
  }

  .dark & {
    border-color: ${(props) => props.theme.colors.neutral[700]};
    background: ${(props) => (props.active ? props.theme.colors.primary[900] : "transparent")};

    &:hover {
      background: ${(props) => props.theme.colors.primary[900]};
    }
  }
`

export const ConversaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`

export const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
`

export const ConversaDetails = styled.div`
  flex: 1;
`

export const ConversaNome = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin: 0;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[100]};
  }
`

export const ConversaTexto = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.neutral[600]};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

export const ConversaTime = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.neutral[500]};

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

export const ChatArea = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.lg};
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 8rem);

  .dark & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(51, 65, 85, 0.3);
  }
`

export const ChatHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .dark & {
    border-color: ${(props) => props.theme.colors.neutral[700]};
  }
`

export const ChatHeaderInfo = styled.div`
  flex: 1;
`

export const ChatHeaderNome = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin: 0;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[100]};
  }
`

export const ChatHeaderItem = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.neutral[600]};
  margin: 0;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MessageBubble = styled(motion.div)`
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  word-wrap: break-word;
  align-self: ${(props) => (props.isOwn ? "flex-end" : "flex-start")};
  background: ${(props) => (props.isOwn ? props.theme.gradients.primary : props.theme.colors.neutral[100])};
  color: ${(props) => (props.isOwn ? "white" : props.theme.colors.neutral[900])};
  box-shadow: ${(props) => props.theme.shadows.sm};

  .dark & {
    background: ${(props) => (props.isOwn ? props.theme.gradients.primary : props.theme.colors.neutral[800])};
    color: ${(props) => (props.isOwn ? "white" : props.theme.colors.neutral[100])};
  }
`

export const MessageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.8;
`

export const MessageText = styled.p`
  margin: 0;
  line-height: 1.5;
`

export const MessageTime = styled.span`
  font-size: 0.75rem;
  opacity: 0.7;
  margin-top: 0.25rem;
  display: block;
`

export const ChatInput = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.neutral[200]};
  display: flex;
  gap: 1rem;
  align-items: flex-end;

  .dark & {
    border-color: ${(props) => props.theme.colors.neutral[700]};
  }
`

export const InputWrapper = styled.div`
  flex: 1;
  position: relative;
`

export const EmptyChat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`

export const EmptyIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

export const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: 0.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[100]};
  }
`

export const EmptyDescription = styled.p`
  color: ${(props) => props.theme.colors.neutral[500]};
  margin: 0;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

export const PropostaCard = styled.div`
  background: ${(props) => props.theme.colors.primary[50]};
  border: 1px solid ${(props) => props.theme.colors.primary[200]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 1rem;
  margin-bottom: 1rem;

  .dark & {
    background: ${(props) => props.theme.colors.primary[900]};
    border-color: ${(props) => props.theme.colors.primary[700]};
  }
`

export const PropostaTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary[800]};
  margin-bottom: 0.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.primary[200]};
  }
`

export const PropostaText = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primary[700]};
  margin: 0;

  .dark & {
    color: ${(props) => props.theme.colors.primary[300]};
  }
`

"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "../../constants/theme"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { Container } from "../../components/Layout"
import { PrimaryButton, GhostButton } from "../../components/Button"
import { StyledTextarea } from "../../components/Input"
import { useApp } from "../../context/AppContext"
import { ArrowLeft, MessageCircle, Send } from "lucide-react"
import {
  PageWrapper,
  Header,
  HeaderContent,
  HeaderLeft,
  Logo,
  ChatContainer,
  ConversasList,
  ConversasHeader,
  ConversasTitle,
  ConversasContent,
  ConversaItem,
  ConversaInfo,
  Avatar,
  ConversaDetails,
  ConversaNome,
  ConversaTime,
  UltimaMensagem,
  ChatArea,
  ChatHeader,
  ChatHeaderInfo,
  ChatHeaderNome,
  ChatHeaderItem,
  MessagesContainer,
  MessageBubble,
  MessageInfo,
  MessageText,
  MessageTime,
  ChatInput,
  InputWrapper,
  EmptyChat,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  PropostaCard,
  PropostaTitle,
  PropostaText,
} from "./styles"

export default function Chat() {
  const { chatId } = useParams()
  const { conversas, dispatch } = useApp()
  const [conversaAtiva, setConversaAtiva] = useState(null)
  const [novaMensagem, setNovaMensagem] = useState("")
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (chatId) {
      const conversa = conversas.find((c) => c.id === chatId)
      setConversaAtiva(conversa)
    }
  }, [chatId, conversas])

  useEffect(() => {
    scrollToBottom()
  }, [conversaAtiva?.mensagens])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleEnviarMensagem = (e) => {
    e.preventDefault()
    if (!novaMensagem.trim() || !conversaAtiva) return

    const mensagem = {
      id: Date.now(),
      autor: "Você", // Em um app real, seria o usuário logado
      mensagem: novaMensagem,
      timestamp: new Date().toISOString(),
      tipo: "resposta",
    }

    dispatch({
      type: "ADD_MENSAGEM",
      payload: {
        chatId: conversaAtiva.id,
        mensagem,
      },
    })

    setNovaMensagem("")
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return "Hoje"
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Ontem"
    } else {
      return date.toLocaleDateString("pt-BR")
    }
  }

  const getPrimeiraMensagem = (conversa) => {
    const proposta = conversa.mensagens.find((m) => m.tipo === "proposta")
    return proposta || conversa.mensagens[0]
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageWrapper>
        {/* Header */}
        <Header>
          <Container>
            <HeaderContent>
              <HeaderLeft>
                <Link to="/propostas">
                  <GhostButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <ArrowLeft size={16} />
                    Voltar
                  </GhostButton>
                </Link>
                <Logo>TrocaVizinho</Logo>
              </HeaderLeft>
            </HeaderContent>
          </Container>
        </Header>

        <ChatContainer>
          {/* Lista de Conversas */}
          <ConversasList>
            <ConversasHeader>
              <ConversasTitle>Conversas</ConversasTitle>
            </ConversasHeader>
            <ConversasContent>
              {conversas.map((conversa) => {
                const primeiraMensagem = getPrimeiraMensagem(conversa)
                const outroParticipante = conversa.participantes.find((p) => p !== "Maria Silva") // Em um app real, seria o usuário logado

                return (
                  <ConversaItem
                    key={conversa.id}
                    active={conversaAtiva?.id === conversa.id}
                    onClick={() => setConversaAtiva(conversa)}
                    whileHover={{ x: 4 }}
                  >
                    <ConversaInfo>
                      <Avatar>
                        {outroParticipante
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <ConversaDetails>
                        <ConversaNome>{outroParticipante}</ConversaNome>
                        <ConversaItem>
                          {primeiraMensagem.tipo === "proposta" ? "Proposta de troca" : "Conversa"}
                        </ConversaItem>
                      </ConversaDetails>
                      <ConversaTime>{formatTime(conversa.ultimaAtividade)}</ConversaTime>
                    </ConversaInfo>
                    <UltimaMensagem>{conversa.mensagens[conversa.mensagens.length - 1]?.mensagem}</UltimaMensagem>
                  </ConversaItem>
                )
              })}
            </ConversasContent>
          </ConversasList>

          {/* Área do Chat */}
          <ChatArea>
            {conversaAtiva ? (
              <>
                <ChatHeader>
                  <Avatar>
                    {conversaAtiva.participantes
                      .find((p) => p !== "Maria Silva")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>
                  <ChatHeaderInfo>
                    <ChatHeaderNome>{conversaAtiva.participantes.find((p) => p !== "Maria Silva")}</ChatHeaderNome>
                    <ChatHeaderItem>Proposta de troca ativa</ChatHeaderItem>
                  </ChatHeaderInfo>
                </ChatHeader>

                <MessagesContainer>
                  {/* Card da Proposta */}
                  {(() => {
                    const proposta = conversaAtiva.mensagens.find((m) => m.tipo === "proposta")
                    if (proposta) {
                      return (
                        <PropostaCard>
                          <PropostaTitle>💫 Proposta de Troca</PropostaTitle>
                          <PropostaText>{proposta.mensagem}</PropostaText>
                        </PropostaCard>
                      )
                    }
                  })()}

                  {/* Mensagens */}
                  {conversaAtiva.mensagens
                    .filter((m) => m.tipo !== "proposta")
                    .map((mensagem, index) => (
                      <MessageBubble
                        key={mensagem.id}
                        isOwn={mensagem.autor === "Você" || mensagem.autor === "Maria Silva"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <MessageInfo>
                          <span>{mensagem.autor}</span>
                          <span>•</span>
                          <span>{formatDate(mensagem.timestamp)}</span>
                        </MessageInfo>
                        <MessageText>{mensagem.mensagem}</MessageText>
                        <MessageTime>{formatTime(mensagem.timestamp)}</MessageTime>
                      </MessageBubble>
                    ))}
                  <div ref={messagesEndRef} />
                </MessagesContainer>

                <ChatInput>
                  <form onSubmit={handleEnviarMensagem} style={{ display: "flex", gap: "1rem", width: "100%" }}>
                    <InputWrapper>
                      <StyledTextarea
                        placeholder="Digite sua mensagem..."
                        value={novaMensagem}
                        onChange={(e) => setNovaMensagem(e.target.value)}
                        rows={2}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleEnviarMensagem(e)
                          }
                        }}
                      />
                    </InputWrapper>
                    <PrimaryButton
                      type="submit"
                      disabled={!novaMensagem.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={16} />
                    </PrimaryButton>
                  </form>
                </ChatInput>
              </>
            ) : (
              <EmptyChat>
                <EmptyIcon>
                  <MessageCircle size={32} color="white" />
                </EmptyIcon>
                <EmptyTitle>Selecione uma conversa</EmptyTitle>
                <EmptyDescription>Escolha uma conversa da lista para começar a trocar mensagens</EmptyDescription>
              </EmptyChat>
            )}
          </ChatArea>
        </ChatContainer>
      </PageWrapper>
    </ThemeProvider>
  )
}

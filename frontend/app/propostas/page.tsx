"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "@/styles/theme"
import { GlobalStyles } from "@/styles/GlobalStyles"
import { Container } from "@/components/styled/Container"
import { PrimaryButton, OutlineButton, GhostButton } from "@/components/styled/Button"
import { ArrowLeft, Clock, CheckCircle, XCircle, MessageCircle } from "lucide-react"

// Styled Components específicos da página
const PageWrapper = styled.div`
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

const Header = styled.header`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: ${(props) => props.theme.shadows.sm};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .dark & {
    background: rgba(15, 23, 42, 0.8);
    border-color: rgba(51, 65, 85, 0.3);
  }
`

const HeaderContent = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const MainContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 2rem;
  }
`

const PageHeader = styled.div`
  margin-bottom: 2rem;
`

const PageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: 0.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[100]};
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const PageDescription = styled.p`
  color: ${(props) => props.theme.colors.neutral[600]};
  font-size: 1.125rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

const TabsContainer = styled.div`
  width: 100%;
`

const TabsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  padding: 0.25rem;
  border-radius: ${(props) => props.theme.borderRadius.xl};
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);

  .dark & {
    background: rgba(30, 41, 59, 0.7);
    border-color: rgba(51, 65, 85, 0.3);
  }
`

const TabTrigger = styled.button<{ active: boolean }>`
  padding: 0.75rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${(props) => (props.active ? "white" : "transparent")};
  color: ${(props) => (props.active ? props.theme.colors.primary[600] : props.theme.colors.neutral[600])};
  box-shadow: ${(props) => (props.active ? props.theme.shadows.md : "none")};

  .dark & {
    background: ${(props) => (props.active ? props.theme.colors.neutral[700] : "transparent")};
    color: ${(props) => (props.active ? props.theme.colors.primary[400] : props.theme.colors.neutral[400])};
  }
`

const PropostaCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.lg};
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.xl};
  }

  .dark & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(51, 65, 85, 0.3);
  }
`

const CardHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};

  .dark & {
    border-color: ${(props) => props.theme.colors.neutral[700]};
  }
`

const CardHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const CardTitleGroup = styled.div`
  flex: 1;
`

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: 0.25rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[100]};
  }
`

const CardSubtitle = styled.p`
  color: ${(props) => props.theme.colors.neutral[600]};
  font-size: 0.875rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

const StatusBadge = styled.div<{ status: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  background: ${(props) => {
    switch (props.status) {
      case "pendente":
        return `${props.theme.colors.warning[100]}`
      case "aceita":
        return `${props.theme.colors.success[100]}`
      case "recusada":
        return `${props.theme.colors.error[100]}`
      default:
        return `${props.theme.colors.neutral[100]}`
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case "pendente":
        return `${props.theme.colors.warning[800]}`
      case "aceita":
        return `${props.theme.colors.success[800]}`
      case "recusada":
        return `${props.theme.colors.error[800]}`
      default:
        return `${props.theme.colors.neutral[800]}`
    }
  }};
  border: 1px solid ${(props) => {
    switch (props.status) {
      case "pendente":
        return `${props.theme.colors.warning[200]}`
      case "aceita":
        return `${props.theme.colors.success[200]}`
      case "recusada":
        return `${props.theme.colors.error[200]}`
      default:
        return `${props.theme.colors.neutral[200]}`
    }
  }};

  .dark & {
    background: ${(props) => {
      switch (props.status) {
        case "pendente":
          return `${props.theme.colors.warning[900]}`
        case "aceita":
          return `${props.theme.colors.success[900]}`
        case "recusada":
          return `${props.theme.colors.error[900]}`
        default:
          return `${props.theme.colors.neutral[800]}`
      }
    }};
    color: ${(props) => {
      switch (props.status) {
        case "pendente":
          return `${props.theme.colors.warning[300]}`
        case "aceita":
          return `${props.theme.colors.success[300]}`
        case "recusada":
          return `${props.theme.colors.error[300]}`
        default:
          return `${props.theme.colors.neutral[300]}`
      }
    }};
    border-color: ${(props) => {
      switch (props.status) {
        case "pendente":
          return `${props.theme.colors.warning[700]}`
        case "aceita":
          return `${props.theme.colors.success[700]}`
        case "recusada":
          return `${props.theme.colors.error[700]}`
        default:
          return `${props.theme.colors.neutral[700]}`
      }
    }};
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const Avatar = styled.div`
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
`

const UserDetails = styled.div`
  flex: 1;
`

const UserName = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin: 0;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[100]};
  }
`

const UserMeta = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.neutral[500]};
  margin: 0;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

const MessageBox = styled.div`
  background: ${(props) => props.theme.colors.neutral[50]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 0.75rem;
  margin-bottom: 1rem;

  .dark & {
    background: ${(props) => props.theme.colors.neutral[800]};
  }
`

const MessageText = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.neutral[700]};
  margin: 0;
  line-height: 1.5;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[300]};
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const StatusMessage = styled.div<{ type: "success" | "error" }>`
  background: ${(props) => (props.type === "success" ? props.theme.colors.success[50] : props.theme.colors.error[50])};
  border: 1px solid ${(props) => (props.type === "success" ? props.theme.colors.success[200] : props.theme.colors.error[200])};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 0.75rem;
  color: ${(props) => (props.type === "success" ? props.theme.colors.success[800] : props.theme.colors.error[800])};
  font-size: 0.875rem;
  font-weight: 600;

  .dark & {
    background: ${(props) => (props.type === "success" ? props.theme.colors.success[900] : props.theme.colors.error[900])};
    border-color: ${(props) => (props.type === "success" ? props.theme.colors.success[700] : props.theme.colors.error[700])};
    color: ${(props) => (props.type === "success" ? props.theme.colors.success[300] : props.theme.colors.error[300])};
  }
`

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 3rem 1rem;
`

const EmptyIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`

const EmptyTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: 0.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[100]};
  }
`

const EmptyDescription = styled.p`
  color: ${(props) => props.theme.colors.neutral[500]};
  margin-bottom: 1rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

// Dados mockados
const propostasRecebidas = [
  {
    id: 1,
    itemSolicitado: "Livros de Romance",
    itemOferecido: "Conjunto de Panelas",
    usuario: "Roberto Mendes",
    bairro: "Jardim das Flores",
    data: "2 dias atrás",
    status: "pendente",
    mensagem: "Olá! Tenho interesse nos seus livros. Posso oferecer um conjunto de panelas de inox em ótimo estado.",
  },
  {
    id: 2,
    itemSolicitado: "Livros de Romance",
    itemOferecido: "Roupas Femininas",
    usuario: "Ana Costa",
    bairro: "Jardim das Flores",
    data: "1 dia atrás",
    status: "pendente",
    mensagem: "Oi! Gostaria de trocar por algumas roupas femininas tamanho M. Você teria interesse?",
  },
]

const propostasEnviadas = [
  {
    id: 3,
    itemSolicitado: "Bicicleta Infantil",
    itemOferecido: "Jogos de Tabuleiro",
    usuario: "João Santos",
    bairro: "Vila Nova",
    data: "3 dias atrás",
    status: "aceita",
    mensagem: "Tenho jogos de tabuleiro completos para trocar pela bicicleta.",
  },
  {
    id: 4,
    itemSolicitado: "Kit Ferramentas",
    itemOferecido: "Livros Técnicos",
    usuario: "Carlos Oliveira",
    bairro: "Centro",
    data: "5 dias atrás",
    status: "recusada",
    mensagem: "Posso oferecer livros técnicos de engenharia.",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "pendente":
      return <Clock size={16} />
    case "aceita":
      return <CheckCircle size={16} />
    case "recusada":
      return <XCircle size={16} />
    default:
      return <Clock size={16} />
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "pendente":
      return "Pendente"
    case "aceita":
      return "Aceita"
    case "recusada":
      return "Recusada"
    default:
      return "Pendente"
  }
}

export default function PropostasPage() {
  const [activeTab, setActiveTab] = useState("recebidas")

  const handleAceitarProposta = (id: number) => {
    console.log("Aceitar proposta:", id)
  }

  const handleRecusarProposta = (id: number) => {
    console.log("Recusar proposta:", id)
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
                <Link href="/">
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

        <MainContent>
          <PageHeader>
            <PageTitle>Minhas Propostas</PageTitle>
            <PageDescription>Gerencie as propostas de troca recebidas e enviadas</PageDescription>
          </PageHeader>

          <TabsContainer>
            <TabsList>
              <TabTrigger active={activeTab === "recebidas"} onClick={() => setActiveTab("recebidas")}>
                Recebidas ({propostasRecebidas.length})
              </TabTrigger>
              <TabTrigger active={activeTab === "enviadas"} onClick={() => setActiveTab("enviadas")}>
                Enviadas ({propostasEnviadas.length})
              </TabTrigger>
            </TabsList>

            {/* Tab Recebidas */}
            {activeTab === "recebidas" && (
              <div>
                {propostasRecebidas.length === 0 ? (
                  <EmptyState initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <EmptyIcon>
                      <MessageCircle size={24} color="white" />
                    </EmptyIcon>
                    <EmptyTitle>Nenhuma proposta recebida</EmptyTitle>
                    <EmptyDescription>
                      Quando alguém se interessar pelos seus itens, as propostas aparecerão aqui.
                    </EmptyDescription>
                    <Link href="/cadastrar">
                      <PrimaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        Cadastrar Primeiro Item
                      </PrimaryButton>
                    </Link>
                  </EmptyState>
                ) : (
                  propostasRecebidas.map((proposta) => (
                    <PropostaCard
                      key={proposta.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -2 }}
                    >
                      <CardHeader>
                        <CardHeaderTop>
                          <CardTitleGroup>
                            <CardTitle>Interesse em: {proposta.itemSolicitado}</CardTitle>
                            <CardSubtitle>Oferece: {proposta.itemOferecido}</CardSubtitle>
                          </CardTitleGroup>
                          <StatusBadge status={proposta.status}>
                            {getStatusIcon(proposta.status)}
                            {getStatusText(proposta.status)}
                          </StatusBadge>
                        </CardHeaderTop>
                      </CardHeader>
                      <CardContent>
                        <UserInfo>
                          <Avatar>
                            {proposta.usuario
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </Avatar>
                          <UserDetails>
                            <UserName>{proposta.usuario}</UserName>
                            <UserMeta>
                              {proposta.bairro} • {proposta.data}
                            </UserMeta>
                          </UserDetails>
                        </UserInfo>

                        <MessageBox>
                          <MessageText>{proposta.mensagem}</MessageText>
                        </MessageBox>

                        {proposta.status === "pendente" && (
                          <ActionButtons>
                            <PrimaryButton
                              as={motion.button}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleAceitarProposta(proposta.id)}
                            >
                              Aceitar Proposta
                            </PrimaryButton>
                            <OutlineButton
                              as={motion.button}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleRecusarProposta(proposta.id)}
                            >
                              Recusar
                            </OutlineButton>
                            <GhostButton
                              as={motion.button}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <MessageCircle size={16} />
                              Conversar
                            </GhostButton>
                          </ActionButtons>
                        )}
                      </CardContent>
                    </PropostaCard>
                  ))
                )}
              </div>
            )}

            {/* Tab Enviadas */}
            {activeTab === "enviadas" && (
              <div>
                {propostasEnviadas.length === 0 ? (
                  <EmptyState initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <EmptyIcon>
                      <MessageCircle size={24} color="white" />
                    </EmptyIcon>
                    <EmptyTitle>Nenhuma proposta enviada</EmptyTitle>
                    <EmptyDescription>
                      Explore os itens disponíveis e faça sua primeira proposta de troca.
                    </EmptyDescription>
                    <Link href="/">
                      <PrimaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        Explorar Itens
                      </PrimaryButton>
                    </Link>
                  </EmptyState>
                ) : (
                  propostasEnviadas.map((proposta) => (
                    <PropostaCard
                      key={proposta.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -2 }}
                    >
                      <CardHeader>
                        <CardHeaderTop>
                          <CardTitleGroup>
                            <CardTitle>Proposta para: {proposta.itemSolicitado}</CardTitle>
                            <CardSubtitle>Você ofereceu: {proposta.itemOferecido}</CardSubtitle>
                          </CardTitleGroup>
                          <StatusBadge status={proposta.status}>
                            {getStatusIcon(proposta.status)}
                            {getStatusText(proposta.status)}
                          </StatusBadge>
                        </CardHeaderTop>
                      </CardHeader>
                      <CardContent>
                        <UserInfo>
                          <Avatar>
                            {proposta.usuario
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </Avatar>
                          <UserDetails>
                            <UserName>{proposta.usuario}</UserName>
                            <UserMeta>
                              {proposta.bairro} • {proposta.data}
                            </UserMeta>
                          </UserDetails>
                        </UserInfo>

                        <MessageBox>
                          <MessageText>{proposta.mensagem}</MessageText>
                        </MessageBox>

                        {proposta.status === "aceita" && (
                          <StatusMessage type="success">
                            🎉 Proposta aceita! Entre em contato para combinar a troca.
                          </StatusMessage>
                        )}

                        {proposta.status === "recusada" && (
                          <StatusMessage type="error">
                            Proposta recusada. Que tal tentar com outro item?
                          </StatusMessage>
                        )}
                      </CardContent>
                    </PropostaCard>
                  ))
                )}
              </div>
            )}
          </TabsContainer>
        </MainContent>
      </PageWrapper>
    \

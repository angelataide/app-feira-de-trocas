"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "@/styles/theme"
import { GlobalStyles } from "@/styles/GlobalStyles"
import { Container } from "@/components/styled/Container"
import { PrimaryButton, OutlineButton } from "@/components/styled/Button"
import { StyledInput, StyledTextarea, InputGroup, InputLabel } from "@/components/styled/Input"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft, Upload, CheckCircle, Sparkles, Camera, Gift } from "lucide-react"

// Styled Components específicos da página
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    ${(props) => props.theme.colors.primary[100]} 0%, 
    ${(props) => props.theme.colors.secondary[50]} 50%, 
    ${(props) => props.theme.colors.accent[100]} 100%);
  position: relative;
  overflow: hidden;
  transition: background 0.5s ease;

  .dark & {
    background: linear-gradient(135deg, 
      ${(props) => props.theme.colors.neutral[900]} 0%, 
      ${(props) => props.theme.colors.primary[900]} 50%, 
      ${(props) => props.theme.colors.secondary[900]} 100%);
  }
`

const FloatingElement = styled(motion.div)<{ size: string; gradient: string; position: string }>`
  position: fixed;
  ${(props) => props.position}
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: ${(props) => props.gradient};
  border-radius: 50%;
  opacity: 0.2;
  filter: blur(60px);
  pointer-events: none;

  .dark & {
    opacity: 0.1;
  }
`

const Header = styled(motion.header)`
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

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const BackButton = styled(OutlineButton)`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${(props) => props.theme.shadows.lg};

  .dark & {
    background: rgba(30, 41, 59, 0.6);
    border-color: rgba(51, 65, 85, 0.2);
  }
`

const MainContent = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  position: relative;
  z-index: 10;

  @media (min-width: 640px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 2rem;
  }
`

const FormCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  box-shadow: ${(props) => props.theme.shadows["2xl"]};
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  position: relative;

  .dark & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(51, 65, 85, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${(props) => props.theme.gradients.card};
    opacity: 0.05;
    pointer-events: none;

    .dark & {
      background: ${(props) => props.theme.gradients.darkCard};
      opacity: 0.1;
    }
  }
`

const FormHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  position: relative;

  .dark & {
    border-color: ${(props) => props.theme.colors.neutral[700]};
  }
`

const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.shadows.lg};
`

const HeaderText = styled.div`
  flex: 1;
`

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`

const FormDescription = styled.p`
  color: ${(props) => props.theme.colors.neutral[600]};
  font-size: 1.125rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

const FormContent = styled.div`
  padding: 1.5rem;
  position: relative;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${(props) => props.theme.colors.primary[200]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  color: ${(props) => props.theme.colors.neutral[900]};
  transition: all 0.3s ease;
  cursor: pointer;
  height: 3rem;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary[100]};
  }

  .dark & {
    background: rgba(30, 41, 59, 0.7);
    border-color: ${(props) => props.theme.colors.primary[700]};
    color: ${(props) => props.theme.colors.neutral[100]};

    &:focus {
      border-color: ${(props) => props.theme.colors.primary[500]};
      box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary[900]};
    }
  }
`

const UploadArea = styled.div`
  border: 2px dashed ${(props) => props.theme.colors.primary[300]};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  padding: 2rem;
  text-align: center;
  background: ${(props) => props.theme.gradients.card};
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary[400]};
  }

  .dark & {
    background: ${(props) => props.theme.gradients.darkCard};
    border-color: ${(props) => props.theme.colors.primary[700]};

    &:hover {
      border-color: ${(props) => props.theme.colors.primary[600]};
    }
  }
`

const UploadIcon = styled(motion.div)`
  width: 4rem;
  height: 4rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  box-shadow: ${(props) => props.theme.shadows.lg};
`

const UploadText = styled.p`
  color: ${(props) => props.theme.colors.neutral[700]};
  font-weight: 600;
  margin-bottom: 0.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[300]};
  }
`

const UploadSubtext = styled.p`
  color: ${(props) => props.theme.colors.neutral[500]};
  font-size: 0.875rem;
  margin-bottom: 1rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
`

const SuccessCard = styled(motion.div)`
  width: 100%;
  max-width: 28rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  box-shadow: ${(props) => props.theme.shadows["2xl"]};
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  position: relative;

  .dark & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(51, 65, 85, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
      ${(props) => props.theme.colors.success[500]} 0%, 
      ${(props) => props.theme.colors.success[600]} 100%);
    opacity: 0.1;
    pointer-events: none;

    .dark & {
      opacity: 0.05;
    }
  }
`

const SuccessContent = styled.div`
  padding: 2rem;
  position: relative;
`

const SuccessIcon = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, 
    ${(props) => props.theme.colors.success[500]} 0%, 
    ${(props) => props.theme.colors.success[600]} 100%);
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: ${(props) => props.theme.shadows.lg};
`

const SuccessTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, 
    ${(props) => props.theme.colors.success[600]} 0%, 
    ${(props) => props.theme.colors.success[700]} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;

  .dark & {
    background: linear-gradient(135deg, 
      ${(props) => props.theme.colors.success[400]} 0%, 
      ${(props) => props.theme.colors.success[500]} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const SuccessDescription = styled(motion.p)`
  color: ${(props) => props.theme.colors.neutral[600]};
  font-size: 1.125rem;
  margin-bottom: 1.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

const LoadingDots = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors.primary[600]};

  .dark & {
    color: ${(props) => props.theme.colors.primary[400]};
  }
`

const Dot = styled(motion.div)`
  width: 0.5rem;
  height: 0.5rem;
  background: ${(props) => props.theme.colors.primary[500]};
  border-radius: 50%;

  .dark & {
    background: ${(props) => props.theme.colors.primary[400]};
  }
`

const TipsCard = styled(motion.div)`
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${(props) => props.theme.shadows.lg};
  position: relative;

  .dark & {
    background: rgba(30, 41, 59, 0.6);
    border-color: rgba(51, 65, 85, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, 
      ${(props) => props.theme.colors.secondary[500]} 0%, 
      ${(props) => props.theme.colors.accent[500]} 100%);
    opacity: 0.05;
    pointer-events: none;
    border-radius: ${(props) => props.theme.borderRadius["2xl"]};

    .dark & {
      opacity: 0.1;
    }
  }
`

const TipsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
`

const TipsIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.gradients.secondary};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`

const TipsTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutral[800]};

  .dark & {
    color: ${(props) => props.theme.colors.neutral[100]};
  }
`

const TipsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
`

const TipItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${(props) => props.theme.colors.neutral[700]};

  .dark & {
    color: ${(props) => props.theme.colors.neutral[300]};
  }
`

const TipBullet = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 1.125rem;
  margin-top: 0.125rem;
`

const categorias = ["Livros", "Roupas", "Brinquedos", "Ferramentas", "Casa", "Eletrônicos", "Outros"]
const bairros = ["Centro", "Vila Nova", "Jardim das Flores", "Bela Vista", "São José", "Outros"]

const floatingVariants = {
  animate: {
    y: [-15, 15, -15],
    x: [-5, 5, -5],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const successVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
}

export default function CadastrarPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
    bairro: "",
    condicao: "",
    observacoes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Redirecionar após 3 segundos
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSuccess) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageWrapper>
          {/* Floating Elements */}
          <FloatingElement
            size="8rem"
            gradient={theme.gradients.primary}
            position="top: 5rem; left: 2.5rem;"
            variants={floatingVariants}
            animate="animate"
          />
          <FloatingElement
            size="10rem"
            gradient={theme.gradients.secondary}
            position="bottom: 5rem; right: 5rem;"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />

          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              position: "relative",
              zIndex: 10,
            }}
          >
            <SuccessCard variants={successVariants} initial="hidden" animate="visible">
              <SuccessContent>
                <SuccessIcon
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle size={40} color="white" />
                </SuccessIcon>
                <SuccessTitle
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Item Cadastrado! 🎉
                </SuccessTitle>
                <SuccessDescription
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Seu item foi cadastrado com sucesso e já está disponível para troca na comunidade!
                </SuccessDescription>
                <LoadingDots initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <Dot animate={{ y: [-5, 5, -5] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }} />
                  <Dot
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
                  />
                  <Dot
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                  />
                  <span style={{ marginLeft: "0.5rem", fontSize: "0.875rem", fontWeight: 600 }}>
                    Redirecionando para a página inicial...
                  </span>
                </LoadingDots>
              </SuccessContent>
            </SuccessCard>
          </div>
        </PageWrapper>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageWrapper>
        {/* Floating Elements */}
        <FloatingElement
          size="8rem"
          gradient={theme.gradients.primary}
          position="top: 5rem; left: 2.5rem;"
          variants={floatingVariants}
          animate="animate"
        />
        <FloatingElement
          size="10rem"
          gradient={theme.gradients.secondary}
          position="top: 10rem; right: 5rem;"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <FloatingElement
          size="9rem"
          gradient={theme.gradients.accent}
          position="bottom: 10rem; left: 25%;"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />

        {/* Header */}
        <Header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Container>
            <HeaderContent>
              <HeaderLeft>
                <Link href="/">
                  <BackButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <ArrowLeft size={16} />
                    Voltar
                  </BackButton>
                </Link>
                <Logo whileHover={{ scale: 1.05 }}>
                  <LogoIcon>
                    <Sparkles size={20} color="white" />
                  </LogoIcon>
                  <LogoText>TrocaVizinho</LogoText>
                </Logo>
              </HeaderLeft>
              <ThemeToggle />
            </HeaderContent>
          </Container>
        </Header>

        <MainContent>
          <FormCard variants={cardVariants} initial="hidden" animate="visible">
            <FormHeader>
              <HeaderIcon>
                <IconWrapper>
                  <Gift size={24} color="white" />
                </IconWrapper>
                <HeaderText>
                  <FormTitle>Cadastrar Novo Item ✨</FormTitle>
                  <FormDescription>Preencha as informações do item que você gostaria de trocar</FormDescription>
                </HeaderText>
              </HeaderIcon>
            </FormHeader>
            <FormContent>
              <Form onSubmit={handleSubmit}>
                {/* Título */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  <InputGroup>
                    <InputLabel htmlFor="titulo">Título do Item *</InputLabel>
                    <StyledInput
                      id="titulo"
                      placeholder="Ex: Livros de Romance, Bicicleta Infantil..."
                      value={formData.titulo}
                      onChange={(e) => handleChange("titulo", e.target.value)}
                      required
                    />
                  </InputGroup>
                </motion.div>

                {/* Descrição */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <InputGroup>
                    <InputLabel htmlFor="descricao">Descrição *</InputLabel>
                    <StyledTextarea
                      id="descricao"
                      placeholder="Descreva o item, seu estado de conservação e outras informações importantes..."
                      value={formData.descricao}
                      onChange={(e) => handleChange("descricao", e.target.value)}
                      rows={4}
                      required
                    />
                  </InputGroup>
                </motion.div>

                {/* Categoria e Bairro */}
                <FormGrid>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <InputGroup>
                      <InputLabel>Categoria *</InputLabel>
                      <StyledSelect
                        value={formData.categoria}
                        onChange={(e) => handleChange("categoria", e.target.value)}
                        required
                      >
                        <option value="">Selecione uma categoria</option>
                        {categorias.map((categoria) => (
                          <option key={categoria} value={categoria}>
                            {categoria}
                          </option>
                        ))}
                      </StyledSelect>
                    </InputGroup>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <InputGroup>
                      <InputLabel>Bairro *</InputLabel>
                      <StyledSelect
                        value={formData.bairro}
                        onChange={(e) => handleChange("bairro", e.target.value)}
                        required
                      >
                        <option value="">Selecione seu bairro</option>
                        {bairros.map((bairro) => (
                          <option key={bairro} value={bairro}>
                            {bairro}
                          </option>
                        ))}
                      </StyledSelect>
                    </InputGroup>
                  </motion.div>
                </FormGrid>

                {/* Condição */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                  <InputGroup>
                    <InputLabel>Estado de Conservação *</InputLabel>
                    <StyledSelect
                      value={formData.condicao}
                      onChange={(e) => handleChange("condicao", e.target.value)}
                      required
                    >
                      <option value="">Como está o estado do item?</option>
                      <option value="novo">✨ Novo (nunca usado)</option>
                      <option value="otimo">🌟 Ótimo estado</option>
                      <option value="bom">👍 Bom estado</option>
                      <option value="regular">⚡ Estado regular</option>
                      <option value="precisa-reparo">🔧 Precisa de pequenos reparos</option>
                    </StyledSelect>
                  </InputGroup>
                </motion.div>

                {/* Upload de Fotos */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <InputGroup>
                    <InputLabel>Fotos do Item</InputLabel>
                    <UploadArea>
                      <UploadIcon whileHover={{ scale: 1.05 }}>
                        <Camera size={32} color="white" />
                      </UploadIcon>
                      <UploadText>Clique para adicionar fotos ou arraste e solte aqui</UploadText>
                      <UploadSubtext>PNG, JPG até 5MB cada (máximo 5 fotos)</UploadSubtext>
                      <OutlineButton
                        as={motion.button}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                      >
                        <Upload size={16} />
                        Selecionar Fotos
                      </OutlineButton>
                    </UploadArea>
                  </InputGroup>
                </motion.div>

                {/* Observações */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                  <InputGroup>
                    <InputLabel htmlFor="observacoes">Observações Adicionais</InputLabel>
                    <StyledTextarea
                      id="observacoes"
                      placeholder="Informações extras, preferências para troca, horários disponíveis..."
                      value={formData.observacoes}
                      onChange={(e) => handleChange("observacoes", e.target.value)}
                      rows={3}
                    />
                  </InputGroup>
                </motion.div>

                {/* Botões */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                  <ButtonGroup>
                    <Link href="/" style={{ flex: 1 }}>
                      <OutlineButton
                        as={motion.button}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        style={{ width: "100%", height: "3rem" }}
                      >
                        Cancelar
                      </OutlineButton>
                    </Link>
                    <PrimaryButton
                      as={motion.button}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={
                        isSubmitting ||
                        !formData.titulo ||
                        !formData.descricao ||
                        !formData.categoria ||
                        !formData.bairro ||
                        !formData.condicao
                      }
                      style={{ flex: 1, height: "3rem" }}
                    >
                      {isSubmitting ? (
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <div
                            style={{
                              width: "1rem",
                              height: "1rem",
                              border: "2px solid rgba(255, 255, 255, 0.3)",
                              borderTop: "2px solid white",
                              borderRadius: "50%",
                              animation: "spin 1s linear infinite",
                            }}
                          />
                          Cadastrando...
                        </div>
                      ) : (
                        "✨ Cadastrar Item"
                      )}
                    </PrimaryButton>
                  </ButtonGroup>
                </motion.div>
              </Form>
            </FormContent>
          </FormCard>

          {/* Dicas */}
          <TipsCard initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <TipsHeader>
              <TipsIcon>
                <Sparkles size={16} color="white" />
              </TipsIcon>
              <TipsTitle>Dicas para um bom cadastro ✨</TipsTitle>
            </TipsHeader>
            <TipsList>
              <TipItem>
                <TipBullet color={theme.colors.primary[500]}>•</TipBullet>
                <span>Seja honesto sobre o estado de conservação do item</span>
              </TipItem>
              <TipItem>
                <TipBullet color={theme.colors.secondary[500]}>•</TipBullet>
                <span>Adicione fotos claras e bem iluminadas</span>
              </TipItem>
              <TipItem>
                <TipBullet color={theme.colors.accent[500]}>•</TipBullet>
                <span>Descreva detalhes importantes como tamanho, cor, marca</span>
              </TipItem>
              <TipItem>
                <TipBullet color={theme.colors.primary[600]}>•</TipBullet>
                <span>Mencione se há peças faltando ou defeitos</span>
              </TipItem>
              <TipItem>
                <TipBullet color={theme.colors.success[500]}>•</TipBullet>
                <span>Indique suas preferências para troca</span>
              </TipItem>
            </TipsList>
          </TipsCard>
        </MainContent>
      </PageWrapper>
    </ThemeProvider>
  )
}

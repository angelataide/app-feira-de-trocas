"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "@/styles/theme"
import { GlobalStyles } from "@/styles/GlobalStyles"
import { PrimaryButton, OutlineButton } from "@/components/styled/Button"
import { InputGroup, InputLabel, InputIcon, InputWithIcon } from "@/components/styled/Input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, ArrowLeft, Sparkles, Heart } from "lucide-react"

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

const Header = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`

const BackButton = styled(motion.div)`
  a {
    text-decoration: none;
  }
`

const StyledBackButton = styled(OutlineButton)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${(props) => props.theme.shadows.lg};

  .dark & {
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(51, 65, 85, 0.2);
  }
`

const MainContent = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  z-index: 10;
`

const FormContainer = styled.div`
  width: 100%;
  max-width: 28rem;
`

const LogoSection = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`

const LogoWrapper = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  cursor: pointer;
`

const LogoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.theme.shadows.lg};
`

const LogoText = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const LogoDescription = styled.p`
  color: ${(props) => props.theme.colors.neutral[600]};
  font-size: 1.125rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
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
  text-align: center;
  padding: 1.5rem 1.5rem 1rem;
  position: relative;
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
  padding: 0 1.5rem 1.5rem;
  position: relative;
`

const TabsContainer = styled.div`
  margin-bottom: 1.5rem;
`

const TabsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
  background: ${(props) => props.theme.gradients.card};
  padding: 0.25rem;
  border-radius: ${(props) => props.theme.borderRadius.xl};
  margin-bottom: 1.5rem;

  .dark & {
    background: ${(props) => props.theme.gradients.darkCard};
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

const PasswordInputWrapper = styled.div`
  position: relative;
`

const PasswordToggle = styled(motion.button)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary[400]};
  cursor: pointer;
  padding: 0.25rem;

  .dark & {
    color: ${(props) => props.theme.colors.primary[300]};
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary[600]};

    .dark & {
      color: ${(props) => props.theme.colors.primary[400]};
    }
  }
`

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: ${(props) => props.theme.colors.primary[500]};
`

const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.neutral[600]};
  cursor: pointer;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

const ForgotLink = styled(Link)`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primary[600]};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.colors.primary[700]};
    text-decoration: underline;
  }

  .dark & {
    color: ${(props) => props.theme.colors.primary[400]};

    &:hover {
      color: ${(props) => props.theme.colors.primary[300]};
    }
  }
`

const TermsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`

const TermsText = styled.label`
  font-size: 0.875rem;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.neutral[600]};
  cursor: pointer;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }

  a {
    color: ${(props) => props.theme.colors.primary[600]};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: ${(props) => props.theme.colors.primary[700]};
      text-decoration: underline;
    }

    .dark & {
      color: ${(props) => props.theme.colors.primary[400]};

      &:hover {
        color: ${(props) => props.theme.colors.primary[300]};
      }
    }
  }
`

const ErrorMessage = styled(motion.p)`
  color: ${(props) => props.theme.colors.error[500]};
  font-size: 0.875rem;
  margin-top: 0.25rem;

  .dark & {
    color: ${(props) => props.theme.colors.error[400]};
  }
`

const LoadingSpinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const InfoCard = styled(motion.div)`
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${(props) => props.theme.shadows.lg};

  .dark & {
    background: rgba(30, 41, 59, 0.6);
    border-color: rgba(51, 65, 85, 0.2);
  }
`

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`

const InfoText = styled.p`
  color: ${(props) => props.theme.colors.neutral[700]};
  line-height: 1.6;
  text-align: center;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[300]};
  }

  .highlight {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary[600]};

    .dark & {
      color: ${(props) => props.theme.colors.primary[400]};
    }
  }

  .highlight-secondary {
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary[600]};

    .dark & {
      color: ${(props) => props.theme.colors.secondary[400]};
    }
  }
`

const floatingVariants = {
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
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

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("login")

  // Estados para login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  // Estados para cadastro
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    neighborhood: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    // Validação básica
    const newErrors: Record<string, string> = {}
    if (!loginData.email) newErrors.email = "Email é obrigatório"
    if (!loginData.password) newErrors.password = "Senha é obrigatória"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    // Simular login
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simular sucesso
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Usuário Logado",
        email: loginData.email,
      }),
    )

    setIsLoading(false)
    router.push("/")
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    // Validação
    const newErrors: Record<string, string> = {}
    if (!registerData.name) newErrors.name = "Nome é obrigatório"
    if (!registerData.email) newErrors.email = "Email é obrigatório"
    if (!registerData.phone) newErrors.phone = "Telefone é obrigatório"
    if (!registerData.neighborhood) newErrors.neighborhood = "Bairro é obrigatório"
    if (!registerData.password) newErrors.password = "Senha é obrigatória"
    if (registerData.password.length < 6) newErrors.password = "Senha deve ter pelo menos 6 caracteres"
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = "Senhas não coincidem"
    }
    if (!registerData.acceptTerms) newErrors.acceptTerms = "Você deve aceitar os termos"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    // Simular cadastro
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simular sucesso
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: registerData.name,
        email: registerData.email,
      }),
    )

    setIsLoading(false)
    router.push("/")
  }

  const bairros = ["Centro", "Vila Nova", "Jardim das Flores", "Bela Vista", "São José", "Outros"]

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
        <FloatingElement
          size="7rem"
          gradient={theme.gradients.floating}
          position="bottom: 5rem; right: 33%;"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 6 }}
        />

        {/* Header */}
        <Header>
          <BackButton initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Link href="/">
              <StyledBackButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ArrowLeft size={16} />
                Voltar ao Início
              </StyledBackButton>
            </Link>
          </BackButton>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <ThemeToggle />
          </motion.div>
        </Header>

        <MainContent>
          <FormContainer>
            {/* Logo */}
            <LogoSection initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <LogoWrapper whileHover={{ scale: 1.1, rotate: 5 }}>
                <LogoIcon>
                  <Sparkles size={28} color="white" />
                </LogoIcon>
                <LogoText>TrocaVizinho</LogoText>
              </LogoWrapper>
              <LogoDescription>Conectando comunidades através da troca consciente ✨</LogoDescription>
            </LogoSection>

            <FormCard variants={cardVariants} initial="hidden" animate="visible">
              <FormHeader>
                <FormTitle>Bem-vindo! 🎉</FormTitle>
                <FormDescription>Entre na sua conta ou crie uma nova para começar a trocar</FormDescription>
              </FormHeader>
              <FormContent>
                <TabsContainer>
                  <TabsList>
                    <TabTrigger active={activeTab === "login"} onClick={() => setActiveTab("login")}>
                      Entrar
                    </TabTrigger>
                    <TabTrigger active={activeTab === "register"} onClick={() => setActiveTab("register")}>
                      Cadastrar
                    </TabTrigger>
                  </TabsList>

                  {/* Tab de Login */}
                  {activeTab === "login" && (
                    <Form onSubmit={handleLogin}>
                      <InputGroup>
                        <InputLabel htmlFor="login-email">Email</InputLabel>
                        <div style={{ position: "relative" }}>
                          <InputIcon>
                            <Mail size={20} />
                          </InputIcon>
                          <InputWithIcon
                            id="login-email"
                            type="email"
                            placeholder="seu@email.com"
                            value={loginData.email}
                            onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                            style={{ borderColor: errors.email ? theme.colors.error[400] : undefined }}
                          />
                        </div>
                        {errors.email && (
                          <ErrorMessage initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            {errors.email}
                          </ErrorMessage>
                        )}
                      </InputGroup>

                      <InputGroup>
                        <InputLabel htmlFor="login-password">Senha</InputLabel>
                        <PasswordInputWrapper>
                          <InputIcon>
                            <Lock size={20} />
                          </InputIcon>
                          <InputWithIcon
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Sua senha"
                            value={loginData.password}
                            onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                            style={{
                              borderColor: errors.password ? theme.colors.error[400] : undefined,
                              paddingRight: "3rem",
                            }}
                          />
                          <PasswordToggle
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </PasswordToggle>
                        </PasswordInputWrapper>
                        {errors.password && (
                          <ErrorMessage initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            {errors.password}
                          </ErrorMessage>
                        )}
                      </InputGroup>

                      <CheckboxWrapper>
                        <CheckboxGroup>
                          <Checkbox
                            id="remember"
                            type="checkbox"
                            checked={loginData.rememberMe}
                            onChange={(e) => setLoginData((prev) => ({ ...prev, rememberMe: e.target.checked }))}
                          />
                          <CheckboxLabel htmlFor="remember">Lembrar de mim</CheckboxLabel>
                        </CheckboxGroup>
                        <ForgotLink href="/recuperar-senha">Esqueceu a senha?</ForgotLink>
                      </CheckboxWrapper>

                      <PrimaryButton
                        as={motion.button}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        style={{ width: "100%", height: "3rem" }}
                      >
                        {isLoading ? (
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <LoadingSpinner />
                            Entrando...
                          </div>
                        ) : (
                          "✨ Entrar"
                        )}
                      </PrimaryButton>
                    </Form>
                  )}

                  {/* Tab de Cadastro */}
                  {activeTab === "register" && (
                    <Form onSubmit={handleRegister}>
                      <InputGroup>
                        <InputLabel htmlFor="register-name">Nome Completo</InputLabel>
                        <div style={{ position: "relative" }}>
                          <InputIcon>
                            <User size={20} />
                          </InputIcon>
                          <InputWithIcon
                            id="register-name"
                            type="text"
                            placeholder="Seu nome completo"
                            value={registerData.name}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, name: e.target.value }))}
                            style={{ borderColor: errors.name ? theme.colors.error[400] : undefined }}
                          />
                        </div>
                        {errors.name && (
                          <ErrorMessage initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            {errors.name}
                          </ErrorMessage>
                        )}
                      </InputGroup>

                      <InputGroup>
                        <InputLabel htmlFor="register-email">Email</InputLabel>
                        <div style={{ position: "relative" }}>
                          <InputIcon>
                            <Mail size={20} />
                          </InputIcon>
                          <InputWithIcon
                            id="register-email"
                            type="email"
                            placeholder="seu@email.com"
                            value={registerData.email}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
                            style={{ borderColor: errors.email ? theme.colors.error[400] : undefined }}
                          />
                        </div>
                        {errors.email && (
                          <ErrorMessage initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            {errors.email}
                          </ErrorMessage>
                        )}
                      </InputGroup>

                      <FormGrid>
                        <InputGroup>
                          <InputLabel htmlFor="register-phone">Telefone</InputLabel>
                          <div style={{ position: "relative" }}>
                            <InputIcon>
                              <Phone size={16} />
                            </InputIcon>
                            <InputWithIcon
                              id="register-phone"
                              type="tel"
                              placeholder="(11) 99999-9999"
                              value={registerData.phone}
                              onChange={(e) => setRegisterData((prev) => ({ ...prev, phone: e.target.value }))}
                              style={{
                                borderColor: errors.phone ? theme.colors.error[400] : undefined,
                                paddingLeft: "2.5rem",
                              }}
                            />
                          </div>
                          {errors.phone && (
                            <ErrorMessage initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                              {errors.phone}
                            </ErrorMessage>
                          )}
                        </InputGroup>

                        <InputGroup>
                          <InputLabel htmlFor="register-neighborhood">Bairro</InputLabel>
                          <div style={{ position: "relative" }}>
                            <InputIcon>
                              <MapPin size={16} />
                            </InputIcon>
                            <select
                              id="register-neighborhood"
                              value={registerData.neighborhood}
                              onChange={(e) => setRegisterData((prev) => ({ ...prev, neighborhood: e.target.value }))}
                              style={{
                                width: "100%",
                                paddingLeft: "2.5rem",
                                paddingRight: "0.75rem",
                                paddingTop: "0.75rem",
                                paddingBottom: "0.75rem",
                                height: "3rem",
                                border: `2px solid ${errors.neighborhood ? theme.colors.error[400] : theme.colors.primary[200]}`,
                                borderRadius: theme.borderRadius.lg,
                                fontSize: "1rem",
                                background: "rgba(255, 255, 255, 0.7)",
                                backdropFilter: "blur(8px)",
                                color: theme.colors.neutral[900],
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                              }}
                            >
                              <option value="">Selecione</option>
                              {bairros.map((bairro) => (
                                <option key={bairro} value={bairro}>
                                  {bairro}
                                </option>
                              ))}
                            </select>
                          </div>
                          {errors.neighborhood && (
                            <ErrorMessage initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                              {errors.neighborhood}
                            </ErrorMessage>
                          )}
                        </InputGroup>
                      </FormGrid>

                      <InputGroup>
                        <InputLabel htmlFor="register-password">Senha</InputLabel>
                        <PasswordInputWrapper>
                          <InputIcon>
                            <Lock size={20} />
                          </InputIcon>
                          <InputWithIcon
                            id="register-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Mínimo 6 caracteres"
                            value={registerData.password}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
                            style={{
                              borderColor: errors.password ? theme.colors.error[400] : undefined,
                              paddingRight: "3rem",
                            }}
                          />
                          <PasswordToggle
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </PasswordToggle>
                        </PasswordInputWrapper>
                        {errors.password && (
                          <ErrorMessage initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            {errors.password}
                          </ErrorMessage>
                        )}
                      </InputGroup>

                      <InputGroup>
                        <InputLabel htmlFor="register-confirm-password">Confirmar Senha</InputLabel>
                        <div style={{ position: "relative" }}>
                          <InputIcon>
                            <Lock size={20} />
                          </InputIcon>
                          <InputWithIcon
                            id="register-confirm-password"
                            type="password"
                            placeholder="Digite a senha novamente"
                            value={registerData.confirmPassword}
                            onChange={(e) => setRegisterData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                            style={{ borderColor: errors.confirmPassword ? theme.colors.error[400] : undefined }}
                          />
                        </div>
                        {errors.confirmPassword && (
                          <ErrorMessage initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            {errors.confirmPassword}
                          </ErrorMessage>
                        )}
                      </InputGroup>

                      <TermsWrapper>
                        <Checkbox
                          id="terms"
                          type="checkbox"
                          checked={registerData.acceptTerms}
                          onChange={(e) => setRegisterData((prev) => ({ ...prev, acceptTerms: e.target.checked }))}
                          style={{ marginTop: "0.25rem" }}
                        />
                        <TermsText htmlFor="terms">
                          Eu aceito os <Link href="/termos">Termos de Uso</Link> e a{" "}
                          <Link href="/privacidade">Política de Privacidade</Link>
                        </TermsText>
                      </TermsWrapper>
                      {errors.acceptTerms && (
                        <ErrorMessage initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                          {errors.acceptTerms}
                        </ErrorMessage>
                      )}

                      <PrimaryButton
                        as={motion.button}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        style={{ width: "100%", height: "3rem" }}
                      >
                        {isLoading ? (
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <LoadingSpinner />
                            Criando conta...
                          </div>
                        ) : (
                          "🎉 Criar Conta"
                        )}
                      </PrimaryButton>
                    </Form>
                  )}
                </TabsContainer>
              </FormContent>
            </FormCard>

            {/* Informações adicionais */}
            <InfoCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <InfoHeader>
                <Heart size={20} color={theme.colors.secondary[500]} />
                <Sparkles size={20} color={theme.colors.primary[500]} />
              </InfoHeader>
              <InfoText>
                Ao se cadastrar, você se junta a uma comunidade que valoriza a{" "}
                <span className="highlight">sustentabilidade</span> e o{" "}
                <span className="highlight-secondary">compartilhamento consciente</span>.
              </InfoText>
            </InfoCard>
          </FormContainer>
        </MainContent>
      </PageWrapper>
    </ThemeProvider>
  )
}

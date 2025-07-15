import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {
    Sun,
    Moon,
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    Phone,
    MapPin,
    ArrowLeft,
} from 'lucide-react'

// --- Definições de Animação (Framer Motion) ---
const floatingVariants = {
    animate: {
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotate: [0, 10, -10, 0],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
}

const inputVariants = {
    focus: { scale: 1.02, transition: { type: 'spring', stiffness: 300 } },
}

// --- Componentes Estilizados (Styled Components) ---

const PageWrapper = styled.div`
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`

const FloatingShape = styled(motion.div)`
    position: absolute;
    border-radius: 9999px;
    opacity: 0.2;
    filter: blur(2rem);
`

const TopNav = styled.div`
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`

const GhostButton = styled.button`
    background: ${({ theme }) => theme.cardBg};
    backdrop-filter: blur(4px);
    color: ${({ theme }) => theme.link};
    border: 1px solid rgba(139, 92, 246, 0.2);
    box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`

const ThemeToggleButton = styled(GhostButton)`
    padding: 0.5rem;
`

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 28rem; /* max-w-md */
    position: relative;
    z-index: 10;
`

const LogoContainer = styled(motion.div)`
    text-align: center;
    margin-bottom: 2rem;
`

const StyledCard = styled(motion.div)`
    background: ${({ theme }) => theme.cardBg};
    backdrop-filter: blur(16px);
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    overflow: hidden;
    position: relative;
    transition: background 0.3s;
`

const CardHeader = styled.div`
    text-align: center;
    padding: 1.5rem 1rem 1rem;
`

const CardTitle = styled.h2`
    font-size: 1.875rem;
    font-weight: bold;
    background: linear-gradient(to right, #8b5cf6, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
`

const CardDescription = styled.p`
    color: ${({ theme }) => theme.textSecondary};
    font-size: 1.125rem;
    margin-top: 0.5rem;
`

const CardContent = styled.div`
    padding: 0 1.5rem 1.5rem;
`

const TabsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1.5rem;
    background: ${({ theme }) => theme.tabsBg};
    padding: 0.25rem;
    border-radius: 0.75rem;
`

const TabTrigger = styled.button`
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.textSecondary};
    transition: all 0.3s ease;

    &.active {
        background: ${({ theme }) => theme.tabActiveBg};
        box-shadow:
            0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);
        color: ${({ theme }) => theme.tabActiveText};
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const FormGroup = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const TwoColGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

const Label = styled.label`
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`

const InputWrapper = styled.div`
    position: relative;
`

const BaseInput = `
  width: 100%;
  height: 3rem;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? '#f87171' : theme.inputBorder)};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.inputBg};
  backdrop-filter: blur(4px);
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 3rem;
  box-sizing: border-box;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.inputFocusBorder};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.inputFocusBorder}40;
  }
`

const Input = styled.input`
    ${BaseInput}
    padding-left: 3rem;
`

const Select = styled.select`
    ${BaseInput}
    appearance: none;
    padding-left: 2.75rem;
`

const InputIcon = styled.div`
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.iconColor};
    pointer-events: none;
`

const PasswordToggle = styled.button`
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.iconColor};

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`

const ErrorText = styled(motion.p)`
    color: #ef4444;
    font-size: 0.875rem;
    margin: 0;
`

const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

const CheckboxInput = styled.input`
    height: 1rem;
    width: 1rem;
`

const CheckboxLabel = styled.label`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.textSecondary};
`

const StyledLink = styled(Link)`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.linkHover};
    }
`

const SubmitButton = styled(motion.button)`
    width: 100%;
    height: 3rem;
    background: linear-gradient(to right, #2563eb, #3b82f6, #60a5fa);
    color: ${({ theme }) => theme.buttonText};
    border: none;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
        box-shadow:
            0 10px 15px -3px rgba(59, 130, 246, 0.25),
            0 4px 6px -4px rgba(59, 130, 246, 0.25);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

const Spinner = styled.div`
    width: 1rem;
    height: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`

const InfoBox = styled(motion.div)`
    margin-top: 2rem;
    text-align: center;
    background: ${({ theme }) => theme.cardBg};
    backdrop-filter: blur(4px);
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid rgba(139, 92, 246, 0.2);
    p {
        line-height: 1.6;
        color: ${({ theme }) => theme.text};
        span {
            font-weight: 600;
        }
        span.purple {
            color: #a855f7;
        }
        span.pink {
            color: #ec4899;
        }
    }
`

// --- Componente Principal ---
export default function LoginPage({ toggleTheme, currentTheme }) {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [activeTab, setActiveTab] = useState('login')

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    })
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        phone: '',
        neighborhood: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    })

    const [errors, setErrors] = useState({})

    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors({})

        const newErrors = {}
        if (!loginData.email) newErrors.email = 'Email é obrigatório'
        if (!loginData.password) newErrors.password = 'Senha é obrigatória'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setIsLoading(false)
            return
        }

        await new Promise((resolve) => setTimeout(resolve, 1500))
        localStorage.setItem(
            'user',
            JSON.stringify({ name: 'Usuário Logado', email: loginData.email })
        )
        setIsLoading(false)
        navigate('/')
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors({})

        const newErrors = {}
        if (!registerData.name) newErrors.name = 'Nome é obrigatório'
        if (!registerData.email) newErrors.email = 'Email é obrigatório'
        if (!registerData.phone) newErrors.phone = 'Telefone é obrigatório'
        if (!registerData.neighborhood)
            newErrors.neighborhood = 'Bairro é obrigatório'
        if (!registerData.password) newErrors.password = 'Senha é obrigatória'
        if (registerData.password.length < 6)
            newErrors.password = 'Senha deve ter pelo menos 6 caracteres'
        if (registerData.password !== registerData.confirmPassword)
            newErrors.confirmPassword = 'Senhas não coincidem'
        if (!registerData.acceptTerms)
            newErrors.acceptTerms = 'Você deve aceitar os termos'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setIsLoading(false)
            return
        }

        await new Promise((resolve) => setTimeout(resolve, 1500))
        localStorage.setItem(
            'user',
            JSON.stringify({
                name: registerData.name,
                email: registerData.email,
            })
        )
        setIsLoading(false)
        navigate('/')
    }

    const bairros = [
        'Centro',
        'Vila Nova',
        'Jardim das Flores',
        'Bela Vista',
        'São José',
        'Outros',
    ]

    return (
        <PageWrapper>
            {/* Elementos Flutuantes */}
            <FloatingShape
                variants={floatingVariants}
                animate="animate"
                style={{
                    top: '10%',
                    left: '5%',
                    width: '8rem',
                    height: '8rem',
                    background: 'var(--theme-floating1, #60a5fa)',
                }}
            />
            <FloatingShape
                variants={floatingVariants}
                animate="animate"
                style={{
                    top: '20%',
                    right: '10%',
                    width: '10rem',
                    height: '10rem',
                    background: 'var(--theme-floating2, #3b82f6)',
                    animationDelay: '2s',
                }}
            />
            <FloatingShape
                variants={floatingVariants}
                animate="animate"
                style={{
                    bottom: '20%',
                    left: '25%',
                    width: '9rem',
                    height: '9rem',
                    background: 'var(--theme-floating1, #60a5fa)',
                    animationDelay: '4s',
                }}
            />

            {/* Navegação Superior */}
            <TopNav>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <GhostButton>
                            <ArrowLeft
                                size={16}
                                style={{ marginRight: '8px' }}
                            />
                            Voltar ao Início
                        </GhostButton>
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <ThemeToggleButton onClick={toggleTheme}>
                        {currentTheme === 'light' ? (
                            <Moon size={20} />
                        ) : (
                            <Sun size={20} />
                        )}
                    </ThemeToggleButton>
                </motion.div>
            </TopNav>

            <ContentWrapper>
                <LogoContainer
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h1
                        style={{
                            fontSize: '2.25rem',
                            fontWeight: 'bold',
                            background:
                                'linear-gradient(to right, #60a5fa, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        TrocaVizinho
                    </h1>
                    <p>Conectando comunidades através da troca consciente ✨</p>
                </LogoContainer>

                <StyledCard
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <CardHeader>
                        <CardTitle>Bem-vindo! 🎉</CardTitle>
                        <CardDescription>
                            Entre na sua conta ou crie uma nova
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TabsList>
                            <TabTrigger
                                className={
                                    activeTab === 'login' ? 'active' : ''
                                }
                                onClick={() => setActiveTab('login')}
                            >
                                Entrar
                            </TabTrigger>
                            <TabTrigger
                                className={
                                    activeTab === 'register' ? 'active' : ''
                                }
                                onClick={() => setActiveTab('register')}
                            >
                                Cadastrar
                            </TabTrigger>
                        </TabsList>

                        {activeTab === 'login' && (
                            <Form onSubmit={handleLogin}>
                                <FormGroup
                                    variants={inputVariants}
                                    whileFocus="focus"
                                >
                                    <Label htmlFor="login-email">Email</Label>
                                    <InputWrapper>
                                        <InputIcon>
                                            <Mail size={20} />
                                        </InputIcon>
                                        <Input
                                            id="login-email"
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={loginData.email}
                                            onChange={(e) =>
                                                setLoginData((p) => ({
                                                    ...p,
                                                    email: e.target.value,
                                                }))
                                            }
                                            $hasError={!!errors.email}
                                        />
                                    </InputWrapper>
                                    {errors.email && (
                                        <ErrorText
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.email}
                                        </ErrorText>
                                    )}
                                </FormGroup>

                                <FormGroup
                                    variants={inputVariants}
                                    whileFocus="focus"
                                >
                                    <Label htmlFor="login-password">
                                        Senha
                                    </Label>
                                    <InputWrapper>
                                        <InputIcon>
                                            <Lock size={20} />
                                        </InputIcon>
                                        <Input
                                            id="login-password"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            placeholder="Sua senha"
                                            value={loginData.password}
                                            onChange={(e) =>
                                                setLoginData((p) => ({
                                                    ...p,
                                                    password: e.target.value,
                                                }))
                                            }
                                            $hasError={!!errors.password}
                                        />
                                        <PasswordToggle
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? (
                                                <EyeOff size={20} />
                                            ) : (
                                                <Eye size={20} />
                                            )}
                                        </PasswordToggle>
                                    </InputWrapper>
                                    {errors.password && (
                                        <ErrorText
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.password}
                                        </ErrorText>
                                    )}
                                </FormGroup>

                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <CheckboxWrapper>
                                        <CheckboxInput
                                            type="checkbox"
                                            id="remember"
                                            checked={loginData.rememberMe}
                                            onChange={(e) =>
                                                setLoginData((p) => ({
                                                    ...p,
                                                    rememberMe:
                                                        e.target.checked,
                                                }))
                                            }
                                        />
                                        <CheckboxLabel htmlFor="remember">
                                            Lembrar de mim
                                        </CheckboxLabel>
                                    </CheckboxWrapper>
                                    <StyledLink to="/recuperar-senha">
                                        Esqueceu a senha?
                                    </StyledLink>
                                </div>

                                <SubmitButton
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isLoading ? (
                                        <>
                                            <Spinner /> Entrando...
                                        </>
                                    ) : (
                                        '✨ Entrar'
                                    )}
                                </SubmitButton>
                            </Form>
                        )}

                        {activeTab === 'register' && (
                            <Form onSubmit={handleRegister}>
                                <FormGroup>
                                    <Label htmlFor="register-name">
                                        Nome Completo
                                    </Label>
                                    <InputWrapper>
                                        <InputIcon>
                                            <User size={20} />
                                        </InputIcon>
                                        <Input
                                            id="register-name"
                                            type="text"
                                            placeholder="Seu nome"
                                            value={registerData.name}
                                            onChange={(e) =>
                                                setRegisterData((p) => ({
                                                    ...p,
                                                    name: e.target.value,
                                                }))
                                            }
                                            $hasError={!!errors.name}
                                        />
                                    </InputWrapper>
                                    {errors.name && (
                                        <ErrorText
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.name}
                                        </ErrorText>
                                    )}
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="register-email">
                                        Email
                                    </Label>
                                    <InputWrapper>
                                        <InputIcon>
                                            <Mail size={20} />
                                        </InputIcon>
                                        <Input
                                            id="register-email"
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={registerData.email}
                                            onChange={(e) =>
                                                setRegisterData((p) => ({
                                                    ...p,
                                                    email: e.target.value,
                                                }))
                                            }
                                            $hasError={!!errors.email}
                                        />
                                    </InputWrapper>
                                    {errors.email && (
                                        <ErrorText
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.email}
                                        </ErrorText>
                                    )}
                                </FormGroup>

                                <TwoColGrid>
                                    <FormGroup>
                                        <Label htmlFor="register-phone">
                                            Telefone
                                        </Label>
                                        <InputWrapper>
                                            <InputIcon>
                                                <Phone size={16} />
                                            </InputIcon>
                                            <Input
                                                id="register-phone"
                                                type="tel"
                                                placeholder="(11) 9..."
                                                value={registerData.phone}
                                                onChange={(e) =>
                                                    setRegisterData((p) => ({
                                                        ...p,
                                                        phone: e.target.value,
                                                    }))
                                                }
                                                $hasError={!!errors.phone}
                                            />
                                        </InputWrapper>
                                        {errors.phone && (
                                            <ErrorText
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {errors.phone}
                                            </ErrorText>
                                        )}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="register-neighborhood">
                                            Bairro
                                        </Label>
                                        <InputWrapper>
                                            <InputIcon>
                                                <MapPin size={16} />
                                            </InputIcon>
                                            <Select
                                                id="register-neighborhood"
                                                value={
                                                    registerData.neighborhood
                                                }
                                                onChange={(e) =>
                                                    setRegisterData((p) => ({
                                                        ...p,
                                                        neighborhood:
                                                            e.target.value,
                                                    }))
                                                }
                                                $hasError={
                                                    !!errors.neighborhood
                                                }
                                            >
                                                <option value="">
                                                    Selecione
                                                </option>
                                                {bairros.map((b) => (
                                                    <option key={b} value={b}>
                                                        {b}
                                                    </option>
                                                ))}
                                            </Select>
                                        </InputWrapper>
                                        {errors.neighborhood && (
                                            <ErrorText
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {errors.neighborhood}
                                            </ErrorText>
                                        )}
                                    </FormGroup>
                                </TwoColGrid>

                                <FormGroup>
                                    <Label htmlFor="register-password">
                                        Senha
                                    </Label>
                                    <InputWrapper>
                                        <InputIcon>
                                            <Lock size={20} />
                                        </InputIcon>
                                        <Input
                                            id="register-password"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            placeholder="Mínimo 6 caracteres"
                                            value={registerData.password}
                                            onChange={(e) =>
                                                setRegisterData((p) => ({
                                                    ...p,
                                                    password: e.target.value,
                                                }))
                                            }
                                            $hasError={!!errors.password}
                                        />
                                        <PasswordToggle
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? (
                                                <EyeOff size={20} />
                                            ) : (
                                                <Eye size={20} />
                                            )}
                                        </PasswordToggle>
                                    </InputWrapper>
                                    {errors.password && (
                                        <ErrorText
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.password}
                                        </ErrorText>
                                    )}
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="register-confirm-password">
                                        Confirmar Senha
                                    </Label>
                                    <InputWrapper>
                                        <InputIcon>
                                            <Lock size={20} />
                                        </InputIcon>
                                        <Input
                                            id="register-confirm-password"
                                            type="password"
                                            placeholder="Digite a senha novamente"
                                            value={registerData.confirmPassword}
                                            onChange={(e) =>
                                                setRegisterData((p) => ({
                                                    ...p,
                                                    confirmPassword:
                                                        e.target.value,
                                                }))
                                            }
                                            $hasError={!!errors.confirmPassword}
                                        />
                                    </InputWrapper>
                                    {errors.confirmPassword && (
                                        <ErrorText
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.confirmPassword}
                                        </ErrorText>
                                    )}
                                </FormGroup>

                                <CheckboxWrapper>
                                    <CheckboxInput
                                        type="checkbox"
                                        id="terms"
                                        checked={registerData.acceptTerms}
                                        onChange={(e) =>
                                            setRegisterData((p) => ({
                                                ...p,
                                                acceptTerms: e.target.checked,
                                            }))
                                        }
                                    />
                                    <CheckboxLabel htmlFor="terms">
                                        Eu aceito os{' '}
                                        <StyledLink to="/termos">
                                            Termos de Uso
                                        </StyledLink>{' '}
                                        e a{' '}
                                        <StyledLink to="/privacidade">
                                            Política de Privacidade
                                        </StyledLink>
                                    </CheckboxLabel>
                                </CheckboxWrapper>
                                {errors.acceptTerms && (
                                    <ErrorText
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.acceptTerms}
                                    </ErrorText>
                                )}

                                <SubmitButton
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isLoading ? (
                                        <>
                                            <Spinner /> Criando conta...
                                        </>
                                    ) : (
                                        '🎉 Criar Conta'
                                    )}
                                </SubmitButton>
                            </Form>
                        )}
                    </CardContent>
                </StyledCard>

                <InfoBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <p>
                        Ao se cadastrar, você se junta a uma comunidade que
                        valoriza a{' '}
                        <span className="purple">sustentabilidade</span> e o{' '}
                        <span className="pink">
                            compartilhamento consciente
                        </span>
                        .
                    </p>
                </InfoBox>
            </ContentWrapper>
        </PageWrapper>
    )
}

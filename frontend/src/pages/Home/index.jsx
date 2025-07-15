"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ThemeProvider } from "styled-components"
import { theme } from "../../constants/theme"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { Container } from "../../components/Layout"
import { PrimaryButton, OutlineButton, GhostButton } from "../../components/Button"
import { InputIcon, InputWithIcon, StyledSelect } from "../../components/Input"
import ThemeToggle from "../../components/ThemeToggle"
import { useApp } from "../../context/AppContext"
import { categorias } from "../../constants/mockData"
import { Search, Plus, MapPin, Clock, Heart, Star, Sparkles } from "lucide-react"
import {
  PageWrapper,
  FloatingElement,
  Header,
  HeaderContent,
  Logo,
  LogoIcon,
  LogoText,
  Nav,
  HeroSection,
  HeroBackground,
  HeroFloatingElement,
  HeroContent,
  HeroTitle,
  HeroHighlight,
  HeroDescription,
  HeroBadge,
  FilterSection,
  FilterGrid,
  SearchInputWrapper,
  SelectWrapper,
  ResultsText,
  ItemCard,
  ItemImageContainer,
  ItemImageOverlay,
  HeartButton,
  RatingBadge,
  ItemContent,
  BadgeGroup,
  PrimaryBadge,
  SuccessBadge,
  UserInfo,
  UserDetails,
  Avatar,
  UserName,
  LikeCount,
  ItemMeta,
  MetaItem,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  Footer,
  FooterContent,
  FooterLogo,
  FooterLogoIcon,
  FooterTitle,
  FooterDescription,
  FooterSubtext,
} from "./styles"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function Home() {
  const { itens, filtros, dispatch } = useApp()
  const [busca, setBusca] = useState(filtros.busca)
  const [categoriaFiltro, setCategoriaFiltro] = useState(filtros.categoria)

  const itensFiltrados = itens.filter((item) => {
    const matchBusca =
      item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      item.descricao.toLowerCase().includes(busca.toLowerCase())
    const matchCategoria = categoriaFiltro === "Todas" || item.categoria === categoriaFiltro
    return matchBusca && matchCategoria
  })

  const handleBuscaChange = (value) => {
    setBusca(value)
    dispatch({ type: "SET_FILTROS", payload: { busca: value } })
  }

  const handleCategoriaChange = (value) => {
    setCategoriaFiltro(value)
    dispatch({ type: "SET_FILTROS", payload: { categoria: value } })
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageWrapper>
        {/* Floating Elements */}
        <FloatingElement
          size="5rem"
          gradient={theme.gradients.floating}
          style={{ top: "5rem", left: "2.5rem" }}
          variants={floatingVariants}
          animate="animate"
        />
        <FloatingElement
          size="8rem"
          gradient={theme.gradients.secondary}
          style={{ top: "10rem", right: "5rem" }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <FloatingElement
          size="6rem"
          gradient={theme.gradients.accent}
          style={{ bottom: "10rem", left: "25%" }}
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
              <Logo whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <LogoIcon>
                  <Sparkles size={20} color="white" />
                </LogoIcon>
                <LogoText>TrocaVizinho</LogoText>
              </Logo>
              <Nav>
                <ThemeToggle />
                <Link to="/propostas">
                  <GhostButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Minhas Propostas
                  </GhostButton>
                </Link>
                <Link to="/login">
                  <OutlineButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Entrar
                  </OutlineButton>
                </Link>
                <Link to="/cadastrar">
                  <PrimaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Plus size={16} />
                    Cadastrar Item
                  </PrimaryButton>
                </Link>
              </Nav>
            </HeaderContent>
          </Container>
        </Header>

        {/* Hero Section */}
        <HeroSection>
          <HeroBackground>
            <HeroFloatingElement size="18rem" position="top: 2.5rem; left: 2.5rem;" />
            <HeroFloatingElement size="24rem" position="bottom: 2.5rem; right: 2.5rem;" />
          </HeroBackground>
          <Container>
            <HeroContent>
              <HeroTitle
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Troque, Reutilize,
                <br />
                <HeroHighlight>Conecte-se</HeroHighlight>
              </HeroTitle>
              <HeroDescription
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Encontre itens que você precisa e ofereça o que não usa mais. Fortaleça sua comunidade através da troca
                consciente e sustentável.
              </HeroDescription>
              <HeroBadge
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <Heart size={20} color="#22d3ee" />
                Junte-se à comunidade sustentável
              </HeroBadge>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Main Content */}
        <Container>
          <div style={{ padding: `${theme.spacing.xl} 0` }}>
            {/* Filtros */}
            <FilterSection initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              <FilterGrid>
                <SearchInputWrapper>
                  <InputIcon>
                    <Search size={20} />
                  </InputIcon>
                  <InputWithIcon
                    placeholder="Buscar itens mágicos..."
                    value={busca}
                    onChange={(e) => handleBuscaChange(e.target.value)}
                  />
                </SearchInputWrapper>
                <SelectWrapper>
                  <StyledSelect value={categoriaFiltro} onChange={(e) => handleCategoriaChange(e.target.value)}>
                    {categorias.map((categoria) => (
                      <option key={categoria} value={categoria}>
                        {categoria}
                      </option>
                    ))}
                  </StyledSelect>
                </SelectWrapper>
              </FilterGrid>
            </FilterSection>

            {/* Resultados */}
            <ResultsText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              ✨ {itensFiltrados.length} {itensFiltrados.length === 1 ? "tesouro encontrado" : "tesouros encontrados"}
            </ResultsText>

            {/* Grid de Itens */}
            {itensFiltrados.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                  gap: theme.spacing.lg,
                }}
                className="md:grid-cols-2 lg:grid-cols-3"
              >
                {itensFiltrados.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
                      <ItemCard whileHover={{ y: -10, scale: 1.02 }}>
                        <ItemImageContainer>
                          <img src={item.imagem || "/placeholder.svg"} alt={item.titulo} />
                          <ItemImageOverlay>
                            <HeartButton whileHover={{ scale: 1.1 }}>
                              <Heart size={16} color={theme.colors.secondary[500]} />
                            </HeartButton>
                          </ItemImageOverlay>
                          <RatingBadge>
                            <Star size={12} color="#fbbf24" fill="#fbbf24" />
                            <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>{item.rating}</span>
                          </RatingBadge>
                        </ItemImageContainer>
                        <ItemContent>
                          <BadgeGroup>
                            <PrimaryBadge>{item.categoria}</PrimaryBadge>
                            <SuccessBadge>Disponível</SuccessBadge>
                          </BadgeGroup>
                          <h3
                            style={{
                              fontSize: "1.25rem",
                              fontWeight: 700,
                              marginBottom: "0.5rem",
                              color: theme.colors.neutral[900],
                            }}
                          >
                            {item.titulo}
                          </h3>
                          <p
                            style={{
                              color: theme.colors.neutral[600],
                              lineHeight: 1.5,
                              marginBottom: "1rem",
                            }}
                          >
                            {item.descricao}
                          </p>
                          <UserInfo>
                            <UserDetails>
                              <Avatar>
                                {item.usuario
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </Avatar>
                              <UserName>{item.usuario}</UserName>
                            </UserDetails>
                            <LikeCount>
                              <Heart size={12} />
                              <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>{item.likes}</span>
                            </LikeCount>
                          </UserInfo>
                          <ItemMeta>
                            <MetaItem>
                              <MapPin size={12} color={theme.colors.primary[400]} />
                              {item.bairro}
                            </MetaItem>
                            <MetaItem>
                              <Clock size={12} color={theme.colors.secondary[400]} />
                              {item.dataPublicacao}
                            </MetaItem>
                          </ItemMeta>
                          <PrimaryButton
                            as={motion.button}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ width: "100%" }}
                          >
                            ✨ Ver Detalhes e Propor Troca
                          </PrimaryButton>
                        </ItemContent>
                      </ItemCard>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <EmptyState initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <EmptyIcon>
                  <Search size={48} color="white" />
                </EmptyIcon>
                <EmptyTitle>Nenhum tesouro encontrado com os filtros aplicados.</EmptyTitle>
                <Link to="/cadastrar">
                  <PrimaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    ✨ Seja o primeiro a cadastrar um item
                  </PrimaryButton>
                </Link>
              </EmptyState>
            )}
          </div>
        </Container>

        {/* Footer */}
        <Footer>
          <Container>
            <FooterContent
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FooterLogo>
                <FooterLogoIcon>
                  <Sparkles size={20} color="white" />
                </FooterLogoIcon>
                <FooterTitle>TrocaVizinho</FooterTitle>
              </FooterLogo>
              <FooterDescription>Conectando comunidades através da troca consciente</FooterDescription>
              <FooterSubtext>Promovendo sustentabilidade e vínculos comunitários ✨</FooterSubtext>
            </FooterContent>
          </Container>
        </Footer>
      </PageWrapper>
    </ThemeProvider>
  )
}

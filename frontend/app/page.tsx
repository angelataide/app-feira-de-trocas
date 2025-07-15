"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "@/styles/theme"
import { GlobalStyles } from "@/styles/GlobalStyles"
import { Container, Section, Grid } from "@/components/styled/Container"
import { StyledCard, ImageContainer, CardContent, CardTitle, CardDescription } from "@/components/styled/Card"
import { PrimaryButton, OutlineButton, GhostButton } from "@/components/styled/Button"
import { InputIcon, InputWithIcon } from "@/components/styled/Input"
import { PrimaryBadge, SuccessBadge } from "@/components/styled/Badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search, Plus, MapPin, Clock, Heart, Star, Sparkles } from "lucide-react"

// Styled Components específicos da página
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    ${(props) => props.theme.colors.primary[50]} 0%, 
    ${(props) => props.theme.colors.secondary[50]} 50%, 
    ${(props) => props.theme.colors.accent[50]} 100%);
  transition: background 0.5s ease;

  .dark & {
    background: linear-gradient(135deg, 
      ${(props) => props.theme.colors.neutral[900]} 0%, 
      ${(props) => props.theme.colors.primary[900]} 50%, 
      ${(props) => props.theme.colors.secondary[900]} 100%);
  }
`

const FloatingElement = styled(motion.div)<{ size: string; gradient: string }>`
  position: fixed;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: ${(props) => props.gradient};
  border-radius: 50%;
  opacity: 0.2;
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;

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

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.gradients.hero};
  color: white;
  padding: 5rem 0;
`

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.9;

  .dark & {
    opacity: 0.7;
  }
`

const HeroFloatingElement = styled.div<{ size: string; position: string }>`
  position: absolute;
  ${(props) => props.position}
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  filter: blur(60px);

  .dark & {
    background: rgba(255, 255, 255, 0.05);
  }
`

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  z-index: 10;
`

const HeroTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`

const HeroHighlight = styled.span`
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  .dark & {
    background: linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const HeroDescription = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const HeroBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  padding: 0.75rem 1.5rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  color: white;
  font-weight: 600;

  .dark & {
    background: rgba(255, 255, 255, 0.1);
  }
`

const FilterSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  border-radius: ${(props) => props.theme.borderRadius["2xl"]};
  padding: 1.5rem;
  box-shadow: ${(props) => props.theme.shadows.xl};
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 2rem;

  .dark & {
    background: rgba(30, 41, 59, 0.7);
    border-color: rgba(51, 65, 85, 0.3);
  }
`

const FilterGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const SearchInputWrapper = styled.div`
  flex: 1;
  position: relative;
`

const SelectWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 12rem;
  }
`

const StyledSelect = styled.select`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border: 2px solid ${(props) => props.theme.colors.primary[200]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  color: ${(props) => props.theme.colors.neutral[900]};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary[100]};
  }

  .dark & {
    background: rgba(30, 41, 59, 0.5);
    border-color: ${(props) => props.theme.colors.primary[700]};
    color: ${(props) => props.theme.colors.neutral[100]};

    &:focus {
      border-color: ${(props) => props.theme.colors.primary[500]};
      box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary[900]};
    }
  }
`

const ResultsText = styled(motion.p)`
  color: ${(props) => props.theme.colors.neutral[700]};
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[300]};
  }
`

const ItemCard = styled(StyledCard)`
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ItemImageContainer = styled(ImageContainer)`
  position: relative;
`

const ItemImageOverlay = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  gap: 0.5rem;
`

const HeartButton = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-radius: ${(props) => props.theme.borderRadius.full};
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.shadows.lg};
  cursor: pointer;

  .dark & {
    background: rgba(30, 41, 59, 0.9);
  }
`

const RatingBadge = styled.div`
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-radius: ${(props) => props.theme.borderRadius.full};
  padding: 0.25rem 0.75rem;

  .dark & {
    background: rgba(30, 41, 59, 0.9);
  }
`

const ItemContent = styled(CardContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const BadgeGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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
  border: 2px solid ${(props) => props.theme.colors.primary[200]};

  .dark & {
    border-color: ${(props) => props.theme.colors.primary[700]};
  }
`

const UserName = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.neutral[700]};
  font-size: 0.875rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[300]};
  }
`

const LikeCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors.secondary[500]};
`

const ItemMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.colors.neutral[500]};
  font-size: 0.875rem;
  margin-bottom: 1.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 4rem 0;
`

const EmptyIcon = styled.div`
  width: 6rem;
  height: 6rem;
  background: ${(props) => props.theme.gradients.primary};
  border-radius: ${(props) => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
`

const EmptyTitle = styled.p`
  color: ${(props) => props.theme.colors.neutral[600]};
  font-size: 1.25rem;
  margin-bottom: 1.5rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[400]};
  }
`

const Footer = styled.footer`
  background: ${(props) => props.theme.gradients.hero};
  color: white;
  padding: 3rem 0;
  margin-top: 4rem;
`

const FooterContent = styled(motion.div)`
  text-align: center;
`

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const FooterLogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`

const FooterDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`

const FooterSubtext = styled.p`
  color: ${(props) => props.theme.colors.primary[200]};
  font-size: 0.875rem;

  .dark & {
    color: ${(props) => props.theme.colors.primary[300]};
  }
`

// Dados mockados
const itensDisponiveis = [
  {
    id: 1,
    titulo: "Livros de Romance",
    descricao: "Coleção de 15 livros de romance em ótimo estado",
    categoria: "Livros",
    usuario: "Maria Silva",
    bairro: "Centro",
    dataPublicacao: "2 dias atrás",
    imagem: "/placeholder.svg?height=300&width=400",
    status: "disponivel",
    likes: 12,
    rating: 4.8,
  },
  {
    id: 2,
    titulo: "Bicicleta Infantil",
    descricao: "Bicicleta aro 16, cor azul, pouco usada",
    categoria: "Brinquedos",
    usuario: "João Santos",
    bairro: "Vila Nova",
    dataPublicacao: "1 dia atrás",
    imagem: "/placeholder.svg?height=300&width=400",
    status: "disponivel",
    likes: 8,
    rating: 4.9,
  },
  {
    id: 3,
    titulo: "Roupas Femininas Tam M",
    descricao: "Lote com 10 peças de roupas femininas tamanho M",
    categoria: "Roupas",
    usuario: "Ana Costa",
    bairro: "Jardim das Flores",
    dataPublicacao: "3 dias atrás",
    imagem: "/placeholder.svg?height=300&width=400",
    status: "disponivel",
    likes: 15,
    rating: 4.7,
  },
  {
    id: 4,
    titulo: "Kit Ferramentas Básicas",
    descricao: "Martelo, chaves de fenda, alicate e outras ferramentas",
    categoria: "Ferramentas",
    usuario: "Carlos Oliveira",
    bairro: "Centro",
    dataPublicacao: "5 dias atrás",
    imagem: "/placeholder.svg?height=300&width=400",
    status: "disponivel",
    likes: 6,
    rating: 4.6,
  },
  {
    id: 5,
    titulo: "Jogos de Tabuleiro",
    descricao: "War, Banco Imobiliário e Detetive - todos completos",
    categoria: "Brinquedos",
    usuario: "Fernanda Lima",
    bairro: "Vila Nova",
    dataPublicacao: "1 semana atrás",
    imagem: "/placeholder.svg?height=300&width=400",
    status: "disponivel",
    likes: 20,
    rating: 5.0,
  },
  {
    id: 6,
    titulo: "Panelas de Inox",
    descricao: "Conjunto de 5 panelas de inox em bom estado",
    categoria: "Casa",
    usuario: "Roberto Mendes",
    bairro: "Jardim das Flores",
    dataPublicacao: "4 dias atrás",
    imagem: "/placeholder.svg?height=300&width=400",
    status: "disponivel",
    likes: 9,
    rating: 4.5,
  },
]

const categorias = ["Todas", "Livros", "Roupas", "Brinquedos", "Ferramentas", "Casa", "Eletrônicos"]

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

export default function HomePage() {
  const [busca, setBusca] = useState("")
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas")

  const itensFiltrados = itensDisponiveis.filter((item) => {
    const matchBusca =
      item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      item.descricao.toLowerCase().includes(busca.toLowerCase())
    const matchCategoria = categoriaFiltro === "Todas" || item.categoria === categoriaFiltro
    return matchBusca && matchCategoria
  })

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
                <Link href="/propostas">
                  <GhostButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Minhas Propostas
                  </GhostButton>
                </Link>
                <Link href="/login">
                  <OutlineButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Entrar
                  </OutlineButton>
                </Link>
                <Link href="/cadastrar">
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
        <Section>
          <Container>
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
                    onChange={(e) => setBusca(e.target.value)}
                  />
                </SearchInputWrapper>
                <SelectWrapper>
                  <StyledSelect value={categoriaFiltro} onChange={(e) => setCategoriaFiltro(e.target.value)}>
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
              <Grid as={motion.div} variants={containerVariants} initial="hidden" animate="visible" columns={3}>
                {itensFiltrados.map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
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
                        <CardTitle>{item.titulo}</CardTitle>
                        <CardDescription>{item.descricao}</CardDescription>
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
                        <Link href={`/item/${item.id}`}>
                          <PrimaryButton
                            as={motion.button}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ width: "100%" }}
                          >
                            ✨ Ver Detalhes e Propor Troca
                          </PrimaryButton>
                        </Link>
                      </ItemContent>
                    </ItemCard>
                  </motion.div>
                ))}
              </Grid>
            ) : (
              <EmptyState initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <EmptyIcon>
                  <Search size={48} color="white" />
                </EmptyIcon>
                <EmptyTitle>Nenhum tesouro encontrado com os filtros aplicados.</EmptyTitle>
                <Link href="/cadastrar">
                  <PrimaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    ✨ Seja o primeiro a cadastrar um item
                  </PrimaryButton>
                </Link>
              </EmptyState>
            )}
          </Container>
        </Section>

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

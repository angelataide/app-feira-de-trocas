import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    width: 100%;
    background-color: #1a202c; /* Cor de fundo escura, equivalente a slate-900 */
    color: white;
    padding: 48px 24px;
    margin-top: 80px;
    box-sizing: border-box;
`

const FooterContent = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 32px;

    @media (min-width: 768px) {
        flex-direction: row;
        text-align: left;
        align-items: flex-start;
    }
`

const FooterLogo = styled.div`
    margin-bottom: 24px;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`

const LogoTitle = styled.h4`
    font-size: 36px;
    font-weight: 700;
    color: #fff;
`

const LogoSubtitle = styled.p`
    color: #a0aec0;
    margin-top: 8px;
`

const FooterNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    @media (min-width: 768px) {
        align-items: flex-start;
    }
`

const NavTitle = styled.h5`
    font-size: 18px;
    font-weight: 600;
    color: #e2e8f0;
    margin-bottom: 8px;
`

const NavLink = styled.a`
    color: #a0aec0;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #fff;
    }
`

const SocialSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        align-items: flex-start;
    }
`

const SocialIcons = styled.div`
    display: flex;
    gap: 16px;
`

const SocialLink = styled.a`
    color: #a0aec0;
    transition: color 0.3s ease;

    &:hover {
        color: #fff;
    }
`

const CopyrightInfo = styled.div`
    border-top: 1px solid #4a5568;
    margin-top: 32px;
    padding-top: 32px;
    text-align: center;
    color: #a0aec0;
`

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <FooterContainer>
            <FooterContent>
                <FooterLogo>
                    <LogoTitle>TrocAi</LogoTitle>
                    <LogoSubtitle>Sua comunidade de trocas.</LogoSubtitle>
                </FooterLogo>

                <FooterNav>
                    <NavTitle>Navegação</NavTitle>
                    <NavLink href="/">Início</NavLink>
                    <NavLink href="/disponivel">Itens Disponíveis</NavLink>
                    <NavLink href="#">Como Funciona</NavLink>
                </FooterNav>

                <SocialSection>
                    <NavTitle>Siga-nos</NavTitle>
                    <SocialIcons>
                        <SocialLink href="#" aria-label="Facebook">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.77l-.44 2.893h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </SocialLink>
                        <SocialLink href="#" aria-label="Twitter">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M16.4 8.7C16.8 8.7 17.2 8.5 17.5 8.2L20.2 5.5C20.6 5.1 20.6 4.5 20.2 4.1C19.8 3.7 19.2 3.7 18.8 4.1L16.1 6.8C15.8 7.1 15.6 7.5 15.6 8V9C15.6 12.3 12.9 15 9.6 15H9.5C6.2 15 3.5 12.3 3.5 9V8.5C3.5 7.5 4 6.6 4.9 6.2C5.3 6.1 5.7 6.1 6.1 6.3C6.4 6.4 6.7 6.6 7 6.8L7.3 7.1C7.8 7.6 8.5 7.6 9 7.1L9.3 6.8C9.6 6.5 9.8 6.1 9.8 5.7V5.5C9.8 4.6 9.1 3.9 8.2 3.9C7.8 3.9 7.4 4 7 4.3L6.7 4.6C6.3 4.9 5.8 5.1 5.3 5.1C5 5.1 4.7 5.2 4.4 5.3C4.1 5.4 3.9 5.6 3.7 5.8C3.5 6 3.3 6.3 3.2 6.6C3.1 6.9 3 7.2 3 7.5V9C3 12.8 6.2 16 10 16H10.5C13.8 16 16.5 13.3 16.5 10V8.7Z" />
                            </svg>
                        </SocialLink>
                        <SocialLink href="#" aria-label="Instagram">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C8.75 2 6 4.75 6 8v8c0 3.25 2.75 6 6 6s6-2.75 6-6V8c0-3.25-2.75-6-6-6zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 6c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-3 2c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </SocialLink>
                    </SocialIcons>
                </SocialSection>
            </FooterContent>
            <CopyrightInfo>
                <p>
                    &copy; {currentYear} TrocAi. Todos os direitos reservados.
                </p>
            </CopyrightInfo>
        </FooterContainer>
    )
}

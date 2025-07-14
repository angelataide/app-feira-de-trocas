import React from 'react'
import {
    HeaderWrapper,
    HeaderLogo,
    HeaderActions,
    OutlineButton,
    FilledButton,
} from './styles'

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLogo>TrocAí</HeaderLogo>
            <HeaderActions>
                <OutlineButton href="/login">Entrar</OutlineButton>
                <FilledButton href="/cadastro">Cadastrar</FilledButton>
            </HeaderActions>
        </HeaderWrapper>
    )
}

export default Header

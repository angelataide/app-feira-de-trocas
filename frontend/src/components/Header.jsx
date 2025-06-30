import React from 'react'
import {
    HeaderWrapper,
    HeaderLogo,
    Nav,
    NavLink,
    HeaderActions,
    OutlineButton,
    FilledButton,
} from './styles'

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLogo>TrocAí</HeaderLogo>
            <HeaderActions>
                <OutlineButton href="#">Entrar</OutlineButton>
                <FilledButton href="#">Cadastrar</FilledButton>
            </HeaderActions>
        </HeaderWrapper>
    )
}

export default Header

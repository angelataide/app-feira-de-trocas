import {
    FilledButton,
    HeaderActions,
    HeaderLogo,
    HeaderWrapper,
    OutlineButton,
} from './styles'

import logoPath from '../../assets/logo.PNG'
const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLogo>
                <img src={logoPath} alt="logo da empresa" />
            </HeaderLogo>
            <HeaderActions>
                <OutlineButton href="/login">Entrar</OutlineButton>
                <FilledButton href="/cadastro">Cadastrar</FilledButton>
            </HeaderActions>
        </HeaderWrapper>
    )
}

export default Header

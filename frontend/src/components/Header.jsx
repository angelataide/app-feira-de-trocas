import React from 'react';
import {
  HeaderWrapper,
  HeaderLogo,
  Nav,
  NavLink,
  HeaderActions,
  OutlineButton,
  FilledButton
} from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <img src="./src/assets/logo0.png" alt="Logo" />
      </HeaderLogo>
      <Nav>
        <NavLink href="#">Itens Disponíveis</NavLink>
      </Nav>
      <HeaderActions>
        <OutlineButton href="/login">Entrar</OutlineButton>
        <FilledButton href="/cadastro">Cadastrar</FilledButton>
      </HeaderActions>
    </HeaderWrapper>
  );
};

export default Header;

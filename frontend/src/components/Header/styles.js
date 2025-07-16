import styled from 'styled-components'
// Assumindo que seu Wrapper genérico está nesta pasta
import { Wrapper } from '../common/Wrapper'

// ## O Container Externo ##
// Responsável pelo fundo, largura total e por fixar o header no topo.
export const HeaderWrapper = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: linear-gradient(
        180deg,
        var(--main-blue) 0%,
        var(--bg-lighter-blue) 100%
    );
    padding: 15px 0; // Adiciona um respiro vertical
`

// ## O Container Interno do Conteúdo ##
// Herda os estilos do Wrapper (max-width, etc.) e adiciona o layout flex.
export const HeaderContentWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`

// ## Estilos dos Elementos Internos ##
export const HeaderLogo = styled.div`
    display: flex;
    img {
        width: 150px;
        height: auto;
    }
`

export const HeaderActions = styled.div`
    display: flex;
    gap: 10px;
`

export const Button = styled.a`
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
    }
`

export const OutlineButton = styled(Button)`
    color: var(--main-blue);
    background-color: transparent;
    border: 2px solid var(--main-blue);

    &:hover {
        background-color: var(--lighter-blue);
    }
`

export const FilledButton = styled(Button)`
    color: #fff;
    background-color: var(--main-blue);
    border: 2px solid var(--main-blue);

    &:hover {
        background-color: var(--darker-blue);
    }
`

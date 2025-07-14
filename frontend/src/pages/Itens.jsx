import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import logo from '../assets/logo.PNG'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background: #ffffff;
    }
`
const Container = styled.div`
    padding: 2rem;
    min-height: 100vh;
`
const LogoImg = styled.img`
    width: 150px;
    height: 100px;
    margin: 0 auto 2rem auto;
    display: block;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
`

const Card = styled.div`
    background: #a4f1e1ff;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
`

const ProductImage = styled.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 8px;
`

const Title = styled.h3`
    margin: 0.5rem 0;
    font-size: 1.1rem;
`

const Description = styled.p`
    font-size: 0.9rem;
    color: #666;
`

const Button = styled.button`
    margin-top: 0.5rem;
    padding: 0.6rem 1rem;
    background: #6a0dad;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: #520a9d;
    }
`

const Itens = () => {
    const [produtos] = useState([
        {
            id: 1,
            nome: 'Produto A',
            descricao: 'Descrição',
            imagem: '',
        },
        {
            id: 2,
            nome: 'Produto b',
            descricao: 'Descrição',
            imagem: '',
        },
        {
            id: 3,
            nome: 'Produto c',
            descricao: 'Descrição',
            imagem: '',
        },
        {
            id: 4,
            nome: 'Produto d',
            descricao: 'Descrição',
            imagem: '',
        },
        {
            id: 5,
            nome: 'Produto e',
            descricao: 'Descrição',
            imagem: '',
        },
        {
            id: 6,
            nome: 'Produto f',
            descricao: 'Descrição',
            imagem: '',
        },
        {
            id: 7,
            nome: 'Produto g',
            descricao: 'Descrição',
            imagem: '',
        },
        {
            id: 7,
            nome: 'Produto h',
            descricao: 'Descrição',
            imagem: '',
        },
        {
            id: 8,
            nome: 'Produto i',
            descricao: 'Descrição',
            imagem: '',
        },
        {
            id: 9,
            nome: 'Produto j',
            descricao: 'Descrição',
            imagem: '',
        },
    ])

    return (
        <>
            <GlobalStyle />
            <Container>
                <LogoImg src={logo} alt="Logo" />
                <Grid>
                    {produtos.map((produto) => (
                        <Card key={produto.id}>
                            <ProductImage
                                src={produto.imagem}
                                alt={produto.nome}
                            />
                            <Title>Produto</Title>
                            <Description>{produto.descricao}</Description>
                            <Button>Trocar</Button>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Itens

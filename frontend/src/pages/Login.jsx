import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import logo from '../assets/logo.PNG'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(to left, #43cea2, #185a9d);
    }
`
const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const LoginCard = styled.div`
    background: #ffffff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
`
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    label {
        font-weight: bold;
    }
    input {
        padding: 12px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
        &:focus {
            border-color: #007bff;
            outline: none;
        }
    }
    button {
        padding: 10px;
        background-color: #007bff;
        color: #ffffff;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            background-color: #0056b3;
        }
    }
`
const Profile = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`
const LogoImg = styled.img`
    width: 300px;
    height: 200px;
`

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Tentando logar...')
    }

    return (
        <>
            <GlobalStyle />
            <LoginContainer>
                <LoginCard>
                    <Profile>
                        <LogoImg src={logo} alt="Logo" />
                    </Profile>

                    <LoginForm onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Digite seu email"
                            autoComplete="email"
                        />

                        <label htmlFor="password">Senha</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                            autoComplete="current-password"
                        />

                        <button type="submit">Entrar</button>
                    </LoginForm>
                </LoginCard>
            </LoginContainer>
        </>
    )
}

export default Login

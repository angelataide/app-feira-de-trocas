import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const LoginCard = styled.div`
    background: #ffffff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
`
export const LoginForm = styled.form`
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
export const Profile = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`
export const LogoImg = styled.img`
    width: 300px;
    height: 200px;
`

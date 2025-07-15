import styled from 'styled-components'

export const Container = styled.div`
    padding: 2rem;
    min-height: 100vh;
`
export const LogoImg = styled.img`
    width: 150px;
    height: 100px;
    margin: 0 auto 2rem auto;
    display: block;
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
`

export const Card = styled.div`
    background: #a4f1e1ff;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
`

export const ProductImage = styled.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 8px;
`

export const Title = styled.h3`
    margin: 0.5rem 0;
    font-size: 1.1rem;
`

export const Description = styled.p`
    font-size: 0.9rem;
    color: #666;
`

export const Button = styled.button`
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

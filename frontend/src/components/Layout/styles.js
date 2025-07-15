import styled from "styled-components"

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`

export const Section = styled.section`
  padding: ${(props) => props.theme.spacing.xl} 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: ${(props) => props.gap || props.theme.spacing.lg};

  @media (min-width: 768px) {
    grid-template-columns: repeat(${(props) => Math.min(props.columns || 2, 2)}, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(${(props) => props.columns || 3}, minmax(0, 1fr));
  }
`

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

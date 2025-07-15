import styled from "styled-components"

export const PrimaryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  background: ${(props) => props.theme.gradients.primary};
  color: white;
  box-shadow: ${(props) => props.theme.shadows.sm};
`

export const SecondaryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  background: ${(props) => props.theme.gradients.secondary};
  color: white;
  box-shadow: ${(props) => props.theme.shadows.sm};
`

export const OutlineBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  background: ${(props) => props.theme.colors.primary[50]};
  color: ${(props) => props.theme.colors.primary[700]};
  border: 1px solid ${(props) => props.theme.colors.primary[200]};

  .dark & {
    background: ${(props) => props.theme.colors.primary[900]};
    color: ${(props) => props.theme.colors.primary[300]};
    border-color: ${(props) => props.theme.colors.primary[700]};
  }
`

export const SuccessBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  background: ${(props) => props.theme.colors.success[50]};
  color: ${(props) => props.theme.colors.success[700]};
  border: 1px solid ${(props) => props.theme.colors.success[200]};

  .dark & {
    background: ${(props) => props.theme.colors.success[900]};
    color: ${(props) => props.theme.colors.success[300]};
    border-color: ${(props) => props.theme.colors.success[700]};
  }
`

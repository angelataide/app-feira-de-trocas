import styled from "styled-components"

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${(props) => props.theme.colors.primary[200]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  color: ${(props) => props.theme.colors.neutral[900]};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary[100]};
    transform: scale(1.02);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.neutral[500]};
  }

  .dark & {
    background: rgba(30, 41, 59, 0.7);
    border-color: ${(props) => props.theme.colors.primary[700]};
    color: ${(props) => props.theme.colors.neutral[100]};

    &:focus {
      border-color: ${(props) => props.theme.colors.primary[500]};
      box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary[900]};
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.neutral[400]};
    }
  }
`

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${(props) => props.theme.colors.primary[200]};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  color: ${(props) => props.theme.colors.neutral[900]};
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary[100]};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.neutral[500]};
  }

  .dark & {
    background: rgba(30, 41, 59, 0.7);
    border-color: ${(props) => props.theme.colors.primary[700]};
    color: ${(props) => props.theme.colors.neutral[100]};

    &:focus {
      border-color: ${(props) => props.theme.colors.primary[500]};
      box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary[900]};
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.neutral[400]};
    }
  }
`

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const InputLabel = styled.label`
  font-weight: 600;
  color: ${(props) => props.theme.colors.neutral[700]};
  font-size: 0.875rem;

  .dark & {
    color: ${(props) => props.theme.colors.neutral[300]};
  }
`

export const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.primary[400]};
  z-index: 1;

  .dark & {
    color: ${(props) => props.theme.colors.primary[300]};
  }
`

export const InputWithIcon = styled(StyledInput)`
  padding-left: 3rem;
`

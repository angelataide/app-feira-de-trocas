import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => props.theme.colors.neutral[50]};
    color: ${(props) => props.theme.colors.neutral[900]};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .dark body {
    background: ${(props) => props.theme.colors.neutral[900]};
    color: ${(props) => props.theme.colors.neutral[50]};
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutral[100]};
  }

  .dark ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutral[800]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary[300]};
    border-radius: ${(props) => props.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primary[400]};
  }

  /* Selection colors */
  ::selection {
    background: ${(props) => props.theme.colors.primary[200]};
    color: ${(props) => props.theme.colors.primary[900]};
  }

  .dark ::selection {
    background: ${(props) => props.theme.colors.primary[800]};
    color: ${(props) => props.theme.colors.primary[100]};
  }

  /* Keyframes for animations */
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0,0,0);
    }
    40%, 43% {
      transform: translate3d(0, -30px, 0);
    }
    70% {
      transform: translate3d(0, -15px, 0);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }

  .animate-bounce {
    animation: bounce 1s infinite;
  }
`

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --main-blue: #007BFF;
    --darker-blue: #0056b3;
    --lighter-blue: #e7f5ff;
    --text-dark: #222;
    --text-medium: #555;
    --text-light: #777;
    --bg-light-blue: #F0F8FF;
    --bg-lighter-blue: #E6F3FF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(180deg, var(--bg-light-blue) 0%, var(--bg-lighter-blue) 100%);
    color: var(--text-medium);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    line-height: 1.6;
  }
`;

export default GlobalStyles;
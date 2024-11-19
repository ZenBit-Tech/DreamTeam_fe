import { createGlobalStyle } from 'styled-components';

import { COLORS } from './assets/styles/constants/colors';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${COLORS.onSurface};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${COLORS.onSurface};
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: ${COLORS.accent500};
    }
  }

  button {
    font: inherit;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  input, textarea {
    font: inherit;
    border: none;
    &:focus {
      outline: none;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

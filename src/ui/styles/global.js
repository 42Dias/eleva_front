import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import 'react-toastify/dist/ReactToastify.css'


export const GlobalStyle = createGlobalStyle`
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    color: black;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 1200px;
    height: 600px;
    background: white;
    overflow-y: auto;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.6);
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.neutral[100]};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    position: relative;
  }

  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  &::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.green};
  }
`

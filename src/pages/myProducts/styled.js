import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
`

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 70px;
    width: 400px;
    height: 400px;
  }
`
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 10px 20px;
    font-size: 15px;
    text-decoration: none;
    color: ${theme.colors.white};
    background: ${theme.colors.green};
    border-radius: 5px;
    margin: 20px 0 0 0;
    width: 256px;
    height: 48px;
    text-align: center;
  }

  :hover {
    opacity: 70%;
    transition: 0.5s;
  }
`
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 3rem;
    color: ${theme.colors.neutral[400]};
  }
`

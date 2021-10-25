import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerLogin = styled.div`
  height: 100%;
`

export const Content = styled.div`
  width: calc(100% - 250px);
  position: relative;
  left: 250px;
  padding: 2%;
  background: ${theme.colors.neutral[200]};
`

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 30px;
    width: 350px;
    height: 350px;
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
    margin: 35px 0 0 0;
    width: 256px;
    height: 48px;
    text-align: center;
  }

  :hover {
    opacity: 70%;
    transition: 0.5s;
  }
`

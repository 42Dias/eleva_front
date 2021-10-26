import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;

  h1 {
    margin: 10px;
    color: ${theme.colors.blue};
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  width: 200px;
  height: 48px;
  background: ${theme.colors.white};
  border-radius: 4px;
  border: none;
  color: ${theme.colors.blue};
  padding: 0 0 0 10px;
  margin: 0 0 20px 0;

  &[type='radio'] {
    height: 15px;
    width: 15px;
  }
`

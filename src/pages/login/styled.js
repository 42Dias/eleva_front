import styled from 'styled-components'
import { theme } from '../../ui/styles/theme'

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
`

export const GridLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
`

export const BoxImage = styled.div`
  background-color: ${theme.colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 500px;
    height: 500px;
  }
`
export const BoxLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.blue};
`

export const Form = styled.form`
  h2 {
    text-align: left;
    display: flex;
    align-items: left;
    justify-content: left;
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
    color: white;
  }
`

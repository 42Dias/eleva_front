import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 40px;
    width: 55px;
    left: 365px;
    top: 133px;
    border-radius: 5px;
    background: ${theme.colors.green};
    border: none;

    svg {
      color: ${theme.colors.white};
    }
  }
`

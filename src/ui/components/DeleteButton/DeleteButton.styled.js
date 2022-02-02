import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Content = styled.div`
  button {
    position: relative;
    top: 11px;
    background: ${theme.colors.red};
    width: 35px;
    height: 35px;

    svg {
      color: ${theme.colors.white};
    }
  }
`

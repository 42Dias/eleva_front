import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'


export const Change = styled.button`
    width: 35px;
    height: 35px;
    border: 0;
    border-radius: 5px;
    background: ${theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;

  svg {
    color: ${theme.colors.white};
    font-size: 18px;
  }
`

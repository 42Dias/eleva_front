

import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const GenericInput = styled.input`
width: 70%;
height: 48px;
box-sizing: border-box;
border-radius: 4px;
margin: 10px 0;
padding: 0 7px;
border: 0;
transition: 0.4s;

:focus {
border: 1px solid ${theme.colors.green};
background: transparent;
color: ${theme.colors.green};
}
`

import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 3rem;
    color: ${theme.colors.neutral[400]};
  }
`

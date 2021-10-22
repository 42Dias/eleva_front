import styled from 'styled-components'
import { theme } from '../../ui/styles/theme'

export const Content = styled.div`
  width: calc(100% - 250px);
  position: relative;
  left: 250px;
  padding: 2%;
  background: ${theme.colors.neutral[200]};
`

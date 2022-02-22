

import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const GreenBtn = styled.button`
    width: 142px;
    height: 35px;
    border-radius: 5px;
    background: ${theme.colors.green};
    justify-content: center;
    border: 0;
    color: white;
    display: flex;
    align-items: center;

    svg {
      margin-left: 10px;
    }
`

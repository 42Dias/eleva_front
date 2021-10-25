import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerBuy = styled.div`
  width: 100vw;
  height: 100vh;
`

export const BoxBuy = styled.div`
  display: flex;
`

/*
export const Aside = styled.aside`
  p {
    color: ${theme.colors.neutral[400]};
    margin-right: 50rem;
    margin-top: 20px;
    background: ${theme.colors.neutral[50]};
    font-size: 14px;
  }
` */

export const ContainerPurchases = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: ${theme.colors.blue};
  }

  p {
    color: ${theme.colors.neutral[500]};
  }

  strong {
    color: ${theme.colors.blue};
  }

  button {
    width: 30px;
    height: 25px;
    margin-left: 140px;
    background: ${theme.colors.green};
    border: none;
    border-radius: 3px;

    svg {
      color: ${theme.colors.white};
    }
  }
`

export const Items = styled.div`
  width: 223px;
  height: 223px;
  background: ${theme.colors.neutral[50]};
  margin: 0 -20px 0 75px;
  background: ${theme.colors.neutral[200]};
`

import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const ContainerError = styled.div`
  height: 100%;
  padding: 40px 15px;

  h2 {
    font-size: 24px;
    color: ${theme.colors.neutral[0]};
    padding: 15px 0;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
`

export const ErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }

  img {
    width: 400px;
    height: 400px;
  }

  a.btnError {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 40px;
    background: ${theme.colors.green};
    border-radius: 5px;
    color: ${theme.colors.white};
    font-size: 16px;
  }
`

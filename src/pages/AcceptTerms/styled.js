import styled from 'styled-components/macro'
import { theme } from '../../ui/styles/theme'

export const AcceptTerms = styled.div`
  color: ${theme.colors.blue};
  background: ${theme.colors.darkBlue};
  height: 100% !important;
  width: 100% !important;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    padding-top: 30px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: 24px;
    padding-top: 60px;
  }

  p {
    font-size: 16px;
    color: ${theme.colors.white};
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }

    h1 {
      font-size: 18px;
    }
  }
`

export const ContentTerms = styled.div`
  max-width: 900px;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 4%;
  }

  a {
    width: 335px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.green};
    border-radius: 5px;
    color: ${theme.colors.white};
    font-size: 16px;
    margin: 50px auto;
  }
`
